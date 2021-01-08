/*
高级类型
    交叉类型（Intersection Types）
    交叉类型是将多个类型合并为一个类型。
    这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
    例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。
    就是说这个类型的对象同时拥有了这三种类型的成员。

    我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。
    （在JavaScript里发生这种情况的场合很多！） 下面是如何创建混入的一个简单例子：
*/

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let key in first) {
    (<any>result)[key] = (<any>first)[key];
  }
  for (let key in second) {
    if (!result.hasOwnProperty(key)) {
      (<any>result)[key] = (<any>second)[key];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

interface Loggable {
  log(): void;
}

class ConsloeLogger implements Loggable {
  name: string;
  log(): void {
    console.log("this.name=", this.name);
  }
}

var jim = extend(new Person("jim"), new ConsloeLogger());
var n = jim.name;
jim.log();

/*

联合类型（Union Types）
联合类型与交叉类型很有关联，但是使用上却完全不同。
偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数。 例如下面的函数：
padLeft存在一个问题， padding参数的类型指定成了 any。 
这就是说我们可以传入一个既不是 number也不是 string类型的参数，但是TypeScript却不报错。
let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错

*/

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

/*
在传统的面向对象语言里，我们可能会将这两种类型抽象成有层级的类型。
这么做显然是非常清晰的，但同时也存在了过度设计。
padLeft原始版本的好处之一是允许我们传入原始类型。 
这样做的话使用起来既简单又方便。
如果我们就是想使用已经存在的函数的话，这种新的方式就不适用了。

代替 any， 我们可以使用 联合类型做为 padding的参数：
联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
这里的联合类型可能有点复杂，但是你很容易就习惯了。 如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员。
这个例子里， Bird具有一个 fly成员。 我们不能确定一个 Bird | Fish类型的变量是否有 fly方法。
如果变量在运行时是 Fish类型，那么调用 pet.fly()就出错了。


*/
function padLeft1(value: string, padding: string | number) {
  // ...
}

// let indentedString = padLeft1("Hello world", true); // errors during compilation
let indentedString1 = padLeft1("Hello world", 1); //
let indentedString2 = padLeft1("Hello world", "str"); //

/*
用户自定义的类型保护
这里可以注意到我们不得不多次使用类型断言。
假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet的类型的话就好了。

TypeScript里的 类型保护机制让它成为了现实。
类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 
要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：

*/

/*
 typeof类型保护
 现在我们回过头来看看怎么使用联合类型书写 padLeft代码。 我们可以像下面这样利用类型断言来写：
 */

/*
instanceof类型保护
如果你已经阅读了 typeof类型保护并且对JavaScript里的 instanceof操作符熟悉的话，你可能已经猜到了这节要讲的内容。

instanceof类型保护是通过构造函数来细化类型的一种方式。 比如，我们借鉴一下之前字符串填充的例子：

*/

//联合类型
interface Padder {
  getPaddingString(): string | number;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {
    this.numSpaces = numSpaces;
  }
  getPaddingString() {
    return this.numSpaces;
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {
    this.value = value;
  }
  getPaddingString() {
    return this.value;
  }
}

const getRandomPadder = () => {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
};

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  // 类型细化为'StringPadder'
}

/*
可选参数和可选属性
使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:

*/

function f(x: number, y?: number) {
  return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'

//可选属性也会有同样的处理：
class C {
  a: number;
  b?: number;
}
let c = new C();
c.a = 12;
// c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
// c.b = null; // error, 'null' is not assignable to 'number | undefined'

/*
类型保护和类型断言
由于可以为null的类型是通过联合类型实现，那么你需要使用类型保护来去除 null。
幸运地是这与在JavaScript里写的代码一致：
*/

function f1(sn: string | null): string {
  if (sn == null) {
    return "default";
  } else {
    return sn;
  }
}

/*
类型别名
类型别名会给一个类型起个新名字。 
类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
*/

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameResolver): Name {
  if (typeof n == "string") {
    return n;
  } else {
    return n();
  }
}

/*
起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。
给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入：
*/

type Container<T> = { value: T };
//我们也可以使用类型别名来在属性里引用自己：
type Tree<T> = {
  value: T; //第一种引用方式
  left: Tree<T>; //第二种引用方式
  right: Tree<T>;
  top: Tree<T>;
};

//与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型。 树形类型
type LinkedList<T> = T & { next: LinkedList<T> };
interface Person {
  name: string;
}

var people: LinkedList<Person>;
// var s = people.name;
// s = people.next.name;
// s = people.next.next.name;
// s = people.next.next.next.name;

//然而，类型别名不能出现在声明右侧的任何地方。
// type Yikes = Array<Yikes>; // error

type Alias = { num: number };
interface Interface {
  num: number;
}

/*
在编写类声明文件（.d.ts）时，declare 表示声明作用。
如果是中文的话，见声明文件-示例。
*/
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 值运行输入这几个类型字符
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here  输入其他类型字符会报错

//字符串字面量类型还可以用于区分函数重载：函数重载
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
// 返回不同的类型 就是重载
function createElement(tagName: string): Element {
  let el: Element = document.getElementsByTagName(tagName)[0];
  return el;
  // ... code goes here ...
}

// createElement("img");
// createElement("input");
// createElement('div')

/*
数字字面量类型
TypeScript还具有数字字面量类型。
*/

function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 {
  return;
}
//我们很少直接这样使用，但它们可以用在缩小范围调试bug的时候：
// function foo(x: number) {
//     if (x !== 1 || x !== 2) {
//         //         ~~~~~~~
//         // Operator '!==' cannot be applied to types '1' and '2'.
//     }
// }

/*
枚举成员类型
如我们在 枚举一节里提到的，当每个枚举成员都是用字面量初始化的时候枚举成员是具有类型的。

在我们谈及“单例类型”的时候，多数是指枚举成员类型和数字/字符串字面量类型，尽管大多数用户会互换使用“单例类型”和“字面量类型”。

可辨识联合（Discriminated Unions）
你可以合并单例类型，联合类型，类型保护和类型别名来创建一个叫做 可辨识联合的高级模式，它也称做 标签联合或 代数数据类型。 可辨识联合在函数式编程很有用处。 一些语言会自动地为你辨识联合；而TypeScript则基于已有的JavaScript模式。 它具有3个要素：

具有普通的单例类型属性— 可辨识的特征。
一个类型别名包含了那些类型的联合— 联合。
此属性上的类型保护。
*/

interface Square {
  kind: "square"; //属性定义
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

//现在我们使用可辨识联合:
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

/*
完整性检查
当没有涵盖所有可辨识联合的变化时，我们想让编译器可以通知我们。
比如，如果我们添加了 Triangle到 Shape，我们同时还需要更新 area:
*/
function area1(s: Shape): number {
  // error: returns number | undefined
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

area1({
  kind: "square",
  size: 1,
});

/*
因为 switch没有包涵所有情况，所以TypeScript认为这个函数有时候会返回 undefined。
如果你明确地指定了返回值类型为 number，那么你会看到一个错误，因为实际上返回值的类型为 number | undefined。
然而，这种方法存在些微妙之处且 --strictNullChecks对旧代码支持不好。

第二种方法使用 never类型，编译器用它来进行完整性检查：
    这里， assertNever检查 s是否为 never类型—即为除去所有可能情况后剩下的类型。
    如果你忘记了某个case，那么 s将具有一个真实的类型并且你会得到一个错误。
    这种方式需要你定义一个额外的函数，但是在你忘记某个case的时候也更加明显。
*/

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
function area2(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s); // error here if there are missing cases
  }
}

/*
多态的 this类型
    多态的 this类型表示的是某个包含类或接口的 子类型。 
    这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承，比如。
    在计算器的例子里，在每个操作之后都返回 this类型：
*/

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2).multiply(5).add(1).currentValue();

//由于这个类使用了 this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。
/*
如果没有 this类型， ScientificCalculator就不能够在继承 BasicCalculator的同时还保持接口的连贯性。 
multiply将会返回 BasicCalculator，它并没有 sin方法。
然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator。
*/

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
  // ... other operations go here ...
}

