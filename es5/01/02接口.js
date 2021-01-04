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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function createSquareConfig(config) {
    return __assign({}, config);
}
var square = createSquareConfig({
    color: 'red',
    name: 'Square name'
});
console.log('square=', square);
function createSquareConfig2(config) {
    return __assign({}, config);
}
var square2 = createSquareConfig2({
    color: 'red',
    name: 'Square name',
    colour: 'yellow'
});
console.log('square2=', square2);
//实现接口
var SearchFunc = function (source, subString) {
    return true;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var myArray1 = ['Bob', 'Fred'];
var myStr1 = myArray1[0];
var myAray2 = ['Bob', 'Fred'];
var myStr2 = myAray2[0];
console.log('myStr=', myStr);
console.log('myStr1=', myStr1);
console.log('myStr2=', myStr2);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
        return d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.log(1111111);
var square1 = {};
square1.color = 'blue';
square1.sideLength = 10;
function getCounter() {
    //返回是一个类 声明一个类
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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p43mir3osaHnsbvnmoTnuqbmnZ/vvIzlrp7pmYXnvJbor5HmiJBlczXmsqHmnInku6PnoIHlrZjlnKjnmoRcblxu5Y+v6YCJ5bGe5oCnXG7mjqXlj6Pph4znmoTlsZ7mgKfkuI3lhajpg73mmK/lv4XpnIDnmoTjgIIg5pyJ5Lqb5piv5Y+q5Zyo5p+Q5Lqb5p2h5Lu25LiL5a2Y5Zyo77yM5oiW6ICF5qC55pys5LiN5a2Y5Zyo44CCIFxu5Y+v6YCJ5bGe5oCn5Zyo5bqU55So4oCcb3B0aW9uIGJhZ3PigJ3mqKHlvI/ml7blvojluLjnlKjvvIxcbuWNs+e7meWHveaVsOS8oOWFpeeahOWPguaVsOWvueixoeS4reWPquaciemDqOWIhuWxnuaAp+i1i+WAvOS6huOAglxuKi9cbi8vIOWumuS5ieS4gOS4quWvueixoeeahOaOpeWPo1xuaW50ZXJmYWNlIElTcXVhcmVDb25maWcge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTcXVhcmVWYWx1ZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmVDb25maWcoY29uZmlnOiBJU3F1YXJlQ29uZmlnKTogSVNxdWFyZVZhbHVlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgfTtcbn1cblxubGV0IHNxdWFyZTogSVNxdWFyZVZhbHVlID0gY3JlYXRlU3F1YXJlQ29uZmlnKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgbmFtZTogJ1NxdWFyZSBuYW1lJyxcbn0pO1xuXG5jb25zb2xlLmxvZygnc3F1YXJlPScsIHNxdWFyZSk7XG5cbi8qXG7pop3lpJbnmoTlsZ7mgKfmo4Dmn6VcbuaIkeS7rOWcqOesrOS4gOS4quS+i+WtkOmHjOS9v+eUqOS6huaOpeWPo++8jFR5cGVTY3JpcHTorqnmiJHku6zkvKDlhaV7IHNpemU6IG51bWJlcjsgbGFiZWw6IHN0cmluZzsgfVxu5Yiw5LuF5pyf5pyb5b6X5YiweyBsYWJlbDogc3RyaW5nOyB955qE5Ye95pWw6YeM44CCIOaIkeS7rOW3sue7j+Wtpui/h+S6huWPr+mAieWxnuaAp++8jFxu5bm25LiU55+l6YGT5LuW5Lus5Zyo4oCcb3B0aW9uIGJhZ3PigJ3mqKHlvI/ph4zlvojmnInnlKjjgIJcbuazqOaEj+S8oOWFpWNyZWF0ZVNxdWFyZeeahOWPguaVsOaLvOWGmeS4umNvbG91cuiAjOS4jeaYr2NvbG9y44CCIOWcqEphdmFTY3JpcHTph4zvvIzov5nkvJrpu5jpu5jlnLDlpLHotKXjgIJcbiovXG5cbmludGVyZmFjZSBJU3F1YXJlQ29uZmlnMiB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55OyAvL+a3u+WKoOmineWkluWxnuaAp2NvbG91clxufVxuXG5pbnRlcmZhY2UgSVNxdWFyZVZhbHVlMiB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55OyAvL+a3u+WKoOmineWkluWxnuaAp2NvbG91clxufVxuXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmVDb25maWcyKGNvbmZpZzogSVNxdWFyZUNvbmZpZzIpOiBJU3F1YXJlVmFsdWUyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgfTtcbn1cblxubGV0IHNxdWFyZTI6IElTcXVhcmVWYWx1ZTIgPSBjcmVhdGVTcXVhcmVDb25maWcyKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgbmFtZTogJ1NxdWFyZSBuYW1lJyxcbiAgICBjb2xvdXI6ICd5ZWxsb3cnLFxufSk7XG5cbmNvbnNvbGUubG9nKCdzcXVhcmUyPScsIHNxdWFyZTIpO1xuXG4vKlxu5Ye95pWw57G75Z6LXG7mjqXlj6Pog73lpJ/mj4/ov7BKYXZhU2NyaXB05Lit5a+56LGh5oul5pyJ55qE5ZCE56eN5ZCE5qC355qE5aSW5b2i44CCXG7pmaTkuobmj4/ov7DluKbmnInlsZ7mgKfnmoTmma7pgJrlr7nosaHlpJbvvIzmjqXlj6PkuZ/lj6/ku6Xmj4/ov7Dlh73mlbDnsbvlnovjgIJcbuS4uuS6huS9v+eUqOaOpeWPo+ihqOekuuWHveaVsOexu+Wei++8jOaIkeS7rOmcgOimgee7meaOpeWPo+WumuS5ieS4gOS4quiwg+eUqOetvuWQjeOAgiBcbuWug+WwseWDj+aYr+S4gOS4quWPquacieWPguaVsOWIl+ihqOWSjOi/lOWbnuWAvOexu+Wei+eahOWHveaVsOWumuS5ieOAglxu5Y+C5pWw5YiX6KGo6YeM55qE5q+P5Liq5Y+C5pWw6YO96ZyA6KaB5ZCN5a2X5ZKM57G75Z6L44CCXG5cbiovXG4vLyDlrprkuYnkuIDkuKrlh73mlbDnmoTmjqXlj6NcbmludGVyZmFjZSBJU2VhcmNoRnVuYyB7XG4gICAgKHNvdXJjZTogc3RyaW5nLCBzdWJTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbi8v5a6e546w5o6l5Y+jXG5jb25zdCBTZWFyY2hGdW5jOiBJU2VhcmNoRnVuYyA9IGZ1bmN0aW9uIChcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICBzdWJTdHJpbmc6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vKlxu5Y+v57Si5byV55qE57G75Z6LXG7kuI7kvb/nlKjmjqXlj6Pmj4/ov7Dlh73mlbDnsbvlnovlt67kuI3lpJrvvIzmiJHku6zkuZ/lj6/ku6Xmj4/ov7DpgqPkupvog73lpJ/igJzpgJrov4fntKLlvJXlvpfliLDigJ3nmoTnsbvlnovvvIxcbuavlOWmgmFbMTBd5oiWYWdlTWFwW1wiZGFuaWVsXCJd44CCIOWPr+e0ouW8leexu+Wei+WFt+acieS4gOS4qiDntKLlvJXnrb7lkI3vvIxcbuWug+aPj+i/sOS6huWvueixoee0ouW8leeahOexu+Wei++8jOi/mOacieebuOW6lOeahOe0ouW8lei/lOWbnuWAvOexu+Wei+OAglxu6K6p5oiR5Lus55yL5LiA5Liq5L6L5a2Q77yaXG4qL1xuXG5pbnRlcmZhY2UgU3RyaW5nQXJyYXkge1xuICAgIFtpbmRleDogbnVtYmVyXTogc3RyaW5nO1xufVxubGV0IG15QXJyYXk6IFN0cmluZ0FycmF5O1xubXlBcnJheSA9IFsnQm9iJywgJ0ZyZWQnXTtcbmxldCBteVN0cjogc3RyaW5nID0gbXlBcnJheVswXTtcblxubGV0IG15QXJyYXkxOiBzdHJpbmdbXSA9IFsnQm9iJywgJ0ZyZWQnXTtcbmxldCBteVN0cjE6IHN0cmluZyA9IG15QXJyYXkxWzBdO1xuXG5sZXQgbXlBcmF5MjogQXJyYXk8c3RyaW5nPiA9IFsnQm9iJywgJ0ZyZWQnXTtcbmxldCBteVN0cjI6IHN0cmluZyA9IG15QXJheTJbMF07XG5cbmNvbnNvbGUubG9nKCdteVN0cj0nLCBteVN0cik7XG5jb25zb2xlLmxvZygnbXlTdHIxPScsIG15U3RyMSk7XG5jb25zb2xlLmxvZygnbXlTdHIyPScsIG15U3RyMik7XG5cbi8qXG5cbuexu+exu+Wei+aOpeWPo1xuXG7kuI5DI+aIlkphdmHph4zmjqXlj6PnmoTln7rmnKzkvZznlKjkuIDmoLfvvIxcblR5cGVTY3JpcHTkuZ/og73lpJ/nlKjlroPmnaXmmI7noa7nmoTlvLrliLbkuIDkuKrnsbvljrvnrKblkIjmn5Dnp43lpZHnuqbjgIJcblxu5o6l5Y+j5o+P6L+w5LqG57G755qE5YWs5YWx6YOo5YiG77yM6ICM5LiN5piv5YWs5YWx5ZKM56eB5pyJ5Lik6YOo5YiG44CCIOWug+S4jeS8muW4ruS9oOajgOafpeexu+aYr+WQpuWFt+acieafkOS6m+engeacieaIkOWRmOOAglxuKi9cbi8v5a6a5LmJ5LiA5Liq57G755qE5o6l5Y+jXG5pbnRlcmZhY2UgQ2xvY2tJbnRlcmZhY2UwIHtcbiAgICBjdXJyZW50VGltZTogRGF0ZTtcbiAgICBzZXRUaW1lKGQ6IERhdGUpOiBEYXRlO1xufVxuXG5jbGFzcyBDbG9jayBpbXBsZW1lbnRzIENsb2NrSW50ZXJmYWNlMCB7XG4gICAgY3VycmVudFRpbWU6IERhdGU7XG4gICAgc2V0VGltZShkOiBEYXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBkO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoaDogbnVtYmVyLCBtOiBudW1iZXIpIHt9XG59XG5cbi8qXG7nsbvpnZnmgIHpg6jliIbkuI7lrp7kvovpg6jliIbnmoTljLrliKtcbuW9k+S9oOaTjeS9nOexu+WSjOaOpeWPo+eahOaXtuWAme+8jOS9oOimgeefpemBk+exu+aYr+WFt+acieS4pOS4quexu+Wei+eahO+8mlxu6Z2Z5oCB6YOo5YiG55qE57G75Z6L5ZKM5a6e5L6L55qE57G75Z6L44CCXG4g5L2g5Lya5rOo5oSP5Yiw77yM5b2T5L2g55So5p6E6YCg5Zmo562+5ZCN5Y675a6a5LmJ5LiA5Liq5o6l5Y+j5bm26K+V5Zu+5a6a5LmJ5LiA5Liq57G75Y675a6e546w6L+Z5Liq5o6l5Y+j5pe25Lya5b6X5Yiw5LiA5Liq6ZSZ6K+v77yaXG4qL1xuXG5pbnRlcmZhY2UgQ2xvY2tDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogQ2xvY2tJbnRlcmZhY2U7XG59XG5pbnRlcmZhY2UgQ2xvY2tJbnRlcmZhY2Uge1xuICAgIHRpY2soKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xvY2soXG4gICAgY3RvcjogQ2xvY2tDb25zdHJ1Y3RvcixcbiAgICBob3VyOiBudW1iZXIsXG4gICAgbWludXRlOiBudW1iZXJcbik6IENsb2NrSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gbmV3IGN0b3IoaG91ciwgbWludXRlKTtcbn1cblxuY2xhc3MgRGlnaXRhbENsb2NrIGltcGxlbWVudHMgQ2xvY2tJbnRlcmZhY2Uge1xuICAgIGNvbnN0cnVjdG9yKGg6IG51bWJlciwgbTogbnVtYmVyKSB7fVxuICAgIHRpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiZWVwIGJlZXAnKTtcbiAgICB9XG59XG5jbGFzcyBBbmFsb2dDbG9jayBpbXBsZW1lbnRzIENsb2NrSW50ZXJmYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIG06IG51bWJlcikge31cbiAgICB0aWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGljayB0b2NrJyk7XG4gICAgfVxufVxuXG5sZXQgZGlnaXRhbCA9IGNyZWF0ZUNsb2NrKERpZ2l0YWxDbG9jaywgMTIsIDE3KTtcbmxldCBhbmFsb2cgPSBjcmVhdGVDbG9jayhBbmFsb2dDbG9jaywgNywgMzIpO1xuXG4vKlxu57un5om/5o6l5Y+jXG7lkoznsbvkuIDmoLfvvIzmjqXlj6PkuZ/lj6/ku6Xnm7jkupLnu6fmib/jgIIg6L+Z6K6p5oiR5Lus6IO95aSf5LuO5LiA5Liq5o6l5Y+j6YeM5aSN5Yi25oiQ5ZGY5Yiw5Y+m5LiA5Liq5o6l5Y+j6YeM77yMXG7lj6/ku6Xmm7TngbXmtLvlnLDlsIbmjqXlj6PliIblibLliLDlj6/ph43nlKjnmoTmqKHlnZfph4zjgIJcbiovXG5cbmludGVyZmFjZSBTaGFwZSB7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNxdWFyZTEgZXh0ZW5kcyBTaGFwZSB7XG4gICAgc2lkZUxlbmd0aDogbnVtYmVyO1xufVxuXG5jb25zb2xlLmxvZygxMTExMTExKTtcbmxldCBzcXVhcmUxID0gPFNxdWFyZTE+e307XG5zcXVhcmUxLmNvbG9yID0gJ2JsdWUnO1xuc3F1YXJlMS5zaWRlTGVuZ3RoID0gMTA7XG5cbi8qXG7mt7flkIjnsbvlnotcbuWFiOWJjeaIkeS7rOaPkOi/h++8jOaOpeWPo+iDveWkn+aPj+i/sEphdmFTY3JpcHTph4zkuLDlr4znmoTnsbvlnovjgIJcbuWboOS4ukphdmFTY3JpcHTlhbbliqjmgIHngbXmtLvnmoTnibnngrnvvIzmnInml7bkvaDkvJrluIzmnJvkuIDkuKrlr7nosaHlj6/ku6XlkIzml7blhbfmnInkuIrpnaLmj5DliLDnmoTlpJrnp43nsbvlnovjgIJcblxu5LiA5Liq5L6L5a2Q5bCx5piv77yM5LiA5Liq5a+56LGh5Y+v5Lul5ZCM5pe25YGa5Li65Ye95pWw5ZKM5a+56LGh5L2/55So77yM5bm25bim5pyJ6aKd5aSW55qE5bGe5oCn44CCXG4qL1xuXG5pbnRlcmZhY2UgQ291bnRlciB7XG4gICAgKHN0YXJ0OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICByZXNldCgpOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudGVyKCk6IENvdW50ZXIge1xuICAgIC8v6L+U5Zue5piv5LiA5Liq57G7IOWjsOaYjuS4gOS4quexu1xuICAgIGxldCBjb3VudGVyOiBDb3VudGVyID0gPENvdW50ZXI+ZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIpOiB2b2lkIHt9O1xuXG4gICAgY291bnRlci5pbnRlcnZhbCA9IDEyMztcbiAgICBjb3VudGVyLnJlc2V0ID0gZnVuY3Rpb24gKCkge307XG4gICAgcmV0dXJuIGNvdW50ZXI7XG59XG5sZXQgYyA9IGdldENvdW50ZXIoKTtcbmMoMTApO1xuYy5yZXNldCgpO1xuYy5pbnRlcnZhbCA9IDUuMDtcblxuY29uc29sZS5sb2coJ2M9PT09PT09JywgYyk7XG5cbi8qXG7mjqXlj6Pnu6fmib/nsbtcbuW9k+aOpeWPo+e7p+aJv+S6huS4gOS4quexu+exu+Wei+aXtu+8jOWug+S8mue7p+aJv+exu+eahOaIkOWRmOS9huS4jeWMheaLrOWFtuWunueOsOOAglxu5bCx5aW95YOP5o6l5Y+j5aOw5piO5LqG5omA5pyJ57G75Lit5a2Y5Zyo55qE5oiQ5ZGY77yM5L2G5bm25rKh5pyJ5o+Q5L6b5YW35L2T5a6e546w5LiA5qC344CCXG7mjqXlj6PlkIzmoLfkvJrnu6fmib/liLDnsbvnmoRwcml2YXRl5ZKMcHJvdGVjdGVk5oiQ5ZGY44CCXG7ov5nmhI/lkbPnnYDlvZPkvaDliJvlu7rkuobkuIDkuKrmjqXlj6Pnu6fmib/kuobkuIDkuKrmi6XmnInnp4HmnInmiJblj5fkv53miqTnmoTmiJDlkZjnmoTnsbvml7bvvIxcbui/meS4quaOpeWPo+exu+Wei+WPquiDveiiq+i/meS4quexu+aIluWFtuWtkOexu+aJgOWunueOsO+8iGltcGxlbWVudO+8ieOAglxuXG7lvZPkvaDmnInkuIDkuKrlup7lpKfnmoTnu6fmib/nu5PmnoTml7bov5nlvojmnInnlKjvvIzkvYbopoHmjIflh7rnmoTmmK/kvaDnmoTku6PnoIHlj6rlnKjlrZDnsbvmi6XmnInnibnlrprlsZ7mgKfml7botbfkvZznlKjjgIIg6L+Z5Liq5a2Q57G76Zmk5LqG57un5om/6Iez5Z+657G75aSW5LiO5Z+657G75rKh5pyJ5Lu75L2V5YWz57O744CCIOS+i++8mlxuKi9cblxuY2xhc3MgQ29udHJvbCB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogYW55O1xufVxuXG5pbnRlcmZhY2UgU2VsZWN0YWJsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcbiAgICBzZWxlY3QoKTogdm9pZDtcbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29udHJvbCBpbXBsZW1lbnRzIFNlbGVjdGFibGVDb250cm9sIHtcbiAgICBzZWxlY3QoKSB7IH1cbn1cblxuY2xhc3MgVGV4dEJveCBleHRlbmRzIENvbnRyb2wge1xuICAgIHNlbGVjdCgpIHsgfVxufVxuXG4vLyDplJnor6/vvJrigJxJbWFnZeKAneexu+Wei+e8uuWwkeKAnHN0YXRl4oCd5bGe5oCn44CCXG4vLyBjbGFzcyBJbWFnZSBpbXBsZW1lbnRzIFNlbGVjdGFibGVDb250cm9sIHtcbi8vICAgICBzZWxlY3QoKSB7IH1cbi8vIH1cblxuY2xhc3MgTG9jYXRpb24ge1xuXG59XG5cblxuZXhwb3J0IHt9O1xuIl19
