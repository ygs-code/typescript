/*
类
介绍
传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，
但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。
从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。
使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，
而不需要等到下个JavaScript版本。

类
下面看一个使用类的例子：
*/
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

let greeter = new Greeter('world');

/*

继承
在TypeScript里，我们可以使用常用的面向对象模式。
基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

看下面的例子：
*/
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

//下面我们来看个更加复杂的例子。

class Animal1 {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal1 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal1 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

/*
公共，私有与受保护的修饰符
默认为 public
在上面的例子里，我们可以自由的访问程序里定义的成员。
如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，
C#要求必须明确地使用 public指定成员是可见的。
在TypeScript里，成员都默认为 public。
你也可以明确的将一个成员标记成 public。 我们可以用下面的方式来重写上面的 Animal类：
*/
class Animal2 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/*
理解 private
当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
private 类的私有成员，只能在内部访问，在外部访问不到，无法被继承，我们可以将不需要被外部修改的定义为私有的
*/

class Animal3 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    getNmae(): string {
        return this.name;
    }
}
// 获取私有类里面的name
console.log(new Animal3('Cat').getNmae()); // 错误: 'name' 是私有的.

/*
 理解 protected
protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
和private类似，也是私有成员，只能在内部访问，外部无法访问，但是可以被继承
可以被继承，但是只能在内部访问
 */

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        // 可以访问Person的name  protected
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

class Person1 {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee 能够继承 Person
class Employee1 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard1 = new Employee1('Howard', 'Sales');
// let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.

/*
readonly修饰符
你可以使用 readonly关键字将属性设置为只读的。 
只读属性必须在声明时或构造函数里被初始化。
*/
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
/*
参数属性
在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，
并且立刻将 theName的值赋给 name，这种情况经常会遇到。
参数属性可以方便地让我们在一个地方定义并初始化一个成员。 
下面的例子是对之前 Octopus类的修改版，使用了参数属性：
*/

class Octopus1 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}
}

/*
存取器
TypeScript支持通过getters/setters来截取对对象成员的访问。
它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 get和 set。 
首先，我们从一个没有使用存取器的例子开始。
*/

// class Employee2 {
//     fullName: string;
// }

// let employee = new Employee2();
// employee.fullName = 'Bob Smith';
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// let passcode = 'secret passcode';
// // get 和 set 会编译成 Object.defineProperty get和set自定义属性
// class Employee3 {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == 'secret passcode') {
//             this._fullName = newName;
//         } else {
//             console.log('Error: Unauthorized update of employee!');
//         }
//     }
// }

// let employee3 = new Employee3();
// employee3.fullName = 'Bob Smith';
// if (employee.fullName) {
//     console.log('employee.fullName=', employee.fullName);
// }

/*
静态属性
    到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 
    我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 
    在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。
    每个实例想要访问这个属性的时候，都要在 origin前面加上类名。
    如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
*/

class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/*
抽象类

抽象类做为其它派生类的基类使用。
它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 
abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

*/

abstract class Animal5 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

/*
抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
抽象方法的语法与接口方法相似。 
两者都是定义方法签名但不包含方法体。 
然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
*/

abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
//  因为类型声明 department: Department  引用了抽象类Department所以引用generateReports会报错
//   department.generateReports(); // 错误: 方法在声明的抽象类中不存在


/*
高级技巧
构造函数
当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。

*/

/*

把类当做接口使用
如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。
 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
*/

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

console.log('point3d==',point3d)


export default{}