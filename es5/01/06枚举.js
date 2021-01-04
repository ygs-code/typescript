"use strict";
/*
枚举
    使用枚举我们可以定义一些带名字的常量。
    使用枚举可以清晰地表达意图或创建一组有区别的用例。
    TypeScript支持数字的和基于字符串的枚举。
*/
exports.__esModule = true;
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
console.log("Direction=", Direction);
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
/*
计算的和常量成员
每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 当满足如下条件时，枚举成员被当作是常量：

它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
*/
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
/*
它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。


枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

一个枚举表达式字面量（主要是字符串字面量或数字字面量）
一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
带括号的常量枚举表达式
一元运算符 +, -, ~其中之一应用在了常量枚举表达式
常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
所有其它情况的枚举成员被当作是需要计算得出的值。

*/
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log("FileAccess=", FileAccess);
/*
联合枚举与枚举成员的类型
存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。
字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

任何字符串字面量（例如： "foo"， "bar"， "baz"）
任何数字字面量（例如： 1, 100）
应用了一元 -符号的数字字面量（例如： -1, -100）
当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。

首先，枚举成员成为了类型！ 例如，我们可以说某些成员 只能是枚举成员的值：
*/
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle6"] = 0] = "Circle6";
    ShapeKind[ShapeKind["Square6"] = 1] = "Square6";
})(ShapeKind || (ShapeKind = {}));
var c2 = {
    //  kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100
};
/*
运行时的枚举
枚举是在运行时真正存在的对象。 例如下面的枚举：
*/
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
function f(obj) {
    return obj.X;
}
f(E1);
/*
反向映射
    除了创建一个以属性名做为对象成员的对象之外，
    数字枚举成员还具有了 反向映射，
    从枚举值到枚举名字。 例如，在下面的例子中：
    TypeScript可能会将这段代码编译为下面的JavaScript：
    var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
生成的代码中，枚举类型被编译成一个对象，
它包含了正向映射（ name -> value）和反向映射（ value -> name）。
 引用枚举成员总会生成为对属性访问并且永远也不会内联代码。

要注意的是 不会为字符串枚举成员生成反向映射。

*/
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum["B"] = "B1";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
exports["default"] = {};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtBQWtCN0IsSUFBSSxVQUFVLEdBQUcsdURBQW1FLENBQUE7QUFlcEYscUJBQWUsRUFBRSxDQUFDIiwiZmlsZSI6IjAxLzA25p6a5Li+LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuaemuS4vlxuICAgIOS9v+eUqOaemuS4vuaIkeS7rOWPr+S7peWumuS5ieS4gOS6m+W4puWQjeWtl+eahOW4uOmHj+OAgiBcbiAgICDkvb/nlKjmnprkuL7lj6/ku6XmuIXmmbDlnLDooajovr7mhI/lm77miJbliJvlu7rkuIDnu4TmnInljLrliKvnmoTnlKjkvovjgIJcbiAgICBUeXBlU2NyaXB05pSv5oyB5pWw5a2X55qE5ZKM5Z+65LqO5a2X56ym5Liy55qE5p6a5Li+44CCXG4qL1xuXG4vKlxu5pWw5a2X5p6a5Li+XG7pppblhYjmiJHku6znnIvnnIvmlbDlrZfmnprkuL7vvIzlpoLmnpzkvaDkvb/nlKjov4flhbblroPnvJbnqIvor63oqIDlupTor6XkvJrlvojnhp/mgonjgIJcbuWmguS4iu+8jOaIkeS7rOWumuS5ieS6huS4gOS4quaVsOWtl+aemuS4vu+8jCBVcOS9v+eUqOWIneWni+WMluS4uiAx44CCIOWFtuS9meeahOaIkOWRmOS8muS7jiAx5byA5aeL6Ieq5Yqo5aKe6ZW/44CCXG7mjaLlj6Xor53or7TvvIwgRGlyZWN0aW9uLlVw55qE5YC85Li6IDHvvIwgRG93buS4uiAy77yMIExlZnTkuLogM++8jCBSaWdodOS4uiA044CCXG4qL1xuXG5lbnVtIERpcmVjdGlvbiB7XG4gIFVwID0gMSxcbiAgRG93bixcbiAgTGVmdCxcbiAgUmlnaHQsXG59XG5cbmNvbnNvbGUubG9nKFwiRGlyZWN0aW9uPVwiLCBEaXJlY3Rpb24pO1xuXG4vKlxu5aaC5LiK77yM5oiR5Lus5a6a5LmJ5LqG5LiA5Liq5pWw5a2X5p6a5Li+77yMIFVw5L2/55So5Yid5aeL5YyW5Li6IDHjgIJcbuWFtuS9meeahOaIkOWRmOS8muS7jiAx5byA5aeL6Ieq5Yqo5aKe6ZW/44CCIFxu5o2i5Y+l6K+d6K+077yMIERpcmVjdGlvbi5VcOeahOWAvOS4uiAx77yMIERvd27kuLogMu+8jCBMZWZ05Li6IDPvvIwgUmlnaHTkuLogNOOAglxu5oiR5Lus6L+Y5Y+v5Lul5a6M5YWo5LiN5L2/55So5Yid5aeL5YyW5Zmo77yaXG5cbiovXG5cbi8v5L2/55So5p6a5Li+5b6I566A5Y2V77ya6YCa6L+H5p6a5Li+55qE5bGe5oCn5p2l6K6/6Zeu5p6a5Li+5oiQ5ZGY77yM5ZKM5p6a5Li+55qE5ZCN5a2X5p2l6K6/6Zeu5p6a5Li+57G75Z6L77yaXG5lbnVtIFJlc3BvbnNlMSB7XG4gIE5vID0gMCxcbiAgWWVzID0gMSxcbn1cblxuZnVuY3Rpb24gcmVzcG9uZChyZWNpcGllbnQ6IHN0cmluZywgbWVzc2FnZTogUmVzcG9uc2UxKTogdm9pZCB7XG4gIC8vIC4uLlxufVxuXG5yZXNwb25kKFwiUHJpbmNlc3MgQ2Fyb2xpbmVcIiwgUmVzcG9uc2UxLlllcyk7XG5cbi8qXG7mlbDlrZfmnprkuL7lj6/ku6Xooqvmt7flhaXliLAg6K6h566X6L+H55qE5ZKM5bi46YeP5oiQ5ZGY77yI5aaC5LiL5omA56S677yJ44CCXG7nroDnn63lnLDor7TvvIzkuI3luKbliJ3lp4vljJblmajnmoTmnprkuL7miJbogIXooqvmlL7lnKjnrKzkuIDnmoTkvY3nva7vvIxcbuaIluiAheiiq+aUvuWcqOS9v+eUqOS6huaVsOWtl+W4uOmHj+aIluWFtuWug+W4uOmHj+WIneWni+WMluS6hueahOaemuS4vuWQjumdouOAglxu5o2i5Y+l6K+d6K+077yM5LiL6Z2i55qE5oOF5Ya15piv5LiN6KKr5YWB6K6455qE77yaXG4qL1xuXG4vLyBlbnVtIEUge1xuLy8gICAgIEEgPSBnZXRTb21lVmFsdWUoKSxcbi8vICAgICBCLCAvLyBlcnJvciEgJ0EnIGlzIG5vdCBjb25zdGFudC1pbml0aWFsaXplZCwgc28gJ0InIG5lZWRzIGFuIGluaXRpYWxpemVyXG4vLyB9XG5cbi8qXG7lrZfnrKbkuLLmnprkuL5cbuWtl+espuS4suaemuS4vueahOamguW/teW+iOeugOWNle+8jOS9huaYr+aciee7huW+rueahCDov5DooYzml7bnmoTlt67liKvjgIIg5Zyo5LiA5Liq5a2X56ym5Liy5p6a5Li+6YeM77yMXG7mr4/kuKrmiJDlkZjpg73lv4XpobvnlKjlrZfnrKbkuLLlrZfpnaLph4/vvIzmiJblj6blpJbkuIDkuKrlrZfnrKbkuLLmnprkuL7miJDlkZjov5vooYzliJ3lp4vljJbjgIJcbiovXG5cbmVudW0gRGlyZWN0aW9uMiB7XG4gIFVwID0gXCJVUFwiLFxuICBEb3duID0gXCJET1dOXCIsXG4gIExlZnQgPSBcIkxFRlRcIixcbiAgUmlnaHQgPSBcIlJJR0hUXCIsXG59XG5cbi8qXG7nlLHkuo7lrZfnrKbkuLLmnprkuL7msqHmnInoh6rlop7plb/nmoTooYzkuLrvvIzlrZfnrKbkuLLmnprkuL7lj6/ku6Xlvojlpb3nmoTluo/liJfljJbjgIJcbuaNouWPpeivneivtO+8jOWmguaenOS9oOato+WcqOiwg+ivleW5tuS4lOW/hemhu+imgeivu+S4gOS4quaVsOWtl+aemuS4vueahOi/kOihjOaXtueahOWAvO+8jFxu6L+Z5Liq5YC86YCa5bi45piv5b6I6Zq+6K+755qEIC0g5a6D5bm25LiN6IO96KGo6L6+5pyJ55So55qE5L+h5oGv77yI5bC9566hIOWPjeWQkeaYoOWwhOS8muacieaJgOW4ruWKqe+8ie+8jFxu5a2X56ym5Liy5p6a5Li+5YWB6K645L2g5o+Q5L6b5LiA5Liq6L+Q6KGM5pe25pyJ5oSP5LmJ55qE5bm25LiU5Y+v6K+755qE5YC877yM54us56uL5LqO5p6a5Li+5oiQ5ZGY55qE5ZCN5a2X44CCXG4qL1xuXG4vKlxu5byC5p6E5p6a5Li+77yISGV0ZXJvZ2VuZW91cyBlbnVtc++8iVxu5LuO5oqA5pyv55qE6KeS5bqm5p2l6K+077yM5p6a5Li+5Y+v5Lul5re35ZCI5a2X56ym5Liy5ZKM5pWw5a2X5oiQ5ZGY77yM5L2G5piv5Ly85LmO5L2g5bm25LiN5Lya6L+Z5LmI5YGa77yaXG4qL1xuXG5lbnVtIEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0ge1xuICBObyA9IDAsXG4gIFllcyA9IFwiWUVTXCIsXG59XG5cbi8qXG7orqHnrpfnmoTlkozluLjph4/miJDlkZhcbuavj+S4quaemuS4vuaIkOWRmOmDveW4puacieS4gOS4quWAvO+8jOWug+WPr+S7peaYryDluLjph4/miJYg6K6h566X5Ye65p2l55qE44CCIOW9k+a7oei2s+WmguS4i+adoeS7tuaXtu+8jOaemuS4vuaIkOWRmOiiq+W9k+S9nOaYr+W4uOmHj++8mlxuXG7lroPmmK/mnprkuL7nmoTnrKzkuIDkuKrmiJDlkZjkuJTmsqHmnInliJ3lp4vljJblmajvvIzov5nnp43mg4XlhrXkuIvlroPooqvotYvkuojlgLwgMO+8mlxuKi9cblxuZW51bSBFIHtcbiAgWCxcbn1cblxuLypcbuWug+S4jeW4puacieWIneWni+WMluWZqOS4lOWug+S5i+WJjeeahOaemuS4vuaIkOWRmOaYr+S4gOS4qiDmlbDlrZfluLjph4/jgIIg6L+Z56eN5oOF5Ya15LiL77yM5b2T5YmN5p6a5Li+5oiQ5ZGY55qE5YC85Li65a6D5LiK5LiA5Liq5p6a5Li+5oiQ5ZGY55qE5YC85YqgMeOAglxuXG5cbuaemuS4vuaIkOWRmOS9v+eUqCDluLjph4/mnprkuL7ooajovr7lvI/liJ3lp4vljJbjgIIg5bi45pWw5p6a5Li+6KGo6L6+5byP5pivVHlwZVNjcmlwdOihqOi+vuW8j+eahOWtkOmbhu+8jOWug+WPr+S7peWcqOe8luivkemYtuauteaxguWAvOOAgiDlvZPkuIDkuKrooajovr7lvI/mu6HotrPkuIvpnaLmnaHku7bkuYvkuIDml7bvvIzlroPlsLHmmK/kuIDkuKrluLjph4/mnprkuL7ooajovr7lvI/vvJpcblxu5LiA5Liq5p6a5Li+6KGo6L6+5byP5a2X6Z2i6YeP77yI5Li76KaB5piv5a2X56ym5Liy5a2X6Z2i6YeP5oiW5pWw5a2X5a2X6Z2i6YeP77yJXG7kuIDkuKrlr7nkuYvliY3lrprkuYnnmoTluLjph4/mnprkuL7miJDlkZjnmoTlvJXnlKjvvIjlj6/ku6XmmK/lnKjkuI3lkIznmoTmnprkuL7nsbvlnovkuK3lrprkuYnnmoTvvIlcbuW4puaLrOWPt+eahOW4uOmHj+aemuS4vuihqOi+vuW8j1xu5LiA5YWD6L+Q566X56ymICssIC0sIH7lhbbkuK3kuYvkuIDlupTnlKjlnKjkuobluLjph4/mnprkuL7ooajovr7lvI9cbuW4uOmHj+aemuS4vuihqOi+vuW8j+WBmuS4uuS6jOWFg+i/kOeul+espiArLCAtLCAqLCAvLCAlLCA8PCwgPj4sID4+PiwgJiwgfCwgXueahOaTjeS9nOWvueixoeOAgiDoi6XluLjmlbDmnprkuL7ooajovr7lvI/msYLlgLzlkI7kuLogTmFO5oiWIEluZmluaXR577yM5YiZ5Lya5Zyo57yW6K+R6Zi25q615oql6ZSZ44CCXG7miYDmnInlhbblroPmg4XlhrXnmoTmnprkuL7miJDlkZjooqvlvZPkvZzmmK/pnIDopoHorqHnrpflvpflh7rnmoTlgLzjgIJcblxuKi9cblxuZW51bSBGaWxlQWNjZXNzIHtcbiAgLy8gY29uc3RhbnQgbWVtYmVyc1xuICBOb25lLFxuICBSZWFkID0gMSA8PCAxLFxuICBXcml0ZSA9IDEgPDwgMixcbiAgUmVhZFdyaXRlID0gUmVhZCB8IFdyaXRlLFxuICAvLyBjb21wdXRlZCBtZW1iZXJcbiAgRyA9IFwiMTIzXCIubGVuZ3RoLFxufVxuY29uc29sZS5sb2coXCJGaWxlQWNjZXNzPVwiLCBGaWxlQWNjZXNzKTtcblxuLypcbuiBlOWQiOaemuS4vuS4juaemuS4vuaIkOWRmOeahOexu+Wei1xu5a2Y5Zyo5LiA56eN54m55q6K55qE6Z2e6K6h566X55qE5bi46YeP5p6a5Li+5oiQ5ZGY55qE5a2Q6ZuG77ya5a2X6Z2i6YeP5p6a5Li+5oiQ5ZGY44CCIFxu5a2X6Z2i6YeP5p6a5Li+5oiQ5ZGY5piv5oyH5LiN5bim5pyJ5Yid5aeL5YC855qE5bi46YeP5p6a5Li+5oiQ5ZGY77yM5oiW6ICF5piv5YC86KKr5Yid5aeL5YyW5Li6XG5cbuS7u+S9leWtl+espuS4suWtl+mdoumHj++8iOS+i+Wmgu+8miBcImZvb1wi77yMIFwiYmFyXCLvvIwgXCJiYXpcIu+8iVxu5Lu75L2V5pWw5a2X5a2X6Z2i6YeP77yI5L6L5aaC77yaIDEsIDEwMO+8iVxu5bqU55So5LqG5LiA5YWDIC3nrKblj7fnmoTmlbDlrZflrZfpnaLph4/vvIjkvovlpoLvvJogLTEsIC0xMDDvvIlcbuW9k+aJgOacieaemuS4vuaIkOWRmOmDveaLpeacieWtl+mdoumHj+aemuS4vuWAvOaXtu+8jOWug+WwseW4puacieS6huS4gOenjeeJueauiueahOivreS5ieOAglxuXG7pppblhYjvvIzmnprkuL7miJDlkZjmiJDkuLrkuobnsbvlnovvvIEg5L6L5aaC77yM5oiR5Lus5Y+v5Lul6K+05p+Q5Lqb5oiQ5ZGYIOWPquiDveaYr+aemuS4vuaIkOWRmOeahOWAvO+8mlxuKi9cblxuZW51bSBTaGFwZUtpbmQge1xuICBDaXJjbGU2LFxuICBTcXVhcmU2LFxufVxuXG5pbnRlcmZhY2UgQ2lyY2xlIHtcbiAgLy8ga2luZDogU2hhcGVLaW5kLkNpcmNsZTtcbiAgcmFkaXVzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTcXVhcmUge1xuICAvLyBraW5kOiBTaGFwZUtpbmQuU3F1YXJlO1xuICBzaWRlTGVuZ3RoOiBudW1iZXI7XG59XG5cbmxldCBjMjogQ2lyY2xlID0ge1xuICAvLyAga2luZDogU2hhcGVLaW5kLlNxdWFyZSxcbiAgLy8gICAgfn5+fn5+fn5+fn5+fn5+fiBFcnJvciFcbiAgcmFkaXVzOiAxMDAsXG59O1xuXG4vKlxu6L+Q6KGM5pe255qE5p6a5Li+XG7mnprkuL7mmK/lnKjov5DooYzml7bnnJ/mraPlrZjlnKjnmoTlr7nosaHjgIIg5L6L5aaC5LiL6Z2i55qE5p6a5Li+77yaXG4qL1xuXG5lbnVtIEUxIHtcbiAgWCxcbiAgWSxcbiAgWixcbn1cblxuZnVuY3Rpb24gZihvYmo6IHsgWDogbnVtYmVyIH0pIHtcbiAgcmV0dXJuIG9iai5YO1xufVxuXG5mKEUxKTtcblxuLypcbuWPjeWQkeaYoOWwhFxuICAgIOmZpOS6huWIm+W7uuS4gOS4quS7peWxnuaAp+WQjeWBmuS4uuWvueixoeaIkOWRmOeahOWvueixoeS5i+Wklu+8jFxuICAgIOaVsOWtl+aemuS4vuaIkOWRmOi/mOWFt+acieS6hiDlj43lkJHmmKDlsITvvIxcbiAgICDku47mnprkuL7lgLzliLDmnprkuL7lkI3lrZfjgIIg5L6L5aaC77yM5Zyo5LiL6Z2i55qE5L6L5a2Q5Lit77yaXG4gICAgVHlwZVNjcmlwdOWPr+iDveS8muWwhui/meauteS7o+eggee8luivkeS4uuS4i+mdoueahEphdmFTY3JpcHTvvJpcbiAgICB2YXIgRW51bTtcbihmdW5jdGlvbiAoRW51bSkge1xuICAgIEVudW1bRW51bVtcIkFcIl0gPSAwXSA9IFwiQVwiO1xufSkoRW51bSB8fCAoRW51bSA9IHt9KSk7XG52YXIgYSA9IEVudW0uQTtcbnZhciBuYW1lT2ZBID0gRW51bVthXTsgLy8gXCJBXCJcbueUn+aIkOeahOS7o+eggeS4re+8jOaemuS4vuexu+Wei+iiq+e8luivkeaIkOS4gOS4quWvueixoe+8jFxu5a6D5YyF5ZCr5LqG5q2j5ZCR5pig5bCE77yIIG5hbWUgLT4gdmFsdWXvvInlkozlj43lkJHmmKDlsITvvIggdmFsdWUgLT4gbmFtZe+8ieOAglxuIOW8leeUqOaemuS4vuaIkOWRmOaAu+S8mueUn+aIkOS4uuWvueWxnuaAp+iuv+mXruW5tuS4lOawuOi/nOS5n+S4jeS8muWGheiBlOS7o+eggeOAglxuXG7opoHms6jmhI/nmoTmmK8g5LiN5Lya5Li65a2X56ym5Liy5p6a5Li+5oiQ5ZGY55Sf5oiQ5Y+N5ZCR5pig5bCE44CCXG5cbiovXG5cbmVudW0gRW51bSB7XG4gIEEsXG4gIEI9XCJCMVwiXG59XG5sZXQgYSA9IEVudW0uQTtcbmxldCBuYW1lT2ZBID0gRW51bVthXTsgLy8gXCJBXCJcblxuXG4vKlxuY29uc3TmnprkuL5cbiAgICDlpKflpJrmlbDmg4XlhrXkuIvvvIzmnprkuL7mmK/ljYHliIbmnInmlYjnmoTmlrnmoYjjgIJcbiAgICDnhLbogIzlnKjmn5Dkupvmg4XlhrXkuIvpnIDmsYLlvojkuKXmoLzjgIIgXG4gICAg5Li65LqG6YG/5YWN5Zyo6aKd5aSW55Sf5oiQ55qE5Luj56CB5LiK55qE5byA6ZSA5ZKM6aKd5aSW55qE6Z2e55u05o6l55qE5a+55p6a5Li+5oiQ5ZGY55qE6K6/6Zeu77yM5oiR5Lus5Y+v5Lul5L2/55SoIGNvbnN05p6a5Li+44CCIFxuICAgIOW4uOmHj+aemuS4vumAmui/h+WcqOaemuS4vuS4iuS9v+eUqCBjb25zdOS/rumlsOespuadpeWumuS5ieOAglxuKi9cblxuY29uc3QgZW51bSBEaXJlY3Rpb25zIHtcbiAgICBVcCxcbiAgICBEb3duLFxuICAgIExlZnQsXG4gICAgUmlnaHRcbn1cblxubGV0IGRpcmVjdGlvbnMgPSBbRGlyZWN0aW9ucy5VcCwgRGlyZWN0aW9ucy5Eb3duLCBEaXJlY3Rpb25zLkxlZnQsIERpcmVjdGlvbnMuUmlnaHRdXG5cbi8qXG7lpJbpg6jmnprkuL5cbiAgICDlpJbpg6jmnprkuL7nlKjmnaXmj4/ov7Dlt7Lnu4/lrZjlnKjnmoTmnprkuL7nsbvlnovnmoTlvaLnirbjgIJcbiAgICDlpJbpg6jmnprkuL7lkozpnZ7lpJbpg6jmnprkuL7kuYvpl7TmnInkuIDkuKrph43opoHnmoTljLrliKvvvIzlnKjmraPluLjnmoTmnprkuL7ph4zvvIzmsqHmnInliJ3lp4vljJbmlrnms5XnmoTmiJDlkZjooqvlvZPmiJDluLjmlbDmiJDlkZjjgIJcbiAgICDlr7nkuo7pnZ7luLjmlbDnmoTlpJbpg6jmnprkuL7ogIzoqIDvvIzmsqHmnInliJ3lp4vljJbmlrnms5Xml7booqvlvZPlgZrpnIDopoHnu4/ov4forqHnrpfnmoTjgIJcbiovXG5cbmRlY2xhcmUgZW51bSBFbnVtMiB7XG4gICAgQSA9IDEsXG4gICAgQixcbiAgICBDID0gMlxufVxuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiJdfQ==
