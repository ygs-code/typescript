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

export {};
