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
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var employee = new Employee2();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
var passcode = 'secret passcode';
// get 和 set 会编译成 Object.defineProperty get和set自定义属性
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log('employee.fullName=', employee.fullName);
}
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWmtDLFVBQVUsR0FZNUM7QUFFRCxJQUFJLFVBQXNCLENBQUMsQ0FBQyxpQkFBaUI7QUFDN0MscURBQXFEO0FBQ3JELFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxvQkFBb0I7QUFDN0QsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQix5RUFBeUU7QUFDekUsdURBQXVEO0FBR3ZEOzs7OztFQUtFO0FBRUY7Ozs7O0VBS0U7QUFFRjtJQUFBO0lBR0EsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQU1ELElBQUksT0FBTyxHQUFZLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxPQUFPLENBQUMsQ0FBQSIsImZpbGUiOiIwMS8wMV8wM+exuy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuexu1xyXG7ku4vnu41cclxu5Lyg57uf55qESmF2YVNjcmlwdOeoi+W6j+S9v+eUqOWHveaVsOWSjOWfuuS6juWOn+Wei+eahOe7p+aJv+adpeWIm+W7uuWPr+mHjeeUqOeahOe7hOS7tu+8jFxyXG7kvYblr7nkuo7nhp/mgonkvb/nlKjpnaLlkJHlr7nosaHmlrnlvI/nmoTnqIvluo/lkZjmnaXorrLlsLHmnInkupvmo5jmiYvvvIzlm6DkuLrku5bku6znlKjnmoTmmK/ln7rkuo7nsbvnmoTnu6fmib/lubbkuJTlr7nosaHmmK/nlLHnsbvmnoTlu7rlh7rmnaXnmoTjgIJcclxu5LuORUNNQVNjcmlwdCAyMDE177yM5Lmf5bCx5pivRUNNQVNjcmlwdCA25byA5aeL77yMSmF2YVNjcmlwdOeoi+W6j+WRmOWwhuiDveWkn+S9v+eUqOWfuuS6juexu+eahOmdouWQkeWvueixoeeahOaWueW8j+OAglxyXG7kvb/nlKhUeXBlU2NyaXB077yM5oiR5Lus5YWB6K645byA5Y+R6ICF546w5Zyo5bCx5L2/55So6L+Z5Lqb54m55oCn77yM5bm25LiU57yW6K+R5ZCO55qESmF2YVNjcmlwdOWPr+S7peWcqOaJgOacieS4u+a1gea1j+iniOWZqOWSjOW5s+WPsOS4iui/kOihjO+8jFxyXG7ogIzkuI3pnIDopoHnrYnliLDkuIvkuKpKYXZhU2NyaXB054mI5pys44CCXHJcblxyXG7nsbtcclxu5LiL6Z2i55yL5LiA5Liq5L2/55So57G755qE5L6L5a2Q77yaXHJcbiovXHJcbmNsYXNzIEdyZWV0ZXIge1xyXG4gICAgZ3JlZXRpbmc6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgZ3JlZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdIZWxsbywgJyArIHRoaXMuZ3JlZXRpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBncmVldGVyID0gbmV3IEdyZWV0ZXIoJ3dvcmxkJyk7XHJcblxyXG4vKlxyXG5cclxu57un5om/XHJcbuWcqFR5cGVTY3JpcHTph4zvvIzmiJHku6zlj6/ku6Xkvb/nlKjluLjnlKjnmoTpnaLlkJHlr7nosaHmqKHlvI/jgIJcclxu5Z+65LqO57G755qE56iL5bqP6K6+6K6h5Lit5LiA56eN5pyA5Z+65pys55qE5qih5byP5piv5YWB6K645L2/55So57un5om/5p2l5omp5bGV546w5pyJ55qE57G744CCXHJcblxyXG7nnIvkuIvpnaLnmoTkvovlrZDvvJpcclxuKi9cclxuY2xhc3MgQW5pbWFsIHtcclxuICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVyczogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBbmltYWwgbW92ZWQgJHtkaXN0YW5jZUluTWV0ZXJzfW0uYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgICBiYXJrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXb29mISBXb29mIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkb2cgPSBuZXcgRG9nKCk7XHJcbmRvZy5iYXJrKCk7XHJcbmRvZy5tb3ZlKDEwKTtcclxuZG9nLmJhcmsoKTtcclxuXHJcbi8v5LiL6Z2i5oiR5Lus5p2l55yL5Liq5pu05Yqg5aSN5p2C55qE5L6L5a2Q44CCXHJcblxyXG5jbGFzcyBBbmltYWwxIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHRoZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoZU5hbWU7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpc3RhbmNlSW5NZXRlcnM6IG51bWJlciA9IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IG1vdmVkICR7ZGlzdGFuY2VJbk1ldGVyc31tLmApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTbmFrZSBleHRlbmRzIEFuaW1hbDEge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpc3RhbmNlSW5NZXRlcnMgPSA1KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NsaXRoZXJpbmcuLi4nKTtcclxuICAgICAgICBzdXBlci5tb3ZlKGRpc3RhbmNlSW5NZXRlcnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3JzZSBleHRlbmRzIEFuaW1hbDEge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpc3RhbmNlSW5NZXRlcnMgPSA0NSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYWxsb3BpbmcuLi4nKTtcclxuICAgICAgICBzdXBlci5tb3ZlKGRpc3RhbmNlSW5NZXRlcnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc2FtID0gbmV3IFNuYWtlKCdTYW1teSB0aGUgUHl0aG9uJyk7XHJcbmxldCB0b206IEFuaW1hbCA9IG5ldyBIb3JzZSgnVG9tbXkgdGhlIFBhbG9taW5vJyk7XHJcblxyXG5zYW0ubW92ZSgpO1xyXG50b20ubW92ZSgzNCk7XHJcblxyXG4vKlxyXG7lhazlhbHvvIznp4HmnInkuI7lj5fkv53miqTnmoTkv67ppbDnrKZcclxu6buY6K6k5Li6IHB1YmxpY1xyXG7lnKjkuIrpnaLnmoTkvovlrZDph4zvvIzmiJHku6zlj6/ku6Xoh6rnlLHnmoTorr/pl67nqIvluo/ph4zlrprkuYnnmoTmiJDlkZjjgIJcclxu5aaC5p6c5L2g5a+55YW25a6D6K+t6KiA5Lit55qE57G75q+U6L6D5LqG6Kej77yM5bCx5Lya5rOo5oSP5Yiw5oiR5Lus5Zyo5LmL5YmN55qE5Luj56CB6YeM5bm25rKh5pyJ5L2/55SoIHB1YmxpY+adpeWBmuS/rumlsO+8m+S+i+Wmgu+8jFxyXG5DI+imgeaxguW/hemhu+aYjuehruWcsOS9v+eUqCBwdWJsaWPmjIflrprmiJDlkZjmmK/lj6/op4HnmoTjgIJcclxu5ZyoVHlwZVNjcmlwdOmHjO+8jOaIkOWRmOmDvem7mOiupOS4uiBwdWJsaWPjgIJcclxu5L2g5Lmf5Y+v5Lul5piO56Gu55qE5bCG5LiA5Liq5oiQ5ZGY5qCH6K6w5oiQIHB1YmxpY+OAgiDmiJHku6zlj6/ku6XnlKjkuIvpnaLnmoTmlrnlvI/mnaXph43lhpnkuIrpnaLnmoQgQW5pbWFs57G777yaXHJcbiovXHJcbmNsYXNzIEFuaW1hbDIge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0aGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGVOYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1vdmUoZGlzdGFuY2VJbk1ldGVyczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBtb3ZlZCAke2Rpc3RhbmNlSW5NZXRlcnN9bS5gKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxu55CG6KejIHByaXZhdGVcclxu5b2T5oiQ5ZGY6KKr5qCH6K6w5oiQIHByaXZhdGXml7bvvIzlroPlsLHkuI3og73lnKjlo7DmmI7lroPnmoTnsbvnmoTlpJbpg6jorr/pl67jgILmr5TlpoLvvJpcclxucHJpdmF0ZSDnsbvnmoTnp4HmnInmiJDlkZjvvIzlj6rog73lnKjlhoXpg6jorr/pl67vvIzlnKjlpJbpg6jorr/pl67kuI3liLDvvIzml6Dms5Xooqvnu6fmib/vvIzmiJHku6zlj6/ku6XlsIbkuI3pnIDopoHooqvlpJbpg6jkv67mlLnnmoTlrprkuYnkuLrnp4HmnInnmoRcclxuKi9cclxuXHJcbmNsYXNzIEFuaW1hbDMge1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGVOYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0Tm1hZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W56eB5pyJ57G76YeM6Z2i55qEbmFtZVxyXG5jb25zb2xlLmxvZyhuZXcgQW5pbWFsMygnQ2F0JykuZ2V0Tm1hZSgpKTsgLy8g6ZSZ6K+vOiAnbmFtZScg5piv56eB5pyJ55qELlxyXG5cclxuLypcclxuIOeQhuinoyBwcm90ZWN0ZWRcclxucHJvdGVjdGVk5L+u6aWw56ym5LiOIHByaXZhdGXkv67ppbDnrKbnmoTooYzkuLrlvojnm7jkvLzvvIzkvYbmnInkuIDngrnkuI3lkIzvvIwgcHJvdGVjdGVk5oiQ5ZGY5Zyo5rS+55Sf57G75Lit5LuN54S25Y+v5Lul6K6/6Zeu44CCXHJcbuWSjHByaXZhdGXnsbvkvLzvvIzkuZ/mmK/np4HmnInmiJDlkZjvvIzlj6rog73lnKjlhoXpg6jorr/pl67vvIzlpJbpg6jml6Dms5Xorr/pl67vvIzkvYbmmK/lj6/ku6Xooqvnu6fmib9cclxu5Y+v5Lul6KKr57un5om/77yM5L2G5piv5Y+q6IO95Zyo5YaF6YOo6K6/6ZeuXHJcbiAqL1xyXG5cclxuY2xhc3MgUGVyc29uIHtcclxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbXBsb3llZSBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBwcml2YXRlIGRlcGFydG1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlcGFydG1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZXZhdG9yUGl0Y2goKSB7XHJcbiAgICAgICAgLy8g5Y+v5Lul6K6/6ZeuUGVyc29u55qEbmFtZSAgcHJvdGVjdGVkXHJcbiAgICAgICAgcmV0dXJuIGBIZWxsbywgbXkgbmFtZSBpcyAke3RoaXMubmFtZX0gYW5kIEkgd29yayBpbiAke3RoaXMuZGVwYXJ0bWVudH0uYDtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGhvd2FyZCA9IG5ldyBFbXBsb3llZSgnSG93YXJkJywgJ1NhbGVzJyk7XHJcbmNvbnNvbGUubG9nKGhvd2FyZC5nZXRFbGV2YXRvclBpdGNoKCkpO1xyXG4vLyBjb25zb2xlLmxvZyhob3dhcmQubmFtZSk7IC8vIOmUmeivr1xyXG5cclxuY2xhc3MgUGVyc29uMSB7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHRoZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoZU5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEVtcGxveWVlIOiDveWkn+e7p+aJvyBQZXJzb25cclxuY2xhc3MgRW1wbG95ZWUxIGV4dGVuZHMgUGVyc29uMSB7XHJcbiAgICBwcml2YXRlIGRlcGFydG1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlcGFydG1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZXZhdG9yUGl0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuIGBIZWxsbywgbXkgbmFtZSBpcyAke3RoaXMubmFtZX0gYW5kIEkgd29yayBpbiAke3RoaXMuZGVwYXJ0bWVudH0uYDtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGhvd2FyZDEgPSBuZXcgRW1wbG95ZWUxKCdIb3dhcmQnLCAnU2FsZXMnKTtcclxuLy8gbGV0IGpvaG4gPSBuZXcgUGVyc29uMShcIkpvaG5cIik7IC8vIOmUmeivrzogJ1BlcnNvbicg55qE5p6E6YCg5Ye95pWw5piv6KKr5L+d5oqk55qELlxyXG5cclxuLypcclxucmVhZG9ubHnkv67ppbDnrKZcclxu5L2g5Y+v5Lul5L2/55SoIHJlYWRvbmx55YWz6ZSu5a2X5bCG5bGe5oCn6K6+572u5Li65Y+q6K+755qE44CCIFxyXG7lj6ror7vlsZ7mgKflv4XpobvlnKjlo7DmmI7ml7bmiJbmnoTpgKDlh73mlbDph4zooqvliJ3lp4vljJbjgIJcclxuKi9cclxuY2xhc3MgT2N0b3B1cyB7XHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBudW1iZXJPZkxlZ3M6IG51bWJlciA9IDg7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGVOYW1lO1xyXG4gICAgfVxyXG59XHJcbmxldCBkYWQgPSBuZXcgT2N0b3B1cygnTWFuIHdpdGggdGhlIDggc3Ryb25nIGxlZ3MnKTtcclxuLy8gZGFkLm5hbWUgPSBcIk1hbiB3aXRoIHRoZSAzLXBpZWNlIHN1aXRcIjsgLy8g6ZSZ6K+vISBuYW1lIOaYr+WPquivu+eahC5cclxuLypcclxu5Y+C5pWw5bGe5oCnXHJcbuWcqOS4iumdoueahOS+i+WtkOS4re+8jOaIkeS7rOW/hemhu+WcqE9jdG9wdXPnsbvph4zlrprkuYnkuIDkuKrlj6ror7vmiJDlkZggbmFtZeWSjOS4gOS4quWPguaVsOS4uiB0aGVOYW1l55qE5p6E6YCg5Ye95pWw77yMXHJcbuW5tuS4lOeri+WIu+WwhiB0aGVOYW1l55qE5YC86LWL57uZIG5hbWXvvIzov5nnp43mg4XlhrXnu4/luLjkvJrpgYfliLDjgIJcclxu5Y+C5pWw5bGe5oCn5Y+v5Lul5pa55L6/5Zyw6K6p5oiR5Lus5Zyo5LiA5Liq5Zyw5pa55a6a5LmJ5bm25Yid5aeL5YyW5LiA5Liq5oiQ5ZGY44CCIFxyXG7kuIvpnaLnmoTkvovlrZDmmK/lr7nkuYvliY0gT2N0b3B1c+exu+eahOS/ruaUueeJiO+8jOS9v+eUqOS6huWPguaVsOWxnuaAp++8mlxyXG4qL1xyXG5cclxuY2xhc3MgT2N0b3B1czEge1xyXG4gICAgcmVhZG9ubHkgbnVtYmVyT2ZMZWdzOiBudW1iZXIgPSA4O1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbmFtZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG4vKlxyXG7lrZjlj5blmahcclxuVHlwZVNjcmlwdOaUr+aMgemAmui/h2dldHRlcnMvc2V0dGVyc+adpeaIquWPluWvueWvueixoeaIkOWRmOeahOiuv+mXruOAglxyXG7lroPog73luK7liqnkvaDmnInmlYjnmoTmjqfliLblr7nlr7nosaHmiJDlkZjnmoTorr/pl67jgIJcclxuXHJcbuS4i+mdouadpeeci+WmguS9leaKiuS4gOS4queugOWNleeahOexu+aUueWGmeaIkOS9v+eUqCBnZXTlkowgc2V044CCIFxyXG7pppblhYjvvIzmiJHku6zku47kuIDkuKrmsqHmnInkvb/nlKjlrZjlj5blmajnmoTkvovlrZDlvIDlp4vjgIJcclxuKi9cclxuXHJcbmNsYXNzIEVtcGxveWVlMiB7XHJcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5sZXQgZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUyKCk7XHJcbmVtcGxveWVlLmZ1bGxOYW1lID0gJ0JvYiBTbWl0aCc7XHJcbmlmIChlbXBsb3llZS5mdWxsTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2coZW1wbG95ZWUuZnVsbE5hbWUpO1xyXG59XHJcblxyXG5sZXQgcGFzc2NvZGUgPSAnc2VjcmV0IHBhc3Njb2RlJztcclxuLy8gZ2V0IOWSjCBzZXQg5Lya57yW6K+R5oiQIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBnZXTlkoxzZXToh6rlrprkuYnlsZ7mgKdcclxuY2xhc3MgRW1wbG95ZWUzIHtcclxuICAgIHByaXZhdGUgX2Z1bGxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGZ1bGxOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmdWxsTmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAocGFzc2NvZGUgJiYgcGFzc2NvZGUgPT0gJ3NlY3JldCBwYXNzY29kZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fZnVsbE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogVW5hdXRob3JpemVkIHVwZGF0ZSBvZiBlbXBsb3llZSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBlbXBsb3llZTMgPSBuZXcgRW1wbG95ZWUzKCk7XHJcbmVtcGxveWVlMy5mdWxsTmFtZSA9ICdCb2IgU21pdGgnO1xyXG5pZiAoZW1wbG95ZWUuZnVsbE5hbWUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbXBsb3llZS5mdWxsTmFtZT0nLCBlbXBsb3llZS5mdWxsTmFtZSk7XHJcbn1cclxuXHJcbi8qXHJcbumdmeaAgeWxnuaAp1xyXG4gICAg5Yiw55uu5YmN5Li65q2i77yM5oiR5Lus5Y+q6K6o6K665LqG57G755qE5a6e5L6L5oiQ5ZGY77yM6YKj5Lqb5LuF5b2T57G76KKr5a6e5L6L5YyW55qE5pe25YCZ5omN5Lya6KKr5Yid5aeL5YyW55qE5bGe5oCn44CCIFxyXG4gICAg5oiR5Lus5Lmf5Y+v5Lul5Yib5bu657G755qE6Z2Z5oCB5oiQ5ZGY77yM6L+Z5Lqb5bGe5oCn5a2Y5Zyo5LqO57G75pys6Lqr5LiK6Z2i6ICM5LiN5piv57G755qE5a6e5L6L5LiK44CCIFxyXG4gICAg5Zyo6L+Z5Liq5L6L5a2Q6YeM77yM5oiR5Lus5L2/55SoIHN0YXRpY+WumuS5iSBvcmlnaW7vvIzlm6DkuLrlroPmmK/miYDmnInnvZHmoLzpg73kvJrnlKjliLDnmoTlsZ7mgKfjgIJcclxuICAgIOavj+S4quWunuS+i+aDs+imgeiuv+mXrui/meS4quWxnuaAp+eahOaXtuWAme+8jOmDveimgeWcqCBvcmlnaW7liY3pnaLliqDkuIrnsbvlkI3jgIJcclxuICAgIOWmguWQjOWcqOWunuS+i+WxnuaAp+S4iuS9v+eUqCB0aGlzLuWJjee8gOadpeiuv+mXruWxnuaAp+S4gOagt++8jOi/memHjOaIkeS7rOS9v+eUqCBHcmlkLuadpeiuv+mXrumdmeaAgeWxnuaAp+OAglxyXG4qL1xyXG5cclxuY2xhc3MgR3JpZCB7XHJcbiAgICBzdGF0aWMgb3JpZ2luID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICBjYWxjdWxhdGVEaXN0YW5jZUZyb21PcmlnaW4ocG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIGxldCB4RGlzdCA9IHBvaW50LnggLSBHcmlkLm9yaWdpbi54O1xyXG4gICAgICAgIGxldCB5RGlzdCA9IHBvaW50LnkgLSBHcmlkLm9yaWdpbi55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeERpc3QgKiB4RGlzdCArIHlEaXN0ICogeURpc3QpIC8gdGhpcy5zY2FsZTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzY2FsZTogbnVtYmVyKSB7fVxyXG59XHJcblxyXG5sZXQgZ3JpZDEgPSBuZXcgR3JpZCgxLjApOyAvLyAxeCBzY2FsZVxyXG5sZXQgZ3JpZDIgPSBuZXcgR3JpZCg1LjApOyAvLyA1eCBzY2FsZVxyXG5cclxuY29uc29sZS5sb2coZ3JpZDEuY2FsY3VsYXRlRGlzdGFuY2VGcm9tT3JpZ2luKHsgeDogMTAsIHk6IDEwIH0pKTtcclxuY29uc29sZS5sb2coZ3JpZDIuY2FsY3VsYXRlRGlzdGFuY2VGcm9tT3JpZ2luKHsgeDogMTAsIHk6IDEwIH0pKTtcclxuXHJcbi8qXHJcbuaKveixoeexu1xyXG5cclxu5oq96LGh57G75YGa5Li65YW25a6D5rS+55Sf57G755qE5Z+657G75L2/55So44CCXHJcbuWug+S7rOS4gOiIrOS4jeS8muebtOaOpeiiq+WunuS+i+WMluOAgiDkuI3lkIzkuo7mjqXlj6PvvIzmir3osaHnsbvlj6/ku6XljIXlkKvmiJDlkZjnmoTlrp7njrDnu4boioLjgIIgXHJcbmFic3RyYWN05YWz6ZSu5a2X5piv55So5LqO5a6a5LmJ5oq96LGh57G75ZKM5Zyo5oq96LGh57G75YaF6YOo5a6a5LmJ5oq96LGh5pa55rOV44CCXHJcblxyXG4qL1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgQW5pbWFsNSB7XHJcbiAgICBhYnN0cmFjdCBtYWtlU291bmQoKTogdm9pZDtcclxuICAgIG1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JvYW1pbmcgdGhlIGVhcmNoLi4uJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbuaKveixoeexu+S4reeahOaKveixoeaWueazleS4jeWMheWQq+WFt+S9k+WunueOsOW5tuS4lOW/hemhu+WcqOa0vueUn+exu+S4reWunueOsOOAglxyXG7mir3osaHmlrnms5XnmoTor63ms5XkuI7mjqXlj6Pmlrnms5Xnm7jkvLzjgIIgXHJcbuS4pOiAhemDveaYr+WumuS5ieaWueazleetvuWQjeS9huS4jeWMheWQq+aWueazleS9k+OAgiBcclxu54S26ICM77yM5oq96LGh5pa55rOV5b+F6aG75YyF5ZCrIGFic3RyYWN05YWz6ZSu5a2X5bm25LiU5Y+v5Lul5YyF5ZCr6K6/6Zeu5L+u6aWw56ym44CCXHJcbiovXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBEZXBhcnRtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHJpbnROYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEZXBhcnRtZW50IG5hbWU6ICcgKyB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHByaW50TWVldGluZygpOiB2b2lkOyAvLyDlv4XpobvlnKjmtL7nlJ/nsbvkuK3lrp7njrBcclxufVxyXG5cclxuY2xhc3MgQWNjb3VudGluZ0RlcGFydG1lbnQgZXh0ZW5kcyBEZXBhcnRtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdBY2NvdW50aW5nIGFuZCBBdWRpdGluZycpOyAvLyDlnKjmtL7nlJ/nsbvnmoTmnoTpgKDlh73mlbDkuK3lv4XpobvosIPnlKggc3VwZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaW50TWVldGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlIEFjY291bnRpbmcgRGVwYXJ0bWVudCBtZWV0cyBlYWNoIE1vbmRheSBhdCAxMGFtLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUmVwb3J0cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VuZXJhdGluZyBhY2NvdW50aW5nIHJlcG9ydHMuLi4nKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGRlcGFydG1lbnQ6IERlcGFydG1lbnQ7IC8vIOWFgeiuuOWIm+W7uuS4gOS4quWvueaKveixoeexu+Wei+eahOW8leeUqFxyXG4vLyBkZXBhcnRtZW50ID0gbmV3IERlcGFydG1lbnQoKTsgLy8g6ZSZ6K+vOiDkuI3og73liJvlu7rkuIDkuKrmir3osaHnsbvnmoTlrp7kvotcclxuZGVwYXJ0bWVudCA9IG5ldyBBY2NvdW50aW5nRGVwYXJ0bWVudCgpOyAvLyDlhYHorrjlr7nkuIDkuKrmir3osaHlrZDnsbvov5vooYzlrp7kvovljJblkozotYvlgLxcclxuZGVwYXJ0bWVudC5wcmludE5hbWUoKTtcclxuZGVwYXJ0bWVudC5wcmludE1lZXRpbmcoKTtcclxuLy8gIOWboOS4uuexu+Wei+WjsOaYjiBkZXBhcnRtZW50OiBEZXBhcnRtZW50ICDlvJXnlKjkuobmir3osaHnsbtEZXBhcnRtZW505omA5Lul5byV55SoZ2VuZXJhdGVSZXBvcnRz5Lya5oql6ZSZXHJcbi8vICAgZGVwYXJ0bWVudC5nZW5lcmF0ZVJlcG9ydHMoKTsgLy8g6ZSZ6K+vOiDmlrnms5XlnKjlo7DmmI7nmoTmir3osaHnsbvkuK3kuI3lrZjlnKhcclxuXHJcblxyXG4vKlxyXG7pq5jnuqfmioDlt6dcclxu5p6E6YCg5Ye95pWwXHJcbuW9k+S9oOWcqFR5cGVTY3JpcHTph4zlo7DmmI7kuobkuIDkuKrnsbvnmoTml7blgJnvvIzlrp7pmYXkuIrlkIzml7blo7DmmI7kuoblvojlpJrkuJzopb/jgIIg6aaW5YWI5bCx5piv57G755qEIOWunuS+i+eahOexu+Wei+OAglxyXG5cclxuKi9cclxuXHJcbi8qXHJcblxyXG7miornsbvlvZPlgZrmjqXlj6Pkvb/nlKhcclxu5aaC5LiK5LiA6IqC6YeM5omA6K6y55qE77yM57G75a6a5LmJ5Lya5Yib5bu65Lik5Liq5Lic6KW/77ya57G755qE5a6e5L6L57G75Z6L5ZKM5LiA5Liq5p6E6YCg5Ye95pWw44CCXHJcbiDlm6DkuLrnsbvlj6/ku6XliJvlu7rlh7rnsbvlnovvvIzmiYDku6XkvaDog73lpJ/lnKjlhYHorrjkvb/nlKjmjqXlj6PnmoTlnLDmlrnkvb/nlKjnsbvjgIJcclxuKi9cclxuXHJcbmNsYXNzIFBvaW50IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBvaW50M2QgZXh0ZW5kcyBQb2ludCB7XHJcbiAgICB6OiBudW1iZXI7XHJcbn1cclxuXHJcbmxldCBwb2ludDNkOiBQb2ludDNkID0ge3g6IDEsIHk6IDIsIHo6IDN9O1xyXG5cclxuY29uc29sZS5sb2coJ3BvaW50M2Q9PScscG9pbnQzZCkiXX0=