let v1 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();

/*
索引类型（Index types）
使用索引类型，编译器就能够检查使用了动态属性名的代码。
 例如，一个常见的JavaScript模式是从对象中选取属性的子集。
*/

function pluck<T>(o: any, names: T[]) {
  return names.map((n) => o[n]);
}

function pluck1<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Jarid",
  age: 35,
};
/*
编译器会检查 name是否真的是 Person的一个属性。
本例还引入了几个新的类型操作符。 首先是 keyof T， 
索引类型查询操作符。 对于任何类型 T， keyof T的结果为 
T上已知的公共属性名的联合。 例如：
*/
let strings: string[] = pluck(person, ["name"]); // ok, string[]
let strings1: string[] = pluck1(person, ["name"]); // ok, string[]
console.log("strings=", strings);
console.log("strings1=", strings1);

let personProps: keyof Person; // 'name' | 'age'  检索key
/*
keyof Person是完全可以与 'name' | 'age'互相替换的。 不同的是如果你添加了其它的属性到
 Person，例如 address: string，那么 keyof Person会自动变为 'name' | 'age' | 'address'。
你可以在像 pluck函数这类上下文里使用 keyof，因为在使用之前你并不清楚可能出现的属性名。 
但编译器会检查你是否传入了正确的属性名给 pluck：
*/
personProps = "name";
pluck(person, ["age", "unknown"]); // 正常
// pluck1(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'

/*
第二个操作符是 T[K]， 索引访问操作符。
在这里，类型语法反映了表达式语法。 
这意味着 person['name']具有类型 Person['name'] — 在我们的例子里则为 string类型。
然而，就像索引类型查询一样，你可以在普通的上下文里使用 T[K]，这正是它的强大所在。 
你只要确保类型变量 K extends keyof T就可以了。
  例如下面 getProperty函数的例子：
*/

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}

/*
getProperty里的 o: T和 name: K，意味着 o[name]: T[K]。
 当你返回 T[K]的结果，编译器会实例化键的真实类型，
 因此 getProperty的返回值类型会随着你需要的属性改变。
*/

let name: string = getProperty(person, "name");
let age: number = getProperty(person, "age");
// let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

/*
索引类型和字符串索引签名
keyof和 T[K]与字符串索引签名进行交互。1
如果你有一个带有字符串索引签名的类型，那么 keyof T会是 string。 
并且 T[string]为索引签名的类型：
*/

interface Map<T> {
  [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number

export {};
