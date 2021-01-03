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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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5Y+j5piv5LiA56eN5oq96LGh57G755qE57qm5p2f77yM5a6e6ZmF57yW6K+R5oiQZXM15rKh5pyJ5Luj56CB5a2Y5Zyo55qEXHJcblxyXG7lj6/pgInlsZ7mgKdcclxu5o6l5Y+j6YeM55qE5bGe5oCn5LiN5YWo6YO95piv5b+F6ZyA55qE44CCIOacieS6m+aYr+WPquWcqOafkOS6m+adoeS7tuS4i+WtmOWcqO+8jOaIluiAheagueacrOS4jeWtmOWcqOOAgiBcclxu5Y+v6YCJ5bGe5oCn5Zyo5bqU55So4oCcb3B0aW9uIGJhZ3PigJ3mqKHlvI/ml7blvojluLjnlKjvvIxcclxu5Y2z57uZ5Ye95pWw5Lyg5YWl55qE5Y+C5pWw5a+56LGh5Lit5Y+q5pyJ6YOo5YiG5bGe5oCn6LWL5YC85LqG44CCXHJcbiovXHJcbi8vIOWumuS5ieS4gOS4quWvueixoeeahOaOpeWPo1xyXG5pbnRlcmZhY2UgSVNxdWFyZUNvbmZpZyB7XHJcbiAgICBjb2xvcj86IHN0cmluZztcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNxdWFyZVZhbHVlIHtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNxdWFyZUNvbmZpZyhjb25maWc6IElTcXVhcmVDb25maWcpOiBJU3F1YXJlVmFsdWUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgc3F1YXJlOiBJU3F1YXJlVmFsdWUgPSBjcmVhdGVTcXVhcmVDb25maWcoe1xyXG4gICAgY29sb3I6ICdyZWQnLFxyXG4gICAgbmFtZTogJ1NxdWFyZSBuYW1lJyxcclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnc3F1YXJlPScsIHNxdWFyZSk7XHJcblxyXG4vKlxyXG7pop3lpJbnmoTlsZ7mgKfmo4Dmn6Vcclxu5oiR5Lus5Zyo56ys5LiA5Liq5L6L5a2Q6YeM5L2/55So5LqG5o6l5Y+j77yMVHlwZVNjcmlwdOiuqeaIkeS7rOS8oOWFpXsgc2l6ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nOyB9XHJcbuWIsOS7heacn+acm+W+l+WIsHsgbGFiZWw6IHN0cmluZzsgfeeahOWHveaVsOmHjOOAgiDmiJHku6zlt7Lnu4/lrabov4fkuoblj6/pgInlsZ7mgKfvvIxcclxu5bm25LiU55+l6YGT5LuW5Lus5Zyo4oCcb3B0aW9uIGJhZ3PigJ3mqKHlvI/ph4zlvojmnInnlKjjgIJcclxu5rOo5oSP5Lyg5YWlY3JlYXRlU3F1YXJl55qE5Y+C5pWw5ou85YaZ5Li6Y29sb3Vy6ICM5LiN5pivY29sb3LjgIIg5ZyoSmF2YVNjcmlwdOmHjO+8jOi/meS8mum7mOm7mOWcsOWksei0peOAglxyXG4qL1xyXG5cclxuaW50ZXJmYWNlIElTcXVhcmVDb25maWcyIHtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTsgLy/mt7vliqDpop3lpJblsZ7mgKdjb2xvdXJcclxufVxyXG5cclxuaW50ZXJmYWNlIElTcXVhcmVWYWx1ZTIge1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55OyAvL+a3u+WKoOmineWkluWxnuaAp2NvbG91clxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmVDb25maWcyKGNvbmZpZzogSVNxdWFyZUNvbmZpZzIpOiBJU3F1YXJlVmFsdWUyIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgfTtcclxufVxyXG5cclxubGV0IHNxdWFyZTI6IElTcXVhcmVWYWx1ZTIgPSBjcmVhdGVTcXVhcmVDb25maWcyKHtcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICAgIG5hbWU6ICdTcXVhcmUgbmFtZScsXHJcbiAgICBjb2xvdXI6ICd5ZWxsb3cnLFxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKCdzcXVhcmUyPScsIHNxdWFyZTIpO1xyXG5cclxuLypcclxu5Ye95pWw57G75Z6LXHJcbuaOpeWPo+iDveWkn+aPj+i/sEphdmFTY3JpcHTkuK3lr7nosaHmi6XmnInnmoTlkITnp43lkITmoLfnmoTlpJblvaLjgIJcclxu6Zmk5LqG5o+P6L+w5bim5pyJ5bGe5oCn55qE5pmu6YCa5a+56LGh5aSW77yM5o6l5Y+j5Lmf5Y+v5Lul5o+P6L+w5Ye95pWw57G75Z6L44CCXHJcbuS4uuS6huS9v+eUqOaOpeWPo+ihqOekuuWHveaVsOexu+Wei++8jOaIkeS7rOmcgOimgee7meaOpeWPo+WumuS5ieS4gOS4quiwg+eUqOetvuWQjeOAgiBcclxu5a6D5bCx5YOP5piv5LiA5Liq5Y+q5pyJ5Y+C5pWw5YiX6KGo5ZKM6L+U5Zue5YC857G75Z6L55qE5Ye95pWw5a6a5LmJ44CCXHJcbuWPguaVsOWIl+ihqOmHjOeahOavj+S4quWPguaVsOmDvemcgOimgeWQjeWtl+WSjOexu+Wei+OAglxyXG5cclxuKi9cclxuLy8g5a6a5LmJ5LiA5Liq5Ye95pWw55qE5o6l5Y+jXHJcbmludGVyZmFjZSBJU2VhcmNoRnVuYyB7XHJcbiAgICAoc291cmNlOiBzdHJpbmcsIHN1YlN0cmluZzogc3RyaW5nKTogYm9vbGVhbjtcclxufVxyXG5cclxuLy/lrp7njrDmjqXlj6NcclxuY29uc3QgU2VhcmNoRnVuYzogSVNlYXJjaEZ1bmMgPSBmdW5jdGlvbiAoXHJcbiAgICBzb3VyY2U6IHN0cmluZyxcclxuICAgIHN1YlN0cmluZzogc3RyaW5nXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKlxyXG7lj6/ntKLlvJXnmoTnsbvlnotcclxu5LiO5L2/55So5o6l5Y+j5o+P6L+w5Ye95pWw57G75Z6L5beu5LiN5aSa77yM5oiR5Lus5Lmf5Y+v5Lul5o+P6L+w6YKj5Lqb6IO95aSf4oCc6YCa6L+H57Si5byV5b6X5Yiw4oCd55qE57G75Z6L77yMXHJcbuavlOWmgmFbMTBd5oiWYWdlTWFwW1wiZGFuaWVsXCJd44CCIOWPr+e0ouW8leexu+Wei+WFt+acieS4gOS4qiDntKLlvJXnrb7lkI3vvIxcclxu5a6D5o+P6L+w5LqG5a+56LGh57Si5byV55qE57G75Z6L77yM6L+Y5pyJ55u45bqU55qE57Si5byV6L+U5Zue5YC857G75Z6L44CCXHJcbuiuqeaIkeS7rOeci+S4gOS4quS+i+WtkO+8mlxyXG4qL1xyXG5cclxuaW50ZXJmYWNlIFN0cmluZ0FycmF5IHtcclxuICAgIFtpbmRleDogbnVtYmVyXTogc3RyaW5nO1xyXG59XHJcbmxldCBteUFycmF5OiBTdHJpbmdBcnJheTtcclxubXlBcnJheSA9IFsnQm9iJywgJ0ZyZWQnXTtcclxubGV0IG15U3RyOiBzdHJpbmcgPSBteUFycmF5WzBdO1xyXG5cclxubGV0IG15QXJyYXkxOiBzdHJpbmdbXSA9IFsnQm9iJywgJ0ZyZWQnXTtcclxubGV0IG15U3RyMTogc3RyaW5nID0gbXlBcnJheTFbMF07XHJcblxyXG5sZXQgbXlBcmF5MjogQXJyYXk8c3RyaW5nPiA9IFsnQm9iJywgJ0ZyZWQnXTtcclxubGV0IG15U3RyMjogc3RyaW5nID0gbXlBcmF5MlswXTtcclxuXHJcbmNvbnNvbGUubG9nKCdteVN0cj0nLCBteVN0cik7XHJcbmNvbnNvbGUubG9nKCdteVN0cjE9JywgbXlTdHIxKTtcclxuY29uc29sZS5sb2coJ215U3RyMj0nLCBteVN0cjIpO1xyXG5cclxuLypcclxuXHJcbuexu+exu+Wei+aOpeWPo1xyXG5cclxu5LiOQyPmiJZKYXZh6YeM5o6l5Y+j55qE5Z+65pys5L2c55So5LiA5qC377yMXHJcblR5cGVTY3JpcHTkuZ/og73lpJ/nlKjlroPmnaXmmI7noa7nmoTlvLrliLbkuIDkuKrnsbvljrvnrKblkIjmn5Dnp43lpZHnuqbjgIJcclxuXHJcbuaOpeWPo+aPj+i/sOS6huexu+eahOWFrOWFsemDqOWIhu+8jOiAjOS4jeaYr+WFrOWFseWSjOengeacieS4pOmDqOWIhuOAgiDlroPkuI3kvJrluK7kvaDmo4Dmn6XnsbvmmK/lkKblhbfmnInmn5Dkupvnp4HmnInmiJDlkZjjgIJcclxuKi9cclxuLy/lrprkuYnkuIDkuKrnsbvnmoTmjqXlj6NcclxuaW50ZXJmYWNlIENsb2NrSW50ZXJmYWNlMCB7XHJcbiAgICBjdXJyZW50VGltZTogRGF0ZTtcclxuICAgIHNldFRpbWUoZDogRGF0ZSk6IERhdGU7XHJcbn1cclxuXHJcbmNsYXNzIENsb2NrIGltcGxlbWVudHMgQ2xvY2tJbnRlcmZhY2UwIHtcclxuICAgIGN1cnJlbnRUaW1lOiBEYXRlO1xyXG4gICAgc2V0VGltZShkOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IGQ7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIG06IG51bWJlcikge31cclxufVxyXG5cclxuLypcclxu57G76Z2Z5oCB6YOo5YiG5LiO5a6e5L6L6YOo5YiG55qE5Yy65YirXHJcbuW9k+S9oOaTjeS9nOexu+WSjOaOpeWPo+eahOaXtuWAme+8jOS9oOimgeefpemBk+exu+aYr+WFt+acieS4pOS4quexu+Wei+eahO+8mlxyXG7pnZnmgIHpg6jliIbnmoTnsbvlnovlkozlrp7kvovnmoTnsbvlnovjgIJcclxuIOS9oOS8muazqOaEj+WIsO+8jOW9k+S9oOeUqOaehOmAoOWZqOetvuWQjeWOu+WumuS5ieS4gOS4quaOpeWPo+W5tuivleWbvuWumuS5ieS4gOS4quexu+WOu+WunueOsOi/meS4quaOpeWPo+aXtuS8muW+l+WIsOS4gOS4qumUmeivr++8mlxyXG4qL1xyXG5cclxuaW50ZXJmYWNlIENsb2NrQ29uc3RydWN0b3Ige1xyXG4gICAgbmV3IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogQ2xvY2tJbnRlcmZhY2U7XHJcbn1cclxuaW50ZXJmYWNlIENsb2NrSW50ZXJmYWNlIHtcclxuICAgIHRpY2soKTogdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xvY2soXHJcbiAgICBjdG9yOiBDbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgaG91cjogbnVtYmVyLFxyXG4gICAgbWludXRlOiBudW1iZXJcclxuKTogQ2xvY2tJbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIG5ldyBjdG9yKGhvdXIsIG1pbnV0ZSk7XHJcbn1cclxuXHJcbmNsYXNzIERpZ2l0YWxDbG9jayBpbXBsZW1lbnRzIENsb2NrSW50ZXJmYWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGg6IG51bWJlciwgbTogbnVtYmVyKSB7fVxyXG4gICAgdGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmVlcCBiZWVwJyk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQW5hbG9nQ2xvY2sgaW1wbGVtZW50cyBDbG9ja0ludGVyZmFjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIG06IG51bWJlcikge31cclxuICAgIHRpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpY2sgdG9jaycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgZGlnaXRhbCA9IGNyZWF0ZUNsb2NrKERpZ2l0YWxDbG9jaywgMTIsIDE3KTtcclxubGV0IGFuYWxvZyA9IGNyZWF0ZUNsb2NrKEFuYWxvZ0Nsb2NrLCA3LCAzMik7XHJcblxyXG4vKlxyXG7nu6fmib/mjqXlj6Ncclxu5ZKM57G75LiA5qC377yM5o6l5Y+j5Lmf5Y+v5Lul55u45LqS57un5om/44CCIOi/meiuqeaIkeS7rOiDveWkn+S7juS4gOS4quaOpeWPo+mHjOWkjeWItuaIkOWRmOWIsOWPpuS4gOS4quaOpeWPo+mHjO+8jFxyXG7lj6/ku6Xmm7TngbXmtLvlnLDlsIbmjqXlj6PliIblibLliLDlj6/ph43nlKjnmoTmqKHlnZfph4zjgIJcclxuKi9cclxuXHJcbmludGVyZmFjZSBTaGFwZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3F1YXJlMSBleHRlbmRzIFNoYXBlIHtcclxuICAgIHNpZGVMZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc29sZS5sb2coMTExMTExMSk7XHJcbmxldCBzcXVhcmUxID0gPFNxdWFyZTE+e307XHJcbnNxdWFyZTEuY29sb3IgPSAnYmx1ZSc7XHJcbnNxdWFyZTEuc2lkZUxlbmd0aCA9IDEwO1xyXG5cclxuLypcclxu5re35ZCI57G75Z6LXHJcbuWFiOWJjeaIkeS7rOaPkOi/h++8jOaOpeWPo+iDveWkn+aPj+i/sEphdmFTY3JpcHTph4zkuLDlr4znmoTnsbvlnovjgIJcclxu5Zug5Li6SmF2YVNjcmlwdOWFtuWKqOaAgeeBtea0u+eahOeJueeCue+8jOacieaXtuS9oOS8muW4jOacm+S4gOS4quWvueixoeWPr+S7peWQjOaXtuWFt+acieS4iumdouaPkOWIsOeahOWkmuenjeexu+Wei+OAglxyXG5cclxu5LiA5Liq5L6L5a2Q5bCx5piv77yM5LiA5Liq5a+56LGh5Y+v5Lul5ZCM5pe25YGa5Li65Ye95pWw5ZKM5a+56LGh5L2/55So77yM5bm25bim5pyJ6aKd5aSW55qE5bGe5oCn44CCXHJcbiovXHJcblxyXG5pbnRlcmZhY2UgQ291bnRlciB7XHJcbiAgICAoc3RhcnQ6IG51bWJlcik6IHN0cmluZztcclxuICAgIGludGVydmFsOiBudW1iZXI7XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb3VudGVyKCk6IENvdW50ZXIge1xyXG4gICAgLy/ov5Tlm57mmK/kuIDkuKrnsbsg5aOw5piO5LiA5Liq57G7XHJcbiAgICBsZXQgY291bnRlcjogQ291bnRlciA9IDxDb3VudGVyPmZ1bmN0aW9uIChzdGFydDogbnVtYmVyKTogdm9pZCB7fTtcclxuXHJcbiAgICBjb3VudGVyLmludGVydmFsID0gMTIzO1xyXG4gICAgY291bnRlci5yZXNldCA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxubGV0IGMgPSBnZXRDb3VudGVyKCk7XHJcbmMoMTApO1xyXG5jLnJlc2V0KCk7XHJcbmMuaW50ZXJ2YWwgPSA1LjA7XHJcblxyXG5jb25zb2xlLmxvZygnYz09PT09PT0nLCBjKTtcclxuXHJcbi8qXHJcbuaOpeWPo+e7p+aJv+exu1xyXG7lvZPmjqXlj6Pnu6fmib/kuobkuIDkuKrnsbvnsbvlnovml7bvvIzlroPkvJrnu6fmib/nsbvnmoTmiJDlkZjkvYbkuI3ljIXmi6zlhbblrp7njrDjgIJcclxu5bCx5aW95YOP5o6l5Y+j5aOw5piO5LqG5omA5pyJ57G75Lit5a2Y5Zyo55qE5oiQ5ZGY77yM5L2G5bm25rKh5pyJ5o+Q5L6b5YW35L2T5a6e546w5LiA5qC344CCXHJcbuaOpeWPo+WQjOagt+S8mue7p+aJv+WIsOexu+eahHByaXZhdGXlkoxwcm90ZWN0ZWTmiJDlkZjjgIJcclxu6L+Z5oSP5ZGz552A5b2T5L2g5Yib5bu65LqG5LiA5Liq5o6l5Y+j57un5om/5LqG5LiA5Liq5oul5pyJ56eB5pyJ5oiW5Y+X5L+d5oqk55qE5oiQ5ZGY55qE57G75pe277yMXHJcbui/meS4quaOpeWPo+exu+Wei+WPquiDveiiq+i/meS4quexu+aIluWFtuWtkOexu+aJgOWunueOsO+8iGltcGxlbWVudO+8ieOAglxyXG5cclxu5b2T5L2g5pyJ5LiA5Liq5bqe5aSn55qE57un5om/57uT5p6E5pe26L+Z5b6I5pyJ55So77yM5L2G6KaB5oyH5Ye655qE5piv5L2g55qE5Luj56CB5Y+q5Zyo5a2Q57G75oul5pyJ54m55a6a5bGe5oCn5pe26LW35L2c55So44CCIOi/meS4quWtkOexu+mZpOS6hue7p+aJv+iHs+Wfuuexu+WkluS4juWfuuexu+ayoeacieS7u+S9leWFs+ezu+OAgiDkvovvvJpcclxuKi9cclxuXHJcbmNsYXNzIENvbnRyb2wge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0YWJsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcclxuICAgIHNlbGVjdCgpOiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb250cm9sIGltcGxlbWVudHMgU2VsZWN0YWJsZUNvbnRyb2wge1xyXG4gICAgc2VsZWN0KCkgeyB9XHJcbn1cclxuXHJcbmNsYXNzIFRleHRCb3ggZXh0ZW5kcyBDb250cm9sIHtcclxuICAgIHNlbGVjdCgpIHsgfVxyXG59XHJcblxyXG4vLyDplJnor6/vvJrigJxJbWFnZeKAneexu+Wei+e8uuWwkeKAnHN0YXRl4oCd5bGe5oCn44CCXHJcbi8vIGNsYXNzIEltYWdlIGltcGxlbWVudHMgU2VsZWN0YWJsZUNvbnRyb2wge1xyXG4vLyAgICAgc2VsZWN0KCkgeyB9XHJcbi8vIH1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==
