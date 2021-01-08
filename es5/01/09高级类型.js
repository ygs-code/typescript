"use strict";
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
function extend(first, second) {
    var result = {};
    for (var key in first) {
        result[key] = first[key];
    }
    for (var key in second) {
        if (!result.hasOwnProperty(key)) {
            result[key] = second[key];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
var ConsloeLogger = /** @class */ (function () {
    function ConsloeLogger() {
    }
    ConsloeLogger.prototype.log = function () {
        console.log("this.name=", this.name);
    };
    return ConsloeLogger;
}());
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
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
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
function padLeft1(value, padding) {
    // ...
}
// let indentedString = padLeft1("Hello world", true); // errors during compilation
var indentedString1 = padLeft1("Hello world", 1); //
var indentedString2 = padLeft1("Hello world", "str"); //
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return this.numSpaces;
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var getRandomPadder = function () {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
};
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
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
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'
//可选属性也会有同样的处理：
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
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
function f1(sn) {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
function getName(n) {
    if (typeof n == "string") {
        return n;
    }
    else {
        return n();
    }
}
var people;
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// ... more overloads ...
// 返回不同的类型 就是重载
function createElement(tagName) {
    var el = document.getElementsByTagName(tagName)[0];
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
function rollDie() {
    return;
}
//现在我们使用可辨识联合:
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
    }
}
/*
完整性检查
当没有涵盖所有可辨识联合的变化时，我们想让编译器可以通知我们。
比如，如果我们添加了 Triangle到 Shape，我们同时还需要更新 area:
*/
function area1(s) {
    // error: returns number | undefined
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
    }
}
area1({
    kind: "square",
    size: 1
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
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area2(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
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
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2).multiply(5).add(1).currentValue();
//由于这个类使用了 this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。
/*
如果没有 this类型， ScientificCalculator就不能够在继承 BasicCalculator的同时还保持接口的连贯性。
multiply将会返回 BasicCalculator，它并没有 sin方法。
然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator。
*/
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var v1 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
/*
索引类型（Index types）
使用索引类型，编译器就能够检查使用了动态属性名的代码。
 例如，一个常见的JavaScript模式是从对象中选取属性的子集。
*/
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
function pluck1(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: "Jarid",
    age: 35
};
/*
编译器会检查 name是否真的是 Person的一个属性。
本例还引入了几个新的类型操作符。 首先是 keyof T，
索引类型查询操作符。 对于任何类型 T， keyof T的结果为
T上已知的公共属性名的联合。 例如：
*/
var strings = pluck(person, ["name"]); // ok, string[]
var strings1 = pluck1(person, ["name"]); // ok, string[]
console.log("strings=", strings);
console.log("strings1=", strings1);
var personProps; // 'name' | 'age'  检索key
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
function getProperty(o, name) {
    return o[name]; // o[name] is of type T[K]
}
/*
getProperty里的 o: T和 name: K，意味着 o[name]: T[K]。
 当你返回 T[K]的结果，编译器会实例化键的真实类型，
 因此 getProperty的返回值类型会随着你需要的属性改变。
*/
var name = getProperty(person, "name");
var age = getProperty(person, "age");
var keys; // string
var value; // number

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxRQUFRLENBQUMsQ0FBQztBQUVuQyxJQUFJLFdBQXlCLENBQUMsQ0FBQyx3QkFBd0I7QUFDdkQ7Ozs7O0VBS0U7QUFDRixXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDeEMsbUZBQW1GO0FBRW5GOzs7Ozs7O0VBT0U7QUFFRixTQUFTLFdBQVcsQ0FBdUIsQ0FBSSxFQUFFLElBQU87SUFDdEQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7QUFDNUMsQ0FBQztBQUVEOzs7O0VBSUU7QUFFRixJQUFJLElBQUksR0FBVyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLElBQUksR0FBRyxHQUFXLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFhN0MsSUFBSSxJQUF1QixDQUFDLENBQUMsU0FBUztBQUN0QyxJQUFJLEtBQXlCLENBQUMsQ0FBQyxTQUFTIiwiZmlsZSI6IjAxLzA56auY57qn57G75Z6LLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbumrmOe6p+exu+Wei1xuICAgIOS6pOWPieexu+Wei++8iEludGVyc2VjdGlvbiBUeXBlc++8iVxuICAgIOS6pOWPieexu+Wei+aYr+WwhuWkmuS4quexu+Wei+WQiOW5tuS4uuS4gOS4quexu+Wei+OAglxuICAgIOi/meiuqeaIkeS7rOWPr+S7peaKiueOsOacieeahOWkmuenjeexu+Wei+WPoOWKoOWIsOS4gOi1t+aIkOS4uuS4gOenjeexu+Wei++8jOWug+WMheWQq+S6huaJgOmcgOeahOaJgOacieexu+Wei+eahOeJueaAp+OAglxuICAgIOS+i+Wmgu+8jCBQZXJzb24gJiBTZXJpYWxpemFibGUgJiBMb2dnYWJsZeWQjOaXtuaYryBQZXJzb24g5ZKMIFNlcmlhbGl6YWJsZSDlkowgTG9nZ2FibGXjgIJcbiAgICDlsLHmmK/or7Tov5nkuKrnsbvlnovnmoTlr7nosaHlkIzml7bmi6XmnInkuobov5nkuInnp43nsbvlnovnmoTmiJDlkZjjgIJcblxuICAgIOaIkeS7rOWkp+WkmuaYr+WcqOa3t+WFpe+8iG1peGluc++8ieaIluWFtuWug+S4jemAguWQiOWFuOWei+mdouWQkeWvueixoeaooeWei+eahOWcsOaWueeci+WIsOS6pOWPieexu+Wei+eahOS9v+eUqOOAglxuICAgIO+8iOWcqEphdmFTY3JpcHTph4zlj5HnlJ/ov5nnp43mg4XlhrXnmoTlnLrlkIjlvojlpJrvvIHvvIkg5LiL6Z2i5piv5aaC5L2V5Yib5bu65re35YWl55qE5LiA5Liq566A5Y2V5L6L5a2Q77yaXG4qL1xuXG4vLyBmdW5jdGlvbiBleHRlbmQ8VCwgVT4oZmlyc3Q6IFQsIHNlY29uZDogVSk6IFQgJiBVIHtcbi8vICAgbGV0IHJlc3VsdCA9IDxUICYgVT57fTtcbi8vICAgZm9yIChsZXQgaWQgaW4gZmlyc3QpIHtcbi8vICAgICAoPGFueT5yZXN1bHQpW2lkXSA9ICg8YW55PmZpcnN0KVtpZF07XG4vLyAgIH1cbi8vICAgZm9yIChsZXQgaWQgaW4gc2Vjb25kKSB7XG4vLyAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4vLyAgICAgICAoPGFueT5yZXN1bHQpW2lkXSA9ICg8YW55PnNlY29uZClbaWRdO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuXG5mdW5jdGlvbiBleHRlbmQ8VCwgVT4oZmlyc3Q6IFQsIHNlY29uZDogVSk6IFQgJiBVIHtcbiAgbGV0IHJlc3VsdCA9IDxUICYgVT57fTtcbiAgZm9yIChsZXQga2V5IGluIGZpcnN0KSB7XG4gICAgKDxhbnk+cmVzdWx0KVtrZXldID0gKDxhbnk+Zmlyc3QpW2tleV07XG4gIH1cbiAgZm9yIChsZXQga2V5IGluIHNlY29uZCkge1xuICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICg8YW55PnJlc3VsdClba2V5XSA9ICg8YW55PnNlY29uZClba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuaW50ZXJmYWNlIExvZ2dhYmxlIHtcbiAgbG9nKCk6IHZvaWQ7XG59XG5cbmNsYXNzIENvbnNsb2VMb2dnZXIgaW1wbGVtZW50cyBMb2dnYWJsZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9nKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5uYW1lPVwiLCB0aGlzLm5hbWUpO1xuICB9XG59XG5cbnZhciBqaW0gPSBleHRlbmQobmV3IFBlcnNvbihcImppbVwiKSwgbmV3IENvbnNsb2VMb2dnZXIoKSk7XG52YXIgbiA9IGppbS5uYW1lO1xuamltLmxvZygpO1xuXG4vKlxuXG7ogZTlkIjnsbvlnovvvIhVbmlvbiBUeXBlc++8iVxu6IGU5ZCI57G75Z6L5LiO5Lqk5Y+J57G75Z6L5b6I5pyJ5YWz6IGU77yM5L2G5piv5L2/55So5LiK5Y205a6M5YWo5LiN5ZCM44CCXG7lgbblsJTkvaDkvJrpgYfliLDov5nnp43mg4XlhrXvvIzkuIDkuKrku6PnoIHlupPluIzmnJvkvKDlhaUgbnVtYmVy5oiWIHN0cmluZ+exu+Wei+eahOWPguaVsOOAgiDkvovlpoLkuIvpnaLnmoTlh73mlbDvvJpcbnBhZExlZnTlrZjlnKjkuIDkuKrpl67popjvvIwgcGFkZGluZ+WPguaVsOeahOexu+Wei+aMh+WumuaIkOS6hiBhbnnjgIIgXG7ov5nlsLHmmK/or7TmiJHku6zlj6/ku6XkvKDlhaXkuIDkuKrml6LkuI3mmK8gbnVtYmVy5Lmf5LiN5pivIHN0cmluZ+exu+Wei+eahOWPguaVsO+8jOS9huaYr1R5cGVTY3JpcHTljbTkuI3miqXplJnjgIJcbmxldCBpbmRlbnRlZFN0cmluZyA9IHBhZExlZnQoXCJIZWxsbyB3b3JsZFwiLCB0cnVlKTsgLy8g57yW6K+R6Zi25q616YCa6L+H77yM6L+Q6KGM5pe25oql6ZSZXG5cbiovXG5cbmZ1bmN0aW9uIHBhZExlZnQodmFsdWU6IHN0cmluZywgcGFkZGluZzogYW55KSB7XG4gIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBBcnJheShwYWRkaW5nICsgMSkuam9pbihcIiBcIikgKyB2YWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHBhZGRpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcGFkZGluZyArIHZhbHVlO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc3RyaW5nIG9yIG51bWJlciwgZ290ICcke3BhZGRpbmd9Jy5gKTtcbn1cblxucGFkTGVmdChcIkhlbGxvIHdvcmxkXCIsIDQpOyAvLyByZXR1cm5zIFwiICAgIEhlbGxvIHdvcmxkXCJcblxuLypcbuWcqOS8oOe7n+eahOmdouWQkeWvueixoeivreiogOmHjO+8jOaIkeS7rOWPr+iDveS8muWwhui/meS4pOenjeexu+Wei+aKveixoeaIkOacieWxgue6p+eahOexu+Wei+OAglxu6L+Z5LmI5YGa5pi+54S25piv6Z2e5bi45riF5pmw55qE77yM5L2G5ZCM5pe25Lmf5a2Y5Zyo5LqG6L+H5bqm6K6+6K6h44CCXG5wYWRMZWZ05Y6f5aeL54mI5pys55qE5aW95aSE5LmL5LiA5piv5YWB6K645oiR5Lus5Lyg5YWl5Y6f5aeL57G75Z6L44CCIFxu6L+Z5qC35YGa55qE6K+d5L2/55So6LW35p2l5pei566A5Y2V5Y+I5pa55L6/44CCXG7lpoLmnpzmiJHku6zlsLHmmK/mg7Pkvb/nlKjlt7Lnu4/lrZjlnKjnmoTlh73mlbDnmoTor53vvIzov5nnp43mlrDnmoTmlrnlvI/lsLHkuI3pgILnlKjkuobjgIJcblxu5Luj5pu/IGFuee+8jCDmiJHku6zlj6/ku6Xkvb/nlKgg6IGU5ZCI57G75Z6L5YGa5Li6IHBhZGRpbmfnmoTlj4LmlbDvvJpcbuiBlOWQiOexu+Wei+ihqOekuuS4gOS4quWAvOWPr+S7peaYr+WHoOenjeexu+Wei+S5i+S4gOOAgiDmiJHku6znlKjnq5bnur/vvIggfO+8ieWIhumalOavj+S4quexu+Wei++8jOaJgOS7pSBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFu6KGo56S65LiA5Liq5YC85Y+v5Lul5pivIG51bWJlcu+8jCBzdHJpbmfvvIzmiJYgYm9vbGVhbuOAglxuXG7lpoLmnpzkuIDkuKrlgLzmmK/ogZTlkIjnsbvlnovvvIzmiJHku6zlj6rog73orr/pl67mraTogZTlkIjnsbvlnovnmoTmiYDmnInnsbvlnovph4zlhbHmnInnmoTmiJDlkZjjgIJcbui/memHjOeahOiBlOWQiOexu+Wei+WPr+iDveacieeCueWkjeadgu+8jOS9huaYr+S9oOW+iOWuueaYk+WwseS5oOaDr+S6huOAgiDlpoLmnpzkuIDkuKrlgLznmoTnsbvlnovmmK8gQSB8IELvvIzmiJHku6zog73lpJ8g56Gu5a6a55qE5piv5a6D5YyF5ZCr5LqGIEEg5ZKMIELkuK3lhbHmnInnmoTmiJDlkZjjgIJcbui/meS4quS+i+WtkOmHjO+8jCBCaXJk5YW35pyJ5LiA5LiqIGZseeaIkOWRmOOAgiDmiJHku6zkuI3og73noa7lrprkuIDkuKogQmlyZCB8IEZpc2jnsbvlnovnmoTlj5jph4/mmK/lkKbmnIkgZmx55pa55rOV44CCXG7lpoLmnpzlj5jph4/lnKjov5DooYzml7bmmK8gRmlzaOexu+Wei++8jOmCo+S5iOiwg+eUqCBwZXQuZmx5KCnlsLHlh7rplJnkuobjgIJcblxuXG4qL1xuZnVuY3Rpb24gcGFkTGVmdDEodmFsdWU6IHN0cmluZywgcGFkZGluZzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIC8vIC4uLlxufVxuXG4vLyBsZXQgaW5kZW50ZWRTdHJpbmcgPSBwYWRMZWZ0MShcIkhlbGxvIHdvcmxkXCIsIHRydWUpOyAvLyBlcnJvcnMgZHVyaW5nIGNvbXBpbGF0aW9uXG5sZXQgaW5kZW50ZWRTdHJpbmcxID0gcGFkTGVmdDEoXCJIZWxsbyB3b3JsZFwiLCAxKTsgLy9cbmxldCBpbmRlbnRlZFN0cmluZzIgPSBwYWRMZWZ0MShcIkhlbGxvIHdvcmxkXCIsIFwic3RyXCIpOyAvL1xuXG4vKlxu55So5oi36Ieq5a6a5LmJ55qE57G75Z6L5L+d5oqkXG7ov5nph4zlj6/ku6Xms6jmhI/liLDmiJHku6zkuI3lvpfkuI3lpJrmrKHkvb/nlKjnsbvlnovmlq3oqIDjgIJcbuWBh+iLpeaIkeS7rOS4gOaXpuajgOafpei/h+exu+Wei++8jOWwseiDveWcqOS5i+WQjueahOavj+S4quWIhuaUr+mHjOa4healmuWcsOefpemBkyBwZXTnmoTnsbvlnovnmoTor53lsLHlpb3kuobjgIJcblxuVHlwZVNjcmlwdOmHjOeahCDnsbvlnovkv53miqTmnLrliLborqnlroPmiJDkuLrkuobnjrDlrp7jgIJcbuexu+Wei+S/neaKpOWwseaYr+S4gOS6m+ihqOi+vuW8j++8jOWug+S7rOS8muWcqOi/kOihjOaXtuajgOafpeS7peehruS/neWcqOafkOS4quS9nOeUqOWfn+mHjOeahOexu+Wei+OAgiBcbuimgeWumuS5ieS4gOS4quexu+Wei+S/neaKpO+8jOaIkeS7rOWPquimgeeugOWNleWcsOWumuS5ieS4gOS4quWHveaVsO+8jOWug+eahOi/lOWbnuWAvOaYr+S4gOS4qiDnsbvlnovosJPor43vvJpcblxuKi9cblxuLypcbiB0eXBlb2bnsbvlnovkv53miqRcbiDnjrDlnKjmiJHku6zlm57ov4flpLTmnaXnnIvnnIvmgI7kuYjkvb/nlKjogZTlkIjnsbvlnovkuablhpkgcGFkTGVmdOS7o+eggeOAgiDmiJHku6zlj6/ku6Xlg4/kuIvpnaLov5nmoLfliKnnlKjnsbvlnovmlq3oqIDmnaXlhpnvvJpcbiAqL1xuXG4vKlxuaW5zdGFuY2VvZuexu+Wei+S/neaKpFxu5aaC5p6c5L2g5bey57uP6ZiF6K+75LqGIHR5cGVvZuexu+Wei+S/neaKpOW5tuS4lOWvuUphdmFTY3JpcHTph4znmoQgaW5zdGFuY2VvZuaTjeS9nOespueGn+aCieeahOivne+8jOS9oOWPr+iDveW3sue7j+eMnOWIsOS6hui/meiKguimgeiusueahOWGheWuueOAglxuXG5pbnN0YW5jZW9m57G75Z6L5L+d5oqk5piv6YCa6L+H5p6E6YCg5Ye95pWw5p2l57uG5YyW57G75Z6L55qE5LiA56eN5pa55byP44CCIOavlOWmgu+8jOaIkeS7rOWAn+mJtOS4gOS4i+S5i+WJjeWtl+espuS4suWhq+WFheeahOS+i+WtkO+8mlxuXG4qL1xuXG4vL+iBlOWQiOexu+Wei1xuaW50ZXJmYWNlIFBhZGRlciB7XG4gIGdldFBhZGRpbmdTdHJpbmcoKTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5jbGFzcyBTcGFjZVJlcGVhdGluZ1BhZGRlciBpbXBsZW1lbnRzIFBhZGRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnVtU3BhY2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLm51bVNwYWNlcyA9IG51bVNwYWNlcztcbiAgfVxuICBnZXRQYWRkaW5nU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm51bVNwYWNlcztcbiAgfVxufVxuXG5jbGFzcyBTdHJpbmdQYWRkZXIgaW1wbGVtZW50cyBQYWRkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0UGFkZGluZ1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG5jb25zdCBnZXRSYW5kb21QYWRkZXIgPSAoKSA9PiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41XG4gICAgPyBuZXcgU3BhY2VSZXBlYXRpbmdQYWRkZXIoNClcbiAgICA6IG5ldyBTdHJpbmdQYWRkZXIoXCIgIFwiKTtcbn07XG5cbi8vIOexu+Wei+S4ulNwYWNlUmVwZWF0aW5nUGFkZGVyIHwgU3RyaW5nUGFkZGVyXG5sZXQgcGFkZGVyOiBQYWRkZXIgPSBnZXRSYW5kb21QYWRkZXIoKTtcblxuaWYgKHBhZGRlciBpbnN0YW5jZW9mIFNwYWNlUmVwZWF0aW5nUGFkZGVyKSB7XG4gIC8vIOexu+Wei+e7huWMluS4uidTcGFjZVJlcGVhdGluZ1BhZGRlcidcbn1cbmlmIChwYWRkZXIgaW5zdGFuY2VvZiBTdHJpbmdQYWRkZXIpIHtcbiAgLy8g57G75Z6L57uG5YyW5Li6J1N0cmluZ1BhZGRlcidcbn1cblxuLypcbuWPr+mAieWPguaVsOWSjOWPr+mAieWxnuaAp1xu5L2/55So5LqGIC0tc3RyaWN0TnVsbENoZWNrc++8jOWPr+mAieWPguaVsOS8muiiq+iHquWKqOWcsOWKoOS4iiB8IHVuZGVmaW5lZDpcblxuKi9cblxuZnVuY3Rpb24gZih4OiBudW1iZXIsIHk/OiBudW1iZXIpIHtcbiAgcmV0dXJuIHggKyAoeSB8fCAwKTtcbn1cbmYoMSwgMik7XG5mKDEpO1xuZigxLCB1bmRlZmluZWQpO1xuLy8gZigxLCBudWxsKTsgLy8gZXJyb3IsICdudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byAnbnVtYmVyIHwgdW5kZWZpbmVkJ1xuXG4vL+WPr+mAieWxnuaAp+S5n+S8muacieWQjOagt+eahOWkhOeQhu+8mlxuY2xhc3MgQyB7XG4gIGE6IG51bWJlcjtcbiAgYj86IG51bWJlcjtcbn1cbmxldCBjID0gbmV3IEMoKTtcbmMuYSA9IDEyO1xuLy8gYy5hID0gdW5kZWZpbmVkOyAvLyBlcnJvciwgJ3VuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gJ251bWJlcidcbmMuYiA9IDEzO1xuYy5iID0gdW5kZWZpbmVkOyAvLyBva1xuLy8gYy5iID0gbnVsbDsgLy8gZXJyb3IsICdudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byAnbnVtYmVyIHwgdW5kZWZpbmVkJ1xuXG4vKlxu57G75Z6L5L+d5oqk5ZKM57G75Z6L5pat6KiAXG7nlLHkuo7lj6/ku6XkuLpudWxs55qE57G75Z6L5piv6YCa6L+H6IGU5ZCI57G75Z6L5a6e546w77yM6YKj5LmI5L2g6ZyA6KaB5L2/55So57G75Z6L5L+d5oqk5p2l5Y676ZmkIG51bGzjgIJcbuW5uOi/kOWcsOaYr+i/meS4juWcqEphdmFTY3JpcHTph4zlhpnnmoTku6PnoIHkuIDoh7TvvJpcbiovXG5cbmZ1bmN0aW9uIGYxKHNuOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHtcbiAgaWYgKHNuID09IG51bGwpIHtcbiAgICByZXR1cm4gXCJkZWZhdWx0XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNuO1xuICB9XG59XG5cbi8qXG7nsbvlnovliKvlkI1cbuexu+Wei+WIq+WQjeS8mue7meS4gOS4quexu+Wei+i1t+S4quaWsOWQjeWtl+OAgiBcbuexu+Wei+WIq+WQjeacieaXtuWSjOaOpeWPo+W+iOWDj++8jOS9huaYr+WPr+S7peS9nOeUqOS6juWOn+Wni+WAvO+8jOiBlOWQiOexu+Wei++8jOWFg+e7hOS7peWPiuWFtuWug+S7u+S9leS9oOmcgOimgeaJi+WGmeeahOexu+Wei+OAglxuKi9cblxudHlwZSBOYW1lID0gc3RyaW5nO1xudHlwZSBOYW1lUmVzb2x2ZXIgPSAoKSA9PiBzdHJpbmc7XG50eXBlIE5hbWVPclJlc29sdmVyID0gTmFtZSB8IE5hbWVSZXNvbHZlcjtcbmZ1bmN0aW9uIGdldE5hbWUobjogTmFtZVJlc29sdmVyKTogTmFtZSB7XG4gIGlmICh0eXBlb2YgbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG4oKTtcbiAgfVxufVxuXG4vKlxu6LW35Yir5ZCN5LiN5Lya5paw5bu65LiA5Liq57G75Z6LIC0g5a6D5Yib5bu65LqG5LiA5Liq5pawIOWQjeWtl+adpeW8leeUqOmCo+S4quexu+Wei+OAglxu57uZ5Y6f5aeL57G75Z6L6LW35Yir5ZCN6YCa5bi45rKh5LuA5LmI55So77yM5bC9566h5Y+v5Lul5YGa5Li65paH5qGj55qE5LiA56eN5b2i5byP5L2/55So44CCXG7lkIzmjqXlj6PkuIDmoLfvvIznsbvlnovliKvlkI3kuZ/lj6/ku6XmmK/ms5vlnosgLSDmiJHku6zlj6/ku6Xmt7vliqDnsbvlnovlj4LmlbDlubbkuJTlnKjliKvlkI3lo7DmmI7nmoTlj7PkvqfkvKDlhaXvvJpcbiovXG5cbnR5cGUgQ29udGFpbmVyPFQ+ID0geyB2YWx1ZTogVCB9O1xuLy/miJHku6zkuZ/lj6/ku6Xkvb/nlKjnsbvlnovliKvlkI3mnaXlnKjlsZ7mgKfph4zlvJXnlKjoh6rlt7HvvJpcbnR5cGUgVHJlZTxUPiA9IHtcbiAgdmFsdWU6IFQ7IC8v56ys5LiA56eN5byV55So5pa55byPXG4gIGxlZnQ6IFRyZWU8VD47IC8v56ys5LqM56eN5byV55So5pa55byPXG4gIHJpZ2h0OiBUcmVlPFQ+O1xuICB0b3A6IFRyZWU8VD47XG59O1xuXG4vL+S4juS6pOWPieexu+Wei+S4gOi1t+S9v+eUqO+8jOaIkeS7rOWPr+S7peWIm+W7uuWHuuS4gOS6m+WNgeWIhueogOWlh+WPpOaAqueahOexu+Wei+OAgiDmoJHlvaLnsbvlnotcbnR5cGUgTGlua2VkTGlzdDxUPiA9IFQgJiB7IG5leHQ6IExpbmtlZExpc3Q8VD4gfTtcbmludGVyZmFjZSBQZXJzb24ge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbnZhciBwZW9wbGU6IExpbmtlZExpc3Q8UGVyc29uPjtcbi8vIHZhciBzID0gcGVvcGxlLm5hbWU7XG4vLyBzID0gcGVvcGxlLm5leHQubmFtZTtcbi8vIHMgPSBwZW9wbGUubmV4dC5uZXh0Lm5hbWU7XG4vLyBzID0gcGVvcGxlLm5leHQubmV4dC5uZXh0Lm5hbWU7XG5cbi8v54S26ICM77yM57G75Z6L5Yir5ZCN5LiN6IO95Ye6546w5Zyo5aOw5piO5Y+z5L6n55qE5Lu75L2V5Zyw5pa544CCXG4vLyB0eXBlIFlpa2VzID0gQXJyYXk8WWlrZXM+OyAvLyBlcnJvclxuXG50eXBlIEFsaWFzID0geyBudW06IG51bWJlciB9O1xuaW50ZXJmYWNlIEludGVyZmFjZSB7XG4gIG51bTogbnVtYmVyO1xufVxuXG4vKlxu5Zyo57yW5YaZ57G75aOw5piO5paH5Lu277yILmQudHPvvInml7bvvIxkZWNsYXJlIOihqOekuuWjsOaYjuS9nOeUqOOAglxu5aaC5p6c5piv5Lit5paH55qE6K+d77yM6KeB5aOw5piO5paH5Lu2LeekuuS+i+OAglxuKi9cbmRlY2xhcmUgZnVuY3Rpb24gYWxpYXNlZChhcmc6IEFsaWFzKTogQWxpYXM7XG5kZWNsYXJlIGZ1bmN0aW9uIGludGVyZmFjZWQoYXJnOiBJbnRlcmZhY2UpOiBJbnRlcmZhY2U7XG5cbi8vIOWAvOi/kOihjOi+k+WFpei/meWHoOS4quexu+Wei+Wtl+esplxudHlwZSBFYXNpbmcgPSBcImVhc2UtaW5cIiB8IFwiZWFzZS1vdXRcIiB8IFwiZWFzZS1pbi1vdXRcIjtcbmNsYXNzIFVJRWxlbWVudCB7XG4gIGFuaW1hdGUoZHg6IG51bWJlciwgZHk6IG51bWJlciwgZWFzaW5nOiBFYXNpbmcpIHtcbiAgICBpZiAoZWFzaW5nID09PSBcImVhc2UtaW5cIikge1xuICAgICAgLy8gLi4uXG4gICAgfSBlbHNlIGlmIChlYXNpbmcgPT09IFwiZWFzZS1vdXRcIikge1xuICAgIH0gZWxzZSBpZiAoZWFzaW5nID09PSBcImVhc2UtaW4tb3V0XCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXJyb3IhIHNob3VsZCBub3QgcGFzcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICB9XG4gIH1cbn1cblxubGV0IGJ1dHRvbiA9IG5ldyBVSUVsZW1lbnQoKTtcbmJ1dHRvbi5hbmltYXRlKDAsIDAsIFwiZWFzZS1pblwiKTtcbi8vIGJ1dHRvbi5hbmltYXRlKDAsIDAsIFwidW5lYXN5XCIpOyAvLyBlcnJvcjogXCJ1bmVhc3lcIiBpcyBub3QgYWxsb3dlZCBoZXJlICDovpPlhaXlhbbku5bnsbvlnovlrZfnrKbkvJrmiqXplJlcblxuLy/lrZfnrKbkuLLlrZfpnaLph4/nsbvlnovov5jlj6/ku6XnlKjkuo7ljLrliIblh73mlbDph43ovb3vvJrlh73mlbDph43ovb1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZTogXCJpbWdcIik6IEhUTUxJbWFnZUVsZW1lbnQ7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IFwiaW5wdXRcIik6IEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAuLi4gbW9yZSBvdmVybG9hZHMgLi4uXG4vLyDov5Tlm57kuI3lkIznmoTnsbvlnosg5bCx5piv6YeN6L29XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IEVsZW1lbnQge1xuICBsZXQgZWw6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKVswXTtcbiAgcmV0dXJuIGVsO1xuICAvLyAuLi4gY29kZSBnb2VzIGhlcmUgLi4uXG59XG5cbi8vIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyBjcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4vKlxu5pWw5a2X5a2X6Z2i6YeP57G75Z6LXG5UeXBlU2NyaXB06L+Y5YW35pyJ5pWw5a2X5a2X6Z2i6YeP57G75Z6L44CCXG4qL1xuXG5mdW5jdGlvbiByb2xsRGllKCk6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHtcbiAgcmV0dXJuO1xufVxuLy/miJHku6zlvojlsJHnm7TmjqXov5nmoLfkvb/nlKjvvIzkvYblroPku6zlj6/ku6XnlKjlnKjnvKnlsI/ojIPlm7TosIPor5VidWfnmoTml7blgJnvvJpcbi8vIGZ1bmN0aW9uIGZvbyh4OiBudW1iZXIpIHtcbi8vICAgICBpZiAoeCAhPT0gMSB8fCB4ICE9PSAyKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgfn5+fn5+flxuLy8gICAgICAgICAvLyBPcGVyYXRvciAnIT09JyBjYW5ub3QgYmUgYXBwbGllZCB0byB0eXBlcyAnMScgYW5kICcyJy5cbi8vICAgICB9XG4vLyB9XG5cbi8qXG7mnprkuL7miJDlkZjnsbvlnotcbuWmguaIkeS7rOWcqCDmnprkuL7kuIDoioLph4zmj5DliLDnmoTvvIzlvZPmr4/kuKrmnprkuL7miJDlkZjpg73mmK/nlKjlrZfpnaLph4/liJ3lp4vljJbnmoTml7blgJnmnprkuL7miJDlkZjmmK/lhbfmnInnsbvlnovnmoTjgIJcblxu5Zyo5oiR5Lus6LCI5Y+K4oCc5Y2V5L6L57G75Z6L4oCd55qE5pe25YCZ77yM5aSa5pWw5piv5oyH5p6a5Li+5oiQ5ZGY57G75Z6L5ZKM5pWw5a2XL+Wtl+espuS4suWtl+mdoumHj+exu+Wei++8jOWwveeuoeWkp+WkmuaVsOeUqOaIt+S8muS6kuaNouS9v+eUqOKAnOWNleS+i+exu+Wei+KAneWSjOKAnOWtl+mdoumHj+exu+Wei+KAneOAglxuXG7lj6/ovqjor4bogZTlkIjvvIhEaXNjcmltaW5hdGVkIFVuaW9uc++8iVxu5L2g5Y+v5Lul5ZCI5bm25Y2V5L6L57G75Z6L77yM6IGU5ZCI57G75Z6L77yM57G75Z6L5L+d5oqk5ZKM57G75Z6L5Yir5ZCN5p2l5Yib5bu65LiA5Liq5Y+r5YGaIOWPr+i+qOivhuiBlOWQiOeahOmrmOe6p+aooeW8j++8jOWug+S5n+ensOWBmiDmoIfnrb7ogZTlkIjmiJYg5Luj5pWw5pWw5o2u57G75Z6L44CCIOWPr+i+qOivhuiBlOWQiOWcqOWHveaVsOW8j+e8lueoi+W+iOacieeUqOWkhOOAgiDkuIDkupvor63oqIDkvJroh6rliqjlnLDkuLrkvaDovqjor4bogZTlkIjvvJvogIxUeXBlU2NyaXB05YiZ5Z+65LqO5bey5pyJ55qESmF2YVNjcmlwdOaooeW8j+OAgiDlroPlhbfmnIkz5Liq6KaB57Sg77yaXG5cbuWFt+acieaZrumAmueahOWNleS+i+exu+Wei+WxnuaAp+KAlCDlj6/ovqjor4bnmoTnibnlvoHjgIJcbuS4gOS4quexu+Wei+WIq+WQjeWMheWQq+S6humCo+S6m+exu+Wei+eahOiBlOWQiOKAlCDogZTlkIjjgIJcbuatpOWxnuaAp+S4iueahOexu+Wei+S/neaKpOOAglxuKi9cblxuaW50ZXJmYWNlIFNxdWFyZSB7XG4gIGtpbmQ6IFwic3F1YXJlXCI7IC8v5bGe5oCn5a6a5LmJXG4gIHNpemU6IG51bWJlcjtcbn1cbmludGVyZmFjZSBSZWN0YW5nbGUge1xuICBraW5kOiBcInJlY3RhbmdsZVwiO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cbmludGVyZmFjZSBDaXJjbGUge1xuICBraW5kOiBcImNpcmNsZVwiO1xuICByYWRpdXM6IG51bWJlcjtcbn1cblxudHlwZSBTaGFwZSA9IFNxdWFyZSB8IFJlY3RhbmdsZSB8IENpcmNsZTtcblxuLy/njrDlnKjmiJHku6zkvb/nlKjlj6/ovqjor4bogZTlkIg6XG5mdW5jdGlvbiBhcmVhKHM6IFNoYXBlKSB7XG4gIHN3aXRjaCAocy5raW5kKSB7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgcmV0dXJuIHMuc2l6ZSAqIHMuc2l6ZTtcbiAgICBjYXNlIFwicmVjdGFuZ2xlXCI6XG4gICAgICByZXR1cm4gcy5oZWlnaHQgKiBzLndpZHRoO1xuICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgIHJldHVybiBNYXRoLlBJICogcy5yYWRpdXMgKiogMjtcbiAgfVxufVxuXG4vKlxu5a6M5pW05oCn5qOA5p+lXG7lvZPmsqHmnInmtrXnm5bmiYDmnInlj6/ovqjor4bogZTlkIjnmoTlj5jljJbml7bvvIzmiJHku6zmg7PorqnnvJbor5Hlmajlj6/ku6XpgJrnn6XmiJHku6zjgIJcbuavlOWmgu+8jOWmguaenOaIkeS7rOa3u+WKoOS6hiBUcmlhbmdsZeWIsCBTaGFwZe+8jOaIkeS7rOWQjOaXtui/mOmcgOimgeabtOaWsCBhcmVhOlxuKi9cbmZ1bmN0aW9uIGFyZWExKHM6IFNoYXBlKTogbnVtYmVyIHtcbiAgLy8gZXJyb3I6IHJldHVybnMgbnVtYmVyIHwgdW5kZWZpbmVkXG4gIHN3aXRjaCAocy5raW5kKSB7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgcmV0dXJuIHMuc2l6ZSAqIHMuc2l6ZTtcbiAgICBjYXNlIFwicmVjdGFuZ2xlXCI6XG4gICAgICByZXR1cm4gcy5oZWlnaHQgKiBzLndpZHRoO1xuICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgIHJldHVybiBNYXRoLlBJICogcy5yYWRpdXMgKiogMjtcbiAgfVxufVxuXG5hcmVhMSh7XG4gIGtpbmQ6IFwic3F1YXJlXCIsXG4gIHNpemU6IDEsXG59KTtcblxuLypcbuWboOS4uiBzd2l0Y2jmsqHmnInljIXmtrXmiYDmnInmg4XlhrXvvIzmiYDku6VUeXBlU2NyaXB06K6k5Li66L+Z5Liq5Ye95pWw5pyJ5pe25YCZ5Lya6L+U5ZueIHVuZGVmaW5lZOOAglxu5aaC5p6c5L2g5piO56Gu5Zyw5oyH5a6a5LqG6L+U5Zue5YC857G75Z6L5Li6IG51bWJlcu+8jOmCo+S5iOS9oOS8mueci+WIsOS4gOS4qumUmeivr++8jOWboOS4uuWunumZheS4iui/lOWbnuWAvOeahOexu+Wei+S4uiBudW1iZXIgfCB1bmRlZmluZWTjgIJcbueEtuiAjO+8jOi/meenjeaWueazleWtmOWcqOS6m+W+ruWmmeS5i+WkhOS4lCAtLXN0cmljdE51bGxDaGVja3Plr7nml6fku6PnoIHmlK/mjIHkuI3lpb3jgIJcblxu56ys5LqM56eN5pa55rOV5L2/55SoIG5ldmVy57G75Z6L77yM57yW6K+R5Zmo55So5a6D5p2l6L+b6KGM5a6M5pW05oCn5qOA5p+l77yaXG4gICAg6L+Z6YeM77yMIGFzc2VydE5ldmVy5qOA5p+lIHPmmK/lkKbkuLogbmV2ZXLnsbvlnovigJTljbPkuLrpmaTljrvmiYDmnInlj6/og73mg4XlhrXlkI7liankuIvnmoTnsbvlnovjgIJcbiAgICDlpoLmnpzkvaDlv5jorrDkuobmn5DkuKpjYXNl77yM6YKj5LmIIHPlsIblhbfmnInkuIDkuKrnnJ/lrp7nmoTnsbvlnovlubbkuJTkvaDkvJrlvpfliLDkuIDkuKrplJnor6/jgIJcbiAgICDov5nnp43mlrnlvI/pnIDopoHkvaDlrprkuYnkuIDkuKrpop3lpJbnmoTlh73mlbDvvIzkvYbmmK/lnKjkvaDlv5jorrDmn5DkuKpjYXNl55qE5pe25YCZ5Lmf5pu05Yqg5piO5pi+44CCXG4qL1xuXG5mdW5jdGlvbiBhc3NlcnROZXZlcih4OiBuZXZlcik6IG5ldmVyIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBvYmplY3Q6IFwiICsgeCk7XG59XG5mdW5jdGlvbiBhcmVhMihzOiBTaGFwZSkge1xuICBzd2l0Y2ggKHMua2luZCkge1xuICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgIHJldHVybiBzLnNpemUgKiBzLnNpemU7XG4gICAgY2FzZSBcInJlY3RhbmdsZVwiOlxuICAgICAgcmV0dXJuIHMuaGVpZ2h0ICogcy53aWR0aDtcbiAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICByZXR1cm4gTWF0aC5QSSAqIHMucmFkaXVzICoqIDI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhc3NlcnROZXZlcihzKTsgLy8gZXJyb3IgaGVyZSBpZiB0aGVyZSBhcmUgbWlzc2luZyBjYXNlc1xuICB9XG59XG5cbi8qXG7lpJrmgIHnmoQgdGhpc+exu+Wei1xuICAgIOWkmuaAgeeahCB0aGlz57G75Z6L6KGo56S655qE5piv5p+Q5Liq5YyF5ZCr57G75oiW5o6l5Y+j55qEIOWtkOexu+Wei+OAgiBcbiAgICDov5nooqvnp7DlgZogRi1ib3VuZGVk5aSa5oCB5oCn44CCIOWug+iDveW+iOWuueaYk+eahOihqOeOsOi/nui0r+aOpeWPo+mXtOeahOe7p+aJv++8jOavlOWmguOAglxuICAgIOWcqOiuoeeul+WZqOeahOS+i+WtkOmHjO+8jOWcqOavj+S4quaTjeS9nOS5i+WQjumDvei/lOWbniB0aGlz57G75Z6L77yaXG4qL1xuXG5jbGFzcyBCYXNpY0NhbGN1bGF0b3Ige1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHZhbHVlOiBudW1iZXIgPSAwKSB7fVxuICBwdWJsaWMgY3VycmVudFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbiAgcHVibGljIGFkZChvcGVyYW5kOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZhbHVlICs9IG9wZXJhbmQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcHVibGljIG11bHRpcGx5KG9wZXJhbmQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmFsdWUgKj0gb3BlcmFuZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvLyAuLi4gb3RoZXIgb3BlcmF0aW9ucyBnbyBoZXJlIC4uLlxufVxuXG5sZXQgdiA9IG5ldyBCYXNpY0NhbGN1bGF0b3IoMikubXVsdGlwbHkoNSkuYWRkKDEpLmN1cnJlbnRWYWx1ZSgpO1xuXG4vL+eUseS6jui/meS4quexu+S9v+eUqOS6hiB0aGlz57G75Z6L77yM5L2g5Y+v5Lul57un5om/5a6D77yM5paw55qE57G75Y+v5Lul55u05o6l5L2/55So5LmL5YmN55qE5pa55rOV77yM5LiN6ZyA6KaB5YGa5Lu75L2V55qE5pS55Y+Y44CCXG4vKlxu5aaC5p6c5rKh5pyJIHRoaXPnsbvlnovvvIwgU2NpZW50aWZpY0NhbGN1bGF0b3LlsLHkuI3og73lpJ/lnKjnu6fmib8gQmFzaWNDYWxjdWxhdG9y55qE5ZCM5pe26L+Y5L+d5oyB5o6l5Y+j55qE6L+e6LSv5oCn44CCIFxubXVsdGlwbHnlsIbkvJrov5Tlm54gQmFzaWNDYWxjdWxhdG9y77yM5a6D5bm25rKh5pyJIHNpbuaWueazleOAglxu54S26ICM77yM5L2/55SoIHRoaXPnsbvlnovvvIwgbXVsdGlwbHnkvJrov5Tlm54gdGhpc++8jOWcqOi/memHjOWwseaYryBTY2llbnRpZmljQ2FsY3VsYXRvcuOAglxuKi9cblxuY2xhc3MgU2NpZW50aWZpY0NhbGN1bGF0b3IgZXh0ZW5kcyBCYXNpY0NhbGN1bGF0b3Ige1xuICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWUgPSAwKSB7XG4gICAgc3VwZXIodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBzaW4oKTogdGhpcyB7XG4gICAgdGhpcy52YWx1ZSA9IE1hdGguc2luKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vIC4uLiBvdGhlciBvcGVyYXRpb25zIGdvIGhlcmUgLi4uXG59XG5cbmxldCB2MSA9IG5ldyBTY2llbnRpZmljQ2FsY3VsYXRvcigyKS5tdWx0aXBseSg1KS5zaW4oKS5hZGQoMSkuY3VycmVudFZhbHVlKCk7XG5cbi8qXG7ntKLlvJXnsbvlnovvvIhJbmRleCB0eXBlc++8iVxu5L2/55So57Si5byV57G75Z6L77yM57yW6K+R5Zmo5bCx6IO95aSf5qOA5p+l5L2/55So5LqG5Yqo5oCB5bGe5oCn5ZCN55qE5Luj56CB44CCXG4g5L6L5aaC77yM5LiA5Liq5bi46KeB55qESmF2YVNjcmlwdOaooeW8j+aYr+S7juWvueixoeS4remAieWPluWxnuaAp+eahOWtkOmbhuOAglxuKi9cblxuZnVuY3Rpb24gcGx1Y2s8VD4obzogYW55LCBuYW1lczogVFtdKSB7XG4gIHJldHVybiBuYW1lcy5tYXAoKG4pID0+IG9bbl0pO1xufVxuXG5mdW5jdGlvbiBwbHVjazE8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG86IFQsIG5hbWVzOiBLW10pOiBUW0tdW10ge1xuICByZXR1cm4gbmFtZXMubWFwKChuKSA9PiBvW25dKTtcbn1cblxuaW50ZXJmYWNlIFBlcnNvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG59XG5sZXQgcGVyc29uOiBQZXJzb24gPSB7XG4gIG5hbWU6IFwiSmFyaWRcIixcbiAgYWdlOiAzNSxcbn07XG4vKlxu57yW6K+R5Zmo5Lya5qOA5p+lIG5hbWXmmK/lkKbnnJ/nmoTmmK8gUGVyc29u55qE5LiA5Liq5bGe5oCn44CCXG7mnKzkvovov5jlvJXlhaXkuoblh6DkuKrmlrDnmoTnsbvlnovmk43kvZznrKbjgIIg6aaW5YWI5pivIGtleW9mIFTvvIwgXG7ntKLlvJXnsbvlnovmn6Xor6Lmk43kvZznrKbjgIIg5a+55LqO5Lu75L2V57G75Z6LIFTvvIwga2V5b2YgVOeahOe7k+aenOS4uiBcblTkuIrlt7Lnn6XnmoTlhazlhbHlsZ7mgKflkI3nmoTogZTlkIjjgIIg5L6L5aaC77yaXG4qL1xubGV0IHN0cmluZ3M6IHN0cmluZ1tdID0gcGx1Y2socGVyc29uLCBbXCJuYW1lXCJdKTsgLy8gb2ssIHN0cmluZ1tdXG5sZXQgc3RyaW5nczE6IHN0cmluZ1tdID0gcGx1Y2sxKHBlcnNvbiwgW1wibmFtZVwiXSk7IC8vIG9rLCBzdHJpbmdbXVxuY29uc29sZS5sb2coXCJzdHJpbmdzPVwiLCBzdHJpbmdzKTtcbmNvbnNvbGUubG9nKFwic3RyaW5nczE9XCIsIHN0cmluZ3MxKTtcblxubGV0IHBlcnNvblByb3BzOiBrZXlvZiBQZXJzb247IC8vICduYW1lJyB8ICdhZ2UnICDmo4DntKJrZXlcbi8qXG5rZXlvZiBQZXJzb27mmK/lrozlhajlj6/ku6XkuI4gJ25hbWUnIHwgJ2FnZSfkupLnm7jmm7/mjaLnmoTjgIIg5LiN5ZCM55qE5piv5aaC5p6c5L2g5re75Yqg5LqG5YW25a6D55qE5bGe5oCn5YiwXG4gUGVyc29u77yM5L6L5aaCIGFkZHJlc3M6IHN0cmluZ++8jOmCo+S5iCBrZXlvZiBQZXJzb27kvJroh6rliqjlj5jkuLogJ25hbWUnIHwgJ2FnZScgfCAnYWRkcmVzcyfjgIJcbuS9oOWPr+S7peWcqOWDjyBwbHVja+WHveaVsOi/meexu+S4iuS4i+aWh+mHjOS9v+eUqCBrZXlvZu+8jOWboOS4uuWcqOS9v+eUqOS5i+WJjeS9oOW5tuS4jea4healmuWPr+iDveWHuueOsOeahOWxnuaAp+WQjeOAgiBcbuS9hue8luivkeWZqOS8muajgOafpeS9oOaYr+WQpuS8oOWFpeS6huato+ehrueahOWxnuaAp+WQjee7mSBwbHVja++8mlxuKi9cbnBlcnNvblByb3BzID0gXCJuYW1lXCI7XG5wbHVjayhwZXJzb24sIFtcImFnZVwiLCBcInVua25vd25cIl0pOyAvLyDmraPluLhcbi8vIHBsdWNrMShwZXJzb24sIFsnYWdlJywgJ3Vua25vd24nXSk7IC8vIGVycm9yLCAndW5rbm93bicgaXMgbm90IGluICduYW1lJyB8ICdhZ2UnXG5cbi8qXG7nrKzkuozkuKrmk43kvZznrKbmmK8gVFtLXe+8jCDntKLlvJXorr/pl67mk43kvZznrKbjgIJcbuWcqOi/memHjO+8jOexu+Wei+ivreazleWPjeaYoOS6huihqOi+vuW8j+ivreazleOAgiBcbui/meaEj+WRs+edgCBwZXJzb25bJ25hbWUnXeWFt+acieexu+WeiyBQZXJzb25bJ25hbWUnXSDigJQg5Zyo5oiR5Lus55qE5L6L5a2Q6YeM5YiZ5Li6IHN0cmluZ+exu+Wei+OAglxu54S26ICM77yM5bCx5YOP57Si5byV57G75Z6L5p+l6K+i5LiA5qC377yM5L2g5Y+v5Lul5Zyo5pmu6YCa55qE5LiK5LiL5paH6YeM5L2/55SoIFRbS13vvIzov5nmraPmmK/lroPnmoTlvLrlpKfmiYDlnKjjgIIgXG7kvaDlj6ropoHnoa7kv53nsbvlnovlj5jph48gSyBleHRlbmRzIGtleW9mIFTlsLHlj6/ku6XkuobjgIJcbiAg5L6L5aaC5LiL6Z2iIGdldFByb3BlcnR55Ye95pWw55qE5L6L5a2Q77yaXG4qL1xuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eTxULCBLIGV4dGVuZHMga2V5b2YgVD4obzogVCwgbmFtZTogSyk6IFRbS10ge1xuICByZXR1cm4gb1tuYW1lXTsgLy8gb1tuYW1lXSBpcyBvZiB0eXBlIFRbS11cbn1cblxuLypcbmdldFByb3BlcnR56YeM55qEIG86IFTlkowgbmFtZTogS++8jOaEj+WRs+edgCBvW25hbWVdOiBUW0td44CCXG4g5b2T5L2g6L+U5ZueIFRbS13nmoTnu5PmnpzvvIznvJbor5HlmajkvJrlrp7kvovljJbplK7nmoTnnJ/lrp7nsbvlnovvvIxcbiDlm6DmraQgZ2V0UHJvcGVydHnnmoTov5Tlm57lgLznsbvlnovkvJrpmo/nnYDkvaDpnIDopoHnmoTlsZ7mgKfmlLnlj5jjgIJcbiovXG5cbmxldCBuYW1lOiBzdHJpbmcgPSBnZXRQcm9wZXJ0eShwZXJzb24sIFwibmFtZVwiKTtcbmxldCBhZ2U6IG51bWJlciA9IGdldFByb3BlcnR5KHBlcnNvbiwgXCJhZ2VcIik7XG4vLyBsZXQgdW5rbm93biA9IGdldFByb3BlcnR5KHBlcnNvbiwgJ3Vua25vd24nKTsgLy8gZXJyb3IsICd1bmtub3duJyBpcyBub3QgaW4gJ25hbWUnIHwgJ2FnZSdcblxuLypcbue0ouW8leexu+Wei+WSjOWtl+espuS4sue0ouW8leetvuWQjVxua2V5b2blkowgVFtLXeS4juWtl+espuS4sue0ouW8leetvuWQjei/m+ihjOS6pOS6kuOAglxu5aaC5p6c5L2g5pyJ5LiA5Liq5bim5pyJ5a2X56ym5Liy57Si5byV562+5ZCN55qE57G75Z6L77yM6YKj5LmIIGtleW9mIFTkvJrmmK8gc3RyaW5n44CCIFxu5bm25LiUIFRbc3RyaW5nXeS4uue0ouW8leetvuWQjeeahOexu+Wei++8mlxuKi9cblxuaW50ZXJmYWNlIE1hcDxUPiB7XG4gIFtrZXk6IHN0cmluZ106IFQ7XG59XG5sZXQga2V5czoga2V5b2YgTWFwPG51bWJlcj47IC8vIHN0cmluZ1xubGV0IHZhbHVlOiBNYXA8bnVtYmVyPlsnZm9vJ107IC8vIG51bWJlclxuXG5leHBvcnQge307XG4iXX0=
