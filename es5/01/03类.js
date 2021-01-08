"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
/*

继承
在TypeScript里，我们可以使用常用的面向对象模式。
基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

看下面的例子：
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//下面我们来看个更加复杂的例子。
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal1));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
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
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
/*
理解 private
当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
private 类的私有成员，只能在内部访问，在外部访问不到，无法被继承，我们可以将不需要被外部修改的定义为私有的
*/
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.getNmae = function () {
        return this.name;
    };
    return Animal3;
}());
// 获取私有类里面的name
console.log(new Animal3('Cat').getNmae()); // 错误: 'name' 是私有的.
/*
 理解 protected
protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
和private类似，也是私有成员，只能在内部访问，外部无法访问，但是可以被继承
可以被继承，但是只能在内部访问
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        // 可以访问Person的name  protected
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
// Employee 能够继承 Person
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person1));
var howard1 = new Employee1('Howard', 'Sales');
// let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.
/*
readonly修饰符
你可以使用 readonly关键字将属性设置为只读的。
只读属性必须在声明时或构造函数里被初始化。
*/
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
/*
参数属性
在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，
并且立刻将 theName的值赋给 name，这种情况经常会遇到。
参数属性可以方便地让我们在一个地方定义并初始化一个成员。
下面的例子是对之前 Octopus类的修改版，使用了参数属性：
*/
var Octopus1 = /** @class */ (function () {
    function Octopus1(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus1;
}());
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
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/*
抽象类

抽象类做为其它派生类的基类使用。
它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

*/
var Animal5 = /** @class */ (function () {
    function Animal5() {
    }
    Animal5.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal5;
}());
/*
抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
抽象方法的语法与接口方法相似。
两者都是定义方法签名但不包含方法体。
然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
*/
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
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
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log('point3d==', point3d);
exports["default"] = {};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RTtBQUVGO0lBQUE7SUFHQSxDQUFDO0lBQUQsWUFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBTUQsSUFBSSxPQUFPLEdBQVksRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLE9BQU8sQ0FBQyxDQUFBO0FBR2hDLHFCQUFjLEVBQUUsQ0FBQSIsImZpbGUiOiIwMS8wM+exuy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nsbtcbuS7i+e7jVxu5Lyg57uf55qESmF2YVNjcmlwdOeoi+W6j+S9v+eUqOWHveaVsOWSjOWfuuS6juWOn+Wei+eahOe7p+aJv+adpeWIm+W7uuWPr+mHjeeUqOeahOe7hOS7tu+8jFxu5L2G5a+55LqO54af5oKJ5L2/55So6Z2i5ZCR5a+56LGh5pa55byP55qE56iL5bqP5ZGY5p2l6K6y5bCx5pyJ5Lqb5qOY5omL77yM5Zug5Li65LuW5Lus55So55qE5piv5Z+65LqO57G755qE57un5om/5bm25LiU5a+56LGh5piv55Sx57G75p6E5bu65Ye65p2l55qE44CCXG7ku45FQ01BU2NyaXB0IDIwMTXvvIzkuZ/lsLHmmK9FQ01BU2NyaXB0IDblvIDlp4vvvIxKYXZhU2NyaXB056iL5bqP5ZGY5bCG6IO95aSf5L2/55So5Z+65LqO57G755qE6Z2i5ZCR5a+56LGh55qE5pa55byP44CCXG7kvb/nlKhUeXBlU2NyaXB077yM5oiR5Lus5YWB6K645byA5Y+R6ICF546w5Zyo5bCx5L2/55So6L+Z5Lqb54m55oCn77yM5bm25LiU57yW6K+R5ZCO55qESmF2YVNjcmlwdOWPr+S7peWcqOaJgOacieS4u+a1gea1j+iniOWZqOWSjOW5s+WPsOS4iui/kOihjO+8jFxu6ICM5LiN6ZyA6KaB562J5Yiw5LiL5LiqSmF2YVNjcmlwdOeJiOacrOOAglxuXG7nsbtcbuS4i+mdoueci+S4gOS4quS9v+eUqOexu+eahOS+i+WtkO+8mlxuKi9cbmNsYXNzIEdyZWV0ZXIge1xuICAgIGdyZWV0aW5nOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICAgIH1cbiAgICBncmVldCgpIHtcbiAgICAgICAgcmV0dXJuICdIZWxsbywgJyArIHRoaXMuZ3JlZXRpbmc7XG4gICAgfVxufVxuXG5sZXQgZ3JlZXRlciA9IG5ldyBHcmVldGVyKCd3b3JsZCcpO1xuXG4vKlxuXG7nu6fmib9cbuWcqFR5cGVTY3JpcHTph4zvvIzmiJHku6zlj6/ku6Xkvb/nlKjluLjnlKjnmoTpnaLlkJHlr7nosaHmqKHlvI/jgIJcbuWfuuS6juexu+eahOeoi+W6j+iuvuiuoeS4reS4gOenjeacgOWfuuacrOeahOaooeW8j+aYr+WFgeiuuOS9v+eUqOe7p+aJv+adpeaJqeWxleeOsOacieeahOexu+OAglxuXG7nnIvkuIvpnaLnmoTkvovlrZDvvJpcbiovXG5jbGFzcyBBbmltYWwge1xuICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVyczogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQW5pbWFsIG1vdmVkICR7ZGlzdGFuY2VJbk1ldGVyc31tLmApO1xuICAgIH1cbn1cblxuY2xhc3MgRG9nIGV4dGVuZHMgQW5pbWFsIHtcbiAgICBiYXJrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnV29vZiEgV29vZiEnKTtcbiAgICB9XG59XG5cbmNvbnN0IGRvZyA9IG5ldyBEb2coKTtcbmRvZy5iYXJrKCk7XG5kb2cubW92ZSgxMCk7XG5kb2cuYmFyaygpO1xuXG4vL+S4i+mdouaIkeS7rOadpeeci+S4quabtOWKoOWkjeadgueahOS+i+WtkOOAglxuXG5jbGFzcyBBbmltYWwxIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodGhlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoZU5hbWU7XG4gICAgfVxuICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVyczogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IG1vdmVkICR7ZGlzdGFuY2VJbk1ldGVyc31tLmApO1xuICAgIH1cbn1cblxuY2xhc3MgU25ha2UgZXh0ZW5kcyBBbmltYWwxIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVycyA9IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NsaXRoZXJpbmcuLi4nKTtcbiAgICAgICAgc3VwZXIubW92ZShkaXN0YW5jZUluTWV0ZXJzKTtcbiAgICB9XG59XG5cbmNsYXNzIEhvcnNlIGV4dGVuZHMgQW5pbWFsMSB7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBtb3ZlKGRpc3RhbmNlSW5NZXRlcnMgPSA0NSkge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FsbG9waW5nLi4uJyk7XG4gICAgICAgIHN1cGVyLm1vdmUoZGlzdGFuY2VJbk1ldGVycyk7XG4gICAgfVxufVxuXG5sZXQgc2FtID0gbmV3IFNuYWtlKCdTYW1teSB0aGUgUHl0aG9uJyk7XG5sZXQgdG9tOiBBbmltYWwgPSBuZXcgSG9yc2UoJ1RvbW15IHRoZSBQYWxvbWlubycpO1xuXG5zYW0ubW92ZSgpO1xudG9tLm1vdmUoMzQpO1xuXG4vKlxu5YWs5YWx77yM56eB5pyJ5LiO5Y+X5L+d5oqk55qE5L+u6aWw56ymXG7pu5jorqTkuLogcHVibGljXG7lnKjkuIrpnaLnmoTkvovlrZDph4zvvIzmiJHku6zlj6/ku6Xoh6rnlLHnmoTorr/pl67nqIvluo/ph4zlrprkuYnnmoTmiJDlkZjjgIJcbuWmguaenOS9oOWvueWFtuWug+ivreiogOS4reeahOexu+avlOi+g+S6huino++8jOWwseS8muazqOaEj+WIsOaIkeS7rOWcqOS5i+WJjeeahOS7o+eggemHjOW5tuayoeacieS9v+eUqCBwdWJsaWPmnaXlgZrkv67ppbDvvJvkvovlpoLvvIxcbkMj6KaB5rGC5b+F6aG75piO56Gu5Zyw5L2/55SoIHB1YmxpY+aMh+WumuaIkOWRmOaYr+WPr+ingeeahOOAglxu5ZyoVHlwZVNjcmlwdOmHjO+8jOaIkOWRmOmDvem7mOiupOS4uiBwdWJsaWPjgIJcbuS9oOS5n+WPr+S7peaYjuehrueahOWwhuS4gOS4quaIkOWRmOagh+iusOaIkCBwdWJsaWPjgIIg5oiR5Lus5Y+v5Lul55So5LiL6Z2i55qE5pa55byP5p2l6YeN5YaZ5LiK6Z2i55qEIEFuaW1hbOexu++8mlxuKi9cbmNsYXNzIEFuaW1hbDIge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRoZU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGVOYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgbW92ZShkaXN0YW5jZUluTWV0ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBtb3ZlZCAke2Rpc3RhbmNlSW5NZXRlcnN9bS5gKTtcbiAgICB9XG59XG5cbi8qXG7nkIbop6MgcHJpdmF0ZVxu5b2T5oiQ5ZGY6KKr5qCH6K6w5oiQIHByaXZhdGXml7bvvIzlroPlsLHkuI3og73lnKjlo7DmmI7lroPnmoTnsbvnmoTlpJbpg6jorr/pl67jgILmr5TlpoLvvJpcbnByaXZhdGUg57G755qE56eB5pyJ5oiQ5ZGY77yM5Y+q6IO95Zyo5YaF6YOo6K6/6Zeu77yM5Zyo5aSW6YOo6K6/6Zeu5LiN5Yiw77yM5peg5rOV6KKr57un5om/77yM5oiR5Lus5Y+v5Lul5bCG5LiN6ZyA6KaB6KKr5aSW6YOo5L+u5pS555qE5a6a5LmJ5Li656eB5pyJ55qEXG4qL1xuXG5jbGFzcyBBbmltYWwzIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih0aGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhlTmFtZTtcbiAgICB9XG4gICAgZ2V0Tm1hZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbi8vIOiOt+WPluengeacieexu+mHjOmdoueahG5hbWVcbmNvbnNvbGUubG9nKG5ldyBBbmltYWwzKCdDYXQnKS5nZXRObWFlKCkpOyAvLyDplJnor686ICduYW1lJyDmmK/np4HmnInnmoQuXG5cbi8qXG4g55CG6KejIHByb3RlY3RlZFxucHJvdGVjdGVk5L+u6aWw56ym5LiOIHByaXZhdGXkv67ppbDnrKbnmoTooYzkuLrlvojnm7jkvLzvvIzkvYbmnInkuIDngrnkuI3lkIzvvIwgcHJvdGVjdGVk5oiQ5ZGY5Zyo5rS+55Sf57G75Lit5LuN54S25Y+v5Lul6K6/6Zeu44CCXG7lkoxwcml2YXRl57G75Ly877yM5Lmf5piv56eB5pyJ5oiQ5ZGY77yM5Y+q6IO95Zyo5YaF6YOo6K6/6Zeu77yM5aSW6YOo5peg5rOV6K6/6Zeu77yM5L2G5piv5Y+v5Lul6KKr57un5om/XG7lj6/ku6Xooqvnu6fmib/vvIzkvYbmmK/lj6rog73lnKjlhoXpg6jorr/pl65cbiAqL1xuXG5jbGFzcyBQZXJzb24ge1xuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG5jbGFzcyBFbXBsb3llZSBleHRlbmRzIFBlcnNvbiB7XG4gICAgcHJpdmF0ZSBkZXBhcnRtZW50OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlcGFydG1lbnQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxldmF0b3JQaXRjaCgpIHtcbiAgICAgICAgLy8g5Y+v5Lul6K6/6ZeuUGVyc29u55qEbmFtZSAgcHJvdGVjdGVkXG4gICAgICAgIHJldHVybiBgSGVsbG8sIG15IG5hbWUgaXMgJHt0aGlzLm5hbWV9IGFuZCBJIHdvcmsgaW4gJHt0aGlzLmRlcGFydG1lbnR9LmA7XG4gICAgfVxufVxuXG5sZXQgaG93YXJkID0gbmV3IEVtcGxveWVlKCdIb3dhcmQnLCAnU2FsZXMnKTtcbmNvbnNvbGUubG9nKGhvd2FyZC5nZXRFbGV2YXRvclBpdGNoKCkpO1xuLy8gY29uc29sZS5sb2coaG93YXJkLm5hbWUpOyAvLyDplJnor69cblxuY2xhc3MgUGVyc29uMSB7XG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodGhlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoZU5hbWU7XG4gICAgfVxufVxuXG4vLyBFbXBsb3llZSDog73lpJ/nu6fmib8gUGVyc29uXG5jbGFzcyBFbXBsb3llZTEgZXh0ZW5kcyBQZXJzb24xIHtcbiAgICBwcml2YXRlIGRlcGFydG1lbnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGVwYXJ0bWVudDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGFydG1lbnQgPSBkZXBhcnRtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGV2YXRvclBpdGNoKCkge1xuICAgICAgICByZXR1cm4gYEhlbGxvLCBteSBuYW1lIGlzICR7dGhpcy5uYW1lfSBhbmQgSSB3b3JrIGluICR7dGhpcy5kZXBhcnRtZW50fS5gO1xuICAgIH1cbn1cblxubGV0IGhvd2FyZDEgPSBuZXcgRW1wbG95ZWUxKCdIb3dhcmQnLCAnU2FsZXMnKTtcbi8vIGxldCBqb2huID0gbmV3IFBlcnNvbjEoXCJKb2huXCIpOyAvLyDplJnor686ICdQZXJzb24nIOeahOaehOmAoOWHveaVsOaYr+iiq+S/neaKpOeahC5cblxuLypcbnJlYWRvbmx55L+u6aWw56ymXG7kvaDlj6/ku6Xkvb/nlKggcmVhZG9ubHnlhbPplK7lrZflsIblsZ7mgKforr7nva7kuLrlj6ror7vnmoTjgIIgXG7lj6ror7vlsZ7mgKflv4XpobvlnKjlo7DmmI7ml7bmiJbmnoTpgKDlh73mlbDph4zooqvliJ3lp4vljJbjgIJcbiovXG5jbGFzcyBPY3RvcHVzIHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbnVtYmVyT2ZMZWdzOiBudW1iZXIgPSA4O1xuICAgIGNvbnN0cnVjdG9yKHRoZU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGVOYW1lO1xuICAgIH1cbn1cbmxldCBkYWQgPSBuZXcgT2N0b3B1cygnTWFuIHdpdGggdGhlIDggc3Ryb25nIGxlZ3MnKTtcbi8vIGRhZC5uYW1lID0gXCJNYW4gd2l0aCB0aGUgMy1waWVjZSBzdWl0XCI7IC8vIOmUmeivryEgbmFtZSDmmK/lj6ror7vnmoQuXG4vKlxu5Y+C5pWw5bGe5oCnXG7lnKjkuIrpnaLnmoTkvovlrZDkuK3vvIzmiJHku6zlv4XpobvlnKhPY3RvcHVz57G76YeM5a6a5LmJ5LiA5Liq5Y+q6K+75oiQ5ZGYIG5hbWXlkozkuIDkuKrlj4LmlbDkuLogdGhlTmFtZeeahOaehOmAoOWHveaVsO+8jFxu5bm25LiU56uL5Yi75bCGIHRoZU5hbWXnmoTlgLzotYvnu5kgbmFtZe+8jOi/meenjeaDheWGtee7j+W4uOS8mumBh+WIsOOAglxu5Y+C5pWw5bGe5oCn5Y+v5Lul5pa55L6/5Zyw6K6p5oiR5Lus5Zyo5LiA5Liq5Zyw5pa55a6a5LmJ5bm25Yid5aeL5YyW5LiA5Liq5oiQ5ZGY44CCIFxu5LiL6Z2i55qE5L6L5a2Q5piv5a+55LmL5YmNIE9jdG9wdXPnsbvnmoTkv67mlLnniYjvvIzkvb/nlKjkuoblj4LmlbDlsZ7mgKfvvJpcbiovXG5cbmNsYXNzIE9jdG9wdXMxIHtcbiAgICByZWFkb25seSBudW1iZXJPZkxlZ3M6IG51bWJlciA9IDg7XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbmFtZTogc3RyaW5nKSB7fVxufVxuXG4vKlxu5a2Y5Y+W5ZmoXG5UeXBlU2NyaXB05pSv5oyB6YCa6L+HZ2V0dGVycy9zZXR0ZXJz5p2l5oiq5Y+W5a+55a+56LGh5oiQ5ZGY55qE6K6/6Zeu44CCXG7lroPog73luK7liqnkvaDmnInmlYjnmoTmjqfliLblr7nlr7nosaHmiJDlkZjnmoTorr/pl67jgIJcblxu5LiL6Z2i5p2l55yL5aaC5L2V5oqK5LiA5Liq566A5Y2V55qE57G75pS55YaZ5oiQ5L2/55SoIGdldOWSjCBzZXTjgIIgXG7pppblhYjvvIzmiJHku6zku47kuIDkuKrmsqHmnInkvb/nlKjlrZjlj5blmajnmoTkvovlrZDlvIDlp4vjgIJcbiovXG5cbi8vIGNsYXNzIEVtcGxveWVlMiB7XG4vLyAgICAgZnVsbE5hbWU6IHN0cmluZztcbi8vIH1cblxuLy8gbGV0IGVtcGxveWVlID0gbmV3IEVtcGxveWVlMigpO1xuLy8gZW1wbG95ZWUuZnVsbE5hbWUgPSAnQm9iIFNtaXRoJztcbi8vIGlmIChlbXBsb3llZS5mdWxsTmFtZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLmZ1bGxOYW1lKTtcbi8vIH1cblxuLy8gbGV0IHBhc3Njb2RlID0gJ3NlY3JldCBwYXNzY29kZSc7XG4vLyAvLyBnZXQg5ZKMIHNldCDkvJrnvJbor5HmiJAgT2JqZWN0LmRlZmluZVByb3BlcnR5IGdldOWSjHNldOiHquWumuS5ieWxnuaAp1xuLy8gY2xhc3MgRW1wbG95ZWUzIHtcbi8vICAgICBwcml2YXRlIF9mdWxsTmFtZTogc3RyaW5nO1xuXG4vLyAgICAgZ2V0IGZ1bGxOYW1lKCk6IHN0cmluZyB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9mdWxsTmFtZTtcbi8vICAgICB9XG5cbi8vICAgICBzZXQgZnVsbE5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4vLyAgICAgICAgIGlmIChwYXNzY29kZSAmJiBwYXNzY29kZSA9PSAnc2VjcmV0IHBhc3Njb2RlJykge1xuLy8gICAgICAgICAgICAgdGhpcy5fZnVsbE5hbWUgPSBuZXdOYW1lO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBVbmF1dGhvcml6ZWQgdXBkYXRlIG9mIGVtcGxveWVlIScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgZW1wbG95ZWUzID0gbmV3IEVtcGxveWVlMygpO1xuLy8gZW1wbG95ZWUzLmZ1bGxOYW1lID0gJ0JvYiBTbWl0aCc7XG4vLyBpZiAoZW1wbG95ZWUuZnVsbE5hbWUpIHtcbi8vICAgICBjb25zb2xlLmxvZygnZW1wbG95ZWUuZnVsbE5hbWU9JywgZW1wbG95ZWUuZnVsbE5hbWUpO1xuLy8gfVxuXG4vKlxu6Z2Z5oCB5bGe5oCnXG4gICAg5Yiw55uu5YmN5Li65q2i77yM5oiR5Lus5Y+q6K6o6K665LqG57G755qE5a6e5L6L5oiQ5ZGY77yM6YKj5Lqb5LuF5b2T57G76KKr5a6e5L6L5YyW55qE5pe25YCZ5omN5Lya6KKr5Yid5aeL5YyW55qE5bGe5oCn44CCIFxuICAgIOaIkeS7rOS5n+WPr+S7peWIm+W7uuexu+eahOmdmeaAgeaIkOWRmO+8jOi/meS6m+WxnuaAp+WtmOWcqOS6juexu+acrOi6q+S4iumdouiAjOS4jeaYr+exu+eahOWunuS+i+S4iuOAgiBcbiAgICDlnKjov5nkuKrkvovlrZDph4zvvIzmiJHku6zkvb/nlKggc3RhdGlj5a6a5LmJIG9yaWdpbu+8jOWboOS4uuWug+aYr+aJgOaciee9keagvOmDveS8mueUqOWIsOeahOWxnuaAp+OAglxuICAgIOavj+S4quWunuS+i+aDs+imgeiuv+mXrui/meS4quWxnuaAp+eahOaXtuWAme+8jOmDveimgeWcqCBvcmlnaW7liY3pnaLliqDkuIrnsbvlkI3jgIJcbiAgICDlpoLlkIzlnKjlrp7kvovlsZ7mgKfkuIrkvb/nlKggdGhpcy7liY3nvIDmnaXorr/pl67lsZ7mgKfkuIDmoLfvvIzov5nph4zmiJHku6zkvb/nlKggR3JpZC7mnaXorr/pl67pnZnmgIHlsZ7mgKfjgIJcbiovXG5cbmNsYXNzIEdyaWQge1xuICAgIHN0YXRpYyBvcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBjYWxjdWxhdGVEaXN0YW5jZUZyb21PcmlnaW4ocG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgICAgICBsZXQgeERpc3QgPSBwb2ludC54IC0gR3JpZC5vcmlnaW4ueDtcbiAgICAgICAgbGV0IHlEaXN0ID0gcG9pbnQueSAtIEdyaWQub3JpZ2luLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeERpc3QgKiB4RGlzdCArIHlEaXN0ICogeURpc3QpIC8gdGhpcy5zY2FsZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHVibGljIHNjYWxlOiBudW1iZXIpIHt9XG59XG5cbmxldCBncmlkMSA9IG5ldyBHcmlkKDEuMCk7IC8vIDF4IHNjYWxlXG5sZXQgZ3JpZDIgPSBuZXcgR3JpZCg1LjApOyAvLyA1eCBzY2FsZVxuXG5jb25zb2xlLmxvZyhncmlkMS5jYWxjdWxhdGVEaXN0YW5jZUZyb21PcmlnaW4oeyB4OiAxMCwgeTogMTAgfSkpO1xuY29uc29sZS5sb2coZ3JpZDIuY2FsY3VsYXRlRGlzdGFuY2VGcm9tT3JpZ2luKHsgeDogMTAsIHk6IDEwIH0pKTtcblxuLypcbuaKveixoeexu1xuXG7mir3osaHnsbvlgZrkuLrlhbblroPmtL7nlJ/nsbvnmoTln7rnsbvkvb/nlKjjgIJcbuWug+S7rOS4gOiIrOS4jeS8muebtOaOpeiiq+WunuS+i+WMluOAgiDkuI3lkIzkuo7mjqXlj6PvvIzmir3osaHnsbvlj6/ku6XljIXlkKvmiJDlkZjnmoTlrp7njrDnu4boioLjgIIgXG5hYnN0cmFjdOWFs+mUruWtl+aYr+eUqOS6juWumuS5ieaKveixoeexu+WSjOWcqOaKveixoeexu+WGhemDqOWumuS5ieaKveixoeaWueazleOAglxuXG4qL1xuXG5hYnN0cmFjdCBjbGFzcyBBbmltYWw1IHtcbiAgICBhYnN0cmFjdCBtYWtlU291bmQoKTogdm9pZDtcbiAgICBtb3ZlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygncm9hbWluZyB0aGUgZWFyY2guLi4nKTtcbiAgICB9XG59XG5cbi8qXG7mir3osaHnsbvkuK3nmoTmir3osaHmlrnms5XkuI3ljIXlkKvlhbfkvZPlrp7njrDlubbkuJTlv4XpobvlnKjmtL7nlJ/nsbvkuK3lrp7njrDjgIJcbuaKveixoeaWueazleeahOivreazleS4juaOpeWPo+aWueazleebuOS8vOOAgiBcbuS4pOiAhemDveaYr+WumuS5ieaWueazleetvuWQjeS9huS4jeWMheWQq+aWueazleS9k+OAgiBcbueEtuiAjO+8jOaKveixoeaWueazleW/hemhu+WMheWQqyBhYnN0cmFjdOWFs+mUruWtl+W5tuS4lOWPr+S7peWMheWQq+iuv+mXruS/rumlsOespuOAglxuKi9cblxuYWJzdHJhY3QgY2xhc3MgRGVwYXJ0bWVudCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge31cblxuICAgIHByaW50TmFtZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RlcGFydG1lbnQgbmFtZTogJyArIHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgcHJpbnRNZWV0aW5nKCk6IHZvaWQ7IC8vIOW/hemhu+WcqOa0vueUn+exu+S4reWunueOsFxufVxuXG5jbGFzcyBBY2NvdW50aW5nRGVwYXJ0bWVudCBleHRlbmRzIERlcGFydG1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignQWNjb3VudGluZyBhbmQgQXVkaXRpbmcnKTsgLy8g5Zyo5rS+55Sf57G755qE5p6E6YCg5Ye95pWw5Lit5b+F6aG76LCD55SoIHN1cGVyKClcbiAgICB9XG5cbiAgICBwcmludE1lZXRpbmcoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgQWNjb3VudGluZyBEZXBhcnRtZW50IG1lZXRzIGVhY2ggTW9uZGF5IGF0IDEwYW0uJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSZXBvcnRzKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnR2VuZXJhdGluZyBhY2NvdW50aW5nIHJlcG9ydHMuLi4nKTtcbiAgICB9XG59XG5cbmxldCBkZXBhcnRtZW50OiBEZXBhcnRtZW50OyAvLyDlhYHorrjliJvlu7rkuIDkuKrlr7nmir3osaHnsbvlnovnmoTlvJXnlKhcbi8vIGRlcGFydG1lbnQgPSBuZXcgRGVwYXJ0bWVudCgpOyAvLyDplJnor686IOS4jeiDveWIm+W7uuS4gOS4quaKveixoeexu+eahOWunuS+i1xuZGVwYXJ0bWVudCA9IG5ldyBBY2NvdW50aW5nRGVwYXJ0bWVudCgpOyAvLyDlhYHorrjlr7nkuIDkuKrmir3osaHlrZDnsbvov5vooYzlrp7kvovljJblkozotYvlgLxcbmRlcGFydG1lbnQucHJpbnROYW1lKCk7XG5kZXBhcnRtZW50LnByaW50TWVldGluZygpO1xuLy8gIOWboOS4uuexu+Wei+WjsOaYjiBkZXBhcnRtZW50OiBEZXBhcnRtZW50ICDlvJXnlKjkuobmir3osaHnsbtEZXBhcnRtZW505omA5Lul5byV55SoZ2VuZXJhdGVSZXBvcnRz5Lya5oql6ZSZXG4vLyAgIGRlcGFydG1lbnQuZ2VuZXJhdGVSZXBvcnRzKCk7IC8vIOmUmeivrzog5pa55rOV5Zyo5aOw5piO55qE5oq96LGh57G75Lit5LiN5a2Y5ZyoXG5cblxuLypcbumrmOe6p+aKgOW3p1xu5p6E6YCg5Ye95pWwXG7lvZPkvaDlnKhUeXBlU2NyaXB06YeM5aOw5piO5LqG5LiA5Liq57G755qE5pe25YCZ77yM5a6e6ZmF5LiK5ZCM5pe25aOw5piO5LqG5b6I5aSa5Lic6KW/44CCIOmmluWFiOWwseaYr+exu+eahCDlrp7kvovnmoTnsbvlnovjgIJcblxuKi9cblxuLypcblxu5oqK57G75b2T5YGa5o6l5Y+j5L2/55SoXG7lpoLkuIrkuIDoioLph4zmiYDorrLnmoTvvIznsbvlrprkuYnkvJrliJvlu7rkuKTkuKrkuJzopb/vvJrnsbvnmoTlrp7kvovnsbvlnovlkozkuIDkuKrmnoTpgKDlh73mlbDjgIJcbiDlm6DkuLrnsbvlj6/ku6XliJvlu7rlh7rnsbvlnovvvIzmiYDku6XkvaDog73lpJ/lnKjlhYHorrjkvb/nlKjmjqXlj6PnmoTlnLDmlrnkvb/nlKjnsbvjgIJcbiovXG5cbmNsYXNzIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUG9pbnQzZCBleHRlbmRzIFBvaW50IHtcbiAgICB6OiBudW1iZXI7XG59XG5cbmxldCBwb2ludDNkOiBQb2ludDNkID0ge3g6IDEsIHk6IDIsIHo6IDN9O1xuXG5jb25zb2xlLmxvZygncG9pbnQzZD09Jyxwb2ludDNkKVxuXG5cbmV4cG9ydCBkZWZhdWx0e30iXX0=
