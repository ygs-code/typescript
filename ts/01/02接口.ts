/*

接口是一种抽象类的约束，实际编译成es5没有代码存在的

可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 
可选属性在应用“option bags”模式时很常用，
即给函数传入的参数对象中只有部分属性赋值了。
*/
// 定义一个对象的接口
interface ISquareConfig {
    color?: string;
    width?: number;
    name: string;
}

interface ISquareValue {
    color?: string;
    width?: number;
    name: string;
}

function createSquareConfig(config: ISquareConfig): ISquareValue {
    return {
        ...config,
    };
}

let square: ISquareValue = createSquareConfig({
    color: 'red',
    name: 'Square name',
});

console.log('square=', square);

/*
额外的属性检查
我们在第一个例子里使用了接口，TypeScript让我们传入{ size: number; label: string; }
到仅期望得到{ label: string; }的函数里。 我们已经学过了可选属性，
并且知道他们在“option bags”模式里很有用。
注意传入createSquare的参数拼写为colour而不是color。 在JavaScript里，这会默默地失败。
*/

interface ISquareConfig2 {
    color?: string;
    width?: number;
    name: string;
    [propName: string]: any; //添加额外属性colour
}

interface ISquareValue2 {
    color?: string;
    width?: number;
    name: string;
    [propName: string]: any; //添加额外属性colour
}

function createSquareConfig2(config: ISquareConfig2): ISquareValue2 {
    return {
        ...config,
    };
}

let square2: ISquareValue2 = createSquareConfig2({
    color: 'red',
    name: 'Square name',
    colour: 'yellow',
});

console.log('square2=', square2);

/*
函数类型
接口能够描述JavaScript中对象拥有的各种各样的外形。
除了描述带有属性的普通对象外，接口也可以描述函数类型。
为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
它就像是一个只有参数列表和返回值类型的函数定义。
参数列表里的每个参数都需要名字和类型。

*/
// 定义一个函数的接口
interface ISearchFunc {
    (source: string, subString: string): boolean;
}

//实现接口
const SearchFunc: ISearchFunc = function (
    source: string,
    subString: string
): boolean {
    return true;
};

/*
可索引的类型
与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，
比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，
它描述了对象索引的类型，还有相应的索引返回值类型。
让我们看一个例子：
*/

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];

let myArray1: string[] = ['Bob', 'Fred'];
let myStr1: string = myArray1[0];

let myAray2: Array<string> = ['Bob', 'Fred'];
let myStr2: string = myAray2[0];

console.log('myStr=', myStr);
console.log('myStr1=', myStr1);
console.log('myStr2=', myStr2);

/*

类类型接口

与C#或Java里接口的基本作用一样，
TypeScript也能够用它来明确的强制一个类去符合某种契约。

接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
*/
//定义一个类的接口
interface ClockInterface0 {
    currentTime: Date;
    setTime(d: Date): Date;
}

class Clock implements ClockInterface0 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
        return d;
    }
    constructor(h: number, m: number) {}
}

/*
类静态部分与实例部分的区别
当你操作类和接口的时候，你要知道类是具有两个类型的：
静态部分的类型和实例的类型。
 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
*/

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep beep');
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick tock');
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/*
继承接口
和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，
可以更灵活地将接口分割到可重用的模块里。
*/

interface Shape {
    color: string;
}

interface Square1 extends Shape {
    sideLength: number;
}

console.log(1111111);
let square1 = <Square1>{};
square1.color = 'blue';
square1.sideLength = 10;

/*
混合类型
先前我们提过，接口能够描述JavaScript里丰富的类型。
因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。

一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
*/

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    //返回是一个类 声明一个类
    let counter: Counter = <Counter>function (start: number): void {};

    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log('c=======', c);

/*
接口继承类
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
接口同样会继承到类的private和protected成员。
这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。 例：
*/

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }

class Location {

}


export {};
