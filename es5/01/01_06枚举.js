/*
枚举
    使用枚举我们可以定义一些带名字的常量。
    使用枚举可以清晰地表达意图或创建一组有区别的用例。
    TypeScript支持数字的和基于字符串的枚举。
*/
/*
数字枚举
首先我们看看数字枚举，如果你使用过其它编程语言应该会很熟悉。
如上，我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。
换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log('Direction=', Direction);
/*
如上，我们定义了一个数字枚举， Up使用初始化为 1。
其余的成员会从 1开始自动增长。
换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
我们还可以完全不使用初始化器：

*/
//使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
var Response1;
(function (Response1) {
    Response1[Response1["No"] = 0] = "No";
    Response1[Response1["Yes"] = 1] = "Yes";
})(Response1 || (Response1 = {}));
function respond(recipient, message) {
    // ...
}
respond("Princess Caroline", Response1.Yes);
/*
数字枚举可以被混入到 计算过的和常量成员（如下所示）。
简短地说，不带初始化器的枚举或者被放在第一的位置，
或者被放在使用了数字常量或其它常量初始化了的枚举后面。
换句话说，下面的情况是不被允许的：
*/
// enum E {
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }
/*
字符串枚举
字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，
每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
*/
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
/*
由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。
换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，
这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），
字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
*/
/*
异构枚举（Heterogeneous enums）
从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
*/
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLzAxXzA25p6a5Li+LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUtFO0FBRUY7Ozs7O0VBS0U7QUFFRCxJQUFLLFNBS0o7QUFMRCxXQUFLLFNBQVM7SUFDVixxQ0FBTSxDQUFBO0lBQ04seUNBQUksQ0FBQTtJQUNKLHlDQUFJLENBQUE7SUFDSiwyQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxTQUFTLENBQUMsQ0FBQTtBQUVwQzs7Ozs7O0VBTUU7QUFFRix1Q0FBdUM7QUFDdkMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YscUNBQU0sQ0FBQTtJQUNOLHVDQUFPLENBQUE7QUFDWCxDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUVELFNBQVMsT0FBTyxDQUFDLFNBQWlCLEVBQUUsT0FBa0I7SUFDbEQsTUFBTTtBQUNWLENBQUM7QUFFRCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRzNDOzs7OztFQUtFO0FBRUYsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixnRkFBZ0Y7QUFDaEYsSUFBSTtBQUVKOzs7O0VBSUU7QUFFRixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCx1QkFBUyxDQUFBO0lBQ1QsMkJBQWEsQ0FBQTtJQUNiLDJCQUFhLENBQUE7SUFDYiw2QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBRUQ7Ozs7O0VBS0U7QUFFRjs7O0VBR0U7QUFFRixJQUFLLDRCQUdKO0FBSEQsV0FBSyw0QkFBNEI7SUFDN0IsMkVBQU0sQ0FBQTtJQUNOLDJDQUFXLENBQUE7QUFDZixDQUFDLEVBSEksNEJBQTRCLEtBQTVCLDRCQUE0QixRQUdoQyIsImZpbGUiOiIwMS8wMV8wNuaemuS4vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaemuS4vlxyXG4gICAg5L2/55So5p6a5Li+5oiR5Lus5Y+v5Lul5a6a5LmJ5LiA5Lqb5bim5ZCN5a2X55qE5bi46YeP44CCIFxyXG4gICAg5L2/55So5p6a5Li+5Y+v5Lul5riF5pmw5Zyw6KGo6L6+5oSP5Zu+5oiW5Yib5bu65LiA57uE5pyJ5Yy65Yir55qE55So5L6L44CCXHJcbiAgICBUeXBlU2NyaXB05pSv5oyB5pWw5a2X55qE5ZKM5Z+65LqO5a2X56ym5Liy55qE5p6a5Li+44CCXHJcbiovXHJcblxyXG4vKlxyXG7mlbDlrZfmnprkuL5cclxu6aaW5YWI5oiR5Lus55yL55yL5pWw5a2X5p6a5Li+77yM5aaC5p6c5L2g5L2/55So6L+H5YW25a6D57yW56iL6K+t6KiA5bqU6K+l5Lya5b6I54af5oKJ44CCXHJcbuWmguS4iu+8jOaIkeS7rOWumuS5ieS6huS4gOS4quaVsOWtl+aemuS4vu+8jCBVcOS9v+eUqOWIneWni+WMluS4uiAx44CCIOWFtuS9meeahOaIkOWRmOS8muS7jiAx5byA5aeL6Ieq5Yqo5aKe6ZW/44CCXHJcbuaNouWPpeivneivtO+8jCBEaXJlY3Rpb24uVXDnmoTlgLzkuLogMe+8jCBEb3du5Li6IDLvvIwgTGVmdOS4uiAz77yMIFJpZ2h05Li6IDTjgIJcclxuKi9cclxuXHJcbiBlbnVtIERpcmVjdGlvbntcclxuICAgICBVcCA9IDEsXHJcbiAgICAgRG93bixcclxuICAgICBMZWZ0LFxyXG4gICAgIFJpZ2h0XHJcbiB9XHJcblxyXG4gY29uc29sZS5sb2coJ0RpcmVjdGlvbj0nLERpcmVjdGlvbilcclxuXHJcbi8qXHJcbuWmguS4iu+8jOaIkeS7rOWumuS5ieS6huS4gOS4quaVsOWtl+aemuS4vu+8jCBVcOS9v+eUqOWIneWni+WMluS4uiAx44CCXHJcbuWFtuS9meeahOaIkOWRmOS8muS7jiAx5byA5aeL6Ieq5Yqo5aKe6ZW/44CCIFxyXG7mjaLlj6Xor53or7TvvIwgRGlyZWN0aW9uLlVw55qE5YC85Li6IDHvvIwgRG93buS4uiAy77yMIExlZnTkuLogM++8jCBSaWdodOS4uiA044CCXHJcbuaIkeS7rOi/mOWPr+S7peWujOWFqOS4jeS9v+eUqOWIneWni+WMluWZqO+8mlxyXG5cclxuKi9cclxuXHJcbi8v5L2/55So5p6a5Li+5b6I566A5Y2V77ya6YCa6L+H5p6a5Li+55qE5bGe5oCn5p2l6K6/6Zeu5p6a5Li+5oiQ5ZGY77yM5ZKM5p6a5Li+55qE5ZCN5a2X5p2l6K6/6Zeu5p6a5Li+57G75Z6L77yaXHJcbmVudW0gUmVzcG9uc2UxIHtcclxuICAgIE5vID0gMCxcclxuICAgIFllcyA9IDEsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmQocmVjaXBpZW50OiBzdHJpbmcsIG1lc3NhZ2U6IFJlc3BvbnNlMSk6IHZvaWQge1xyXG4gICAgLy8gLi4uXHJcbn1cclxuXHJcbnJlc3BvbmQoXCJQcmluY2VzcyBDYXJvbGluZVwiLCBSZXNwb25zZTEuWWVzKVxyXG5cclxuIFxyXG4vKlxyXG7mlbDlrZfmnprkuL7lj6/ku6Xooqvmt7flhaXliLAg6K6h566X6L+H55qE5ZKM5bi46YeP5oiQ5ZGY77yI5aaC5LiL5omA56S677yJ44CCXHJcbueugOefreWcsOivtO+8jOS4jeW4puWIneWni+WMluWZqOeahOaemuS4vuaIluiAheiiq+aUvuWcqOesrOS4gOeahOS9jee9ru+8jFxyXG7miJbogIXooqvmlL7lnKjkvb/nlKjkuobmlbDlrZfluLjph4/miJblhbblroPluLjph4/liJ3lp4vljJbkuobnmoTmnprkuL7lkI7pnaLjgIJcclxu5o2i5Y+l6K+d6K+077yM5LiL6Z2i55qE5oOF5Ya15piv5LiN6KKr5YWB6K6455qE77yaXHJcbiovXHJcblxyXG4vLyBlbnVtIEUge1xyXG4vLyAgICAgQSA9IGdldFNvbWVWYWx1ZSgpLFxyXG4vLyAgICAgQiwgLy8gZXJyb3IhICdBJyBpcyBub3QgY29uc3RhbnQtaW5pdGlhbGl6ZWQsIHNvICdCJyBuZWVkcyBhbiBpbml0aWFsaXplclxyXG4vLyB9XHJcblxyXG4vKlxyXG7lrZfnrKbkuLLmnprkuL5cclxu5a2X56ym5Liy5p6a5Li+55qE5qaC5b+15b6I566A5Y2V77yM5L2G5piv5pyJ57uG5b6u55qEIOi/kOihjOaXtueahOW3ruWIq+OAgiDlnKjkuIDkuKrlrZfnrKbkuLLmnprkuL7ph4zvvIxcclxu5q+P5Liq5oiQ5ZGY6YO95b+F6aG755So5a2X56ym5Liy5a2X6Z2i6YeP77yM5oiW5Y+m5aSW5LiA5Liq5a2X56ym5Liy5p6a5Li+5oiQ5ZGY6L+b6KGM5Yid5aeL5YyW44CCXHJcbiovXHJcblxyXG5lbnVtIERpcmVjdGlvbjIge1xyXG4gICAgVXAgPSBcIlVQXCIsXHJcbiAgICBEb3duID0gXCJET1dOXCIsXHJcbiAgICBMZWZ0ID0gXCJMRUZUXCIsXHJcbiAgICBSaWdodCA9IFwiUklHSFRcIixcclxufVxyXG5cclxuLypcclxu55Sx5LqO5a2X56ym5Liy5p6a5Li+5rKh5pyJ6Ieq5aKe6ZW/55qE6KGM5Li677yM5a2X56ym5Liy5p6a5Li+5Y+v5Lul5b6I5aW955qE5bqP5YiX5YyW44CCXHJcbuaNouWPpeivneivtO+8jOWmguaenOS9oOato+WcqOiwg+ivleW5tuS4lOW/hemhu+imgeivu+S4gOS4quaVsOWtl+aemuS4vueahOi/kOihjOaXtueahOWAvO+8jFxyXG7ov5nkuKrlgLzpgJrluLjmmK/lvojpmr7or7vnmoQgLSDlroPlubbkuI3og73ooajovr7mnInnlKjnmoTkv6Hmga/vvIjlsL3nrqEg5Y+N5ZCR5pig5bCE5Lya5pyJ5omA5biu5Yqp77yJ77yMXHJcbuWtl+espuS4suaemuS4vuWFgeiuuOS9oOaPkOS+m+S4gOS4qui/kOihjOaXtuacieaEj+S5ieeahOW5tuS4lOWPr+ivu+eahOWAvO+8jOeLrOeri+S6juaemuS4vuaIkOWRmOeahOWQjeWtl+OAglxyXG4qL1xyXG5cclxuLypcclxu5byC5p6E5p6a5Li+77yISGV0ZXJvZ2VuZW91cyBlbnVtc++8iVxyXG7ku47mioDmnK/nmoTop5LluqbmnaXor7TvvIzmnprkuL7lj6/ku6Xmt7flkIjlrZfnrKbkuLLlkozmlbDlrZfmiJDlkZjvvIzkvYbmmK/kvLzkuY7kvaDlubbkuI3kvJrov5nkuYjlgZrvvJpcclxuKi9cclxuXHJcbmVudW0gQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bSB7XHJcbiAgICBObyA9IDAsXHJcbiAgICBZZXMgPSBcIllFU1wiLFxyXG59Il19
