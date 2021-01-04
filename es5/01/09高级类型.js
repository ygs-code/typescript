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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLzA56auY57qn57G75Z6LLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztFQVVFOztBQUVGLHNEQUFzRDtBQUN0RCw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QyxNQUFNO0FBQ04sNkJBQTZCO0FBQzdCLHdDQUF3QztBQUN4QywrQ0FBK0M7QUFDL0MsUUFBUTtBQUNSLE1BQU07QUFDTixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLFNBQVMsTUFBTSxDQUFPLEtBQVEsRUFBRSxNQUFTO0lBQ3ZDLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUN2QixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtRQUNmLE1BQU8sQ0FBQyxHQUFHLENBQUMsR0FBUyxLQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEM7SUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixNQUFPLENBQUMsR0FBRyxDQUFDLEdBQVMsTUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFDRSxnQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQU1EO0lBQUE7SUFLQSxDQUFDO0lBSEMsMkJBQUcsR0FBSDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUVELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDekQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNqQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFVjs7Ozs7Ozs7O0VBU0U7QUFFRixTQUFTLE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBWTtJQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUM3QztJQUNELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN4QjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLE9BQU8sT0FBSSxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7QUFFdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFDRixTQUFTLFFBQVEsQ0FBQyxLQUFhLEVBQUUsT0FBd0I7SUFDdkQsTUFBTTtBQUNSLENBQUM7QUFFRCxtRkFBbUY7QUFDbkYsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDcEQsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUiLCJmaWxlIjoiMDEvMDnpq5jnuqfnsbvlnosuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6auY57qn57G75Z6LXG4gICAg5Lqk5Y+J57G75Z6L77yISW50ZXJzZWN0aW9uIFR5cGVz77yJXG4gICAg5Lqk5Y+J57G75Z6L5piv5bCG5aSa5Liq57G75Z6L5ZCI5bm25Li65LiA5Liq57G75Z6L44CCXG4gICAg6L+Z6K6p5oiR5Lus5Y+v5Lul5oqK546w5pyJ55qE5aSa56eN57G75Z6L5Y+g5Yqg5Yiw5LiA6LW35oiQ5Li65LiA56eN57G75Z6L77yM5a6D5YyF5ZCr5LqG5omA6ZyA55qE5omA5pyJ57G75Z6L55qE54m55oCn44CCXG4gICAg5L6L5aaC77yMIFBlcnNvbiAmIFNlcmlhbGl6YWJsZSAmIExvZ2dhYmxl5ZCM5pe25pivIFBlcnNvbiDlkowgU2VyaWFsaXphYmxlIOWSjCBMb2dnYWJsZeOAglxuICAgIOWwseaYr+ivtOi/meS4quexu+Wei+eahOWvueixoeWQjOaXtuaLpeacieS6hui/meS4ieenjeexu+Wei+eahOaIkOWRmOOAglxuXG4gICAg5oiR5Lus5aSn5aSa5piv5Zyo5re35YWl77yIbWl4aW5z77yJ5oiW5YW25a6D5LiN6YCC5ZCI5YW45Z6L6Z2i5ZCR5a+56LGh5qih5Z6L55qE5Zyw5pa555yL5Yiw5Lqk5Y+J57G75Z6L55qE5L2/55So44CCXG4gICAg77yI5ZyoSmF2YVNjcmlwdOmHjOWPkeeUn+i/meenjeaDheWGteeahOWcuuWQiOW+iOWkmu+8ge+8iSDkuIvpnaLmmK/lpoLkvZXliJvlu7rmt7flhaXnmoTkuIDkuKrnroDljZXkvovlrZDvvJpcbiovXG5cbi8vIGZ1bmN0aW9uIGV4dGVuZDxULCBVPihmaXJzdDogVCwgc2Vjb25kOiBVKTogVCAmIFUge1xuLy8gICBsZXQgcmVzdWx0ID0gPFQgJiBVPnt9O1xuLy8gICBmb3IgKGxldCBpZCBpbiBmaXJzdCkge1xuLy8gICAgICg8YW55PnJlc3VsdClbaWRdID0gKDxhbnk+Zmlyc3QpW2lkXTtcbi8vICAgfVxuLy8gICBmb3IgKGxldCBpZCBpbiBzZWNvbmQpIHtcbi8vICAgICBpZiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbi8vICAgICAgICg8YW55PnJlc3VsdClbaWRdID0gKDxhbnk+c2Vjb25kKVtpZF07XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG5cbmZ1bmN0aW9uIGV4dGVuZDxULCBVPihmaXJzdDogVCwgc2Vjb25kOiBVKTogVCAmIFUge1xuICBsZXQgcmVzdWx0ID0gPFQgJiBVPnt9O1xuICBmb3IgKGxldCBrZXkgaW4gZmlyc3QpIHtcbiAgICAoPGFueT5yZXN1bHQpW2tleV0gPSAoPGFueT5maXJzdClba2V5XTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gc2Vjb25kKSB7XG4gICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgKDxhbnk+cmVzdWx0KVtrZXldID0gKDxhbnk+c2Vjb25kKVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jbGFzcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTG9nZ2FibGUge1xuICBsb2coKTogdm9pZDtcbn1cblxuY2xhc3MgQ29uc2xvZUxvZ2dlciBpbXBsZW1lbnRzIExvZ2dhYmxlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2coKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLm5hbWU9XCIsIHRoaXMubmFtZSk7XG4gIH1cbn1cblxudmFyIGppbSA9IGV4dGVuZChuZXcgUGVyc29uKFwiamltXCIpLCBuZXcgQ29uc2xvZUxvZ2dlcigpKTtcbnZhciBuID0gamltLm5hbWU7XG5qaW0ubG9nKCk7XG5cbi8qXG5cbuiBlOWQiOexu+Wei++8iFVuaW9uIFR5cGVz77yJXG7ogZTlkIjnsbvlnovkuI7kuqTlj4nnsbvlnovlvojmnInlhbPogZTvvIzkvYbmmK/kvb/nlKjkuIrljbTlrozlhajkuI3lkIzjgIJcbuWBtuWwlOS9oOS8mumBh+WIsOi/meenjeaDheWGte+8jOS4gOS4quS7o+eggeW6k+W4jOacm+S8oOWFpSBudW1iZXLmiJYgc3RyaW5n57G75Z6L55qE5Y+C5pWw44CCIOS+i+WmguS4i+mdoueahOWHveaVsO+8mlxucGFkTGVmdOWtmOWcqOS4gOS4qumXrumimO+8jCBwYWRkaW5n5Y+C5pWw55qE57G75Z6L5oyH5a6a5oiQ5LqGIGFueeOAgiBcbui/meWwseaYr+ivtOaIkeS7rOWPr+S7peS8oOWFpeS4gOS4quaXouS4jeaYryBudW1iZXLkuZ/kuI3mmK8gc3RyaW5n57G75Z6L55qE5Y+C5pWw77yM5L2G5pivVHlwZVNjcmlwdOWNtOS4jeaKpemUmeOAglxubGV0IGluZGVudGVkU3RyaW5nID0gcGFkTGVmdChcIkhlbGxvIHdvcmxkXCIsIHRydWUpOyAvLyDnvJbor5HpmLbmrrXpgJrov4fvvIzov5DooYzml7bmiqXplJlcblxuKi9cblxuZnVuY3Rpb24gcGFkTGVmdCh2YWx1ZTogc3RyaW5nLCBwYWRkaW5nOiBhbnkpIHtcbiAgaWYgKHR5cGVvZiBwYWRkaW5nID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIEFycmF5KHBhZGRpbmcgKyAxKS5qb2luKFwiIFwiKSArIHZhbHVlO1xuICB9XG4gIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBwYWRkaW5nICsgdmFsdWU7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzdHJpbmcgb3IgbnVtYmVyLCBnb3QgJyR7cGFkZGluZ30nLmApO1xufVxuXG5wYWRMZWZ0KFwiSGVsbG8gd29ybGRcIiwgNCk7IC8vIHJldHVybnMgXCIgICAgSGVsbG8gd29ybGRcIlxuXG4vKlxu5Zyo5Lyg57uf55qE6Z2i5ZCR5a+56LGh6K+t6KiA6YeM77yM5oiR5Lus5Y+v6IO95Lya5bCG6L+Z5Lik56eN57G75Z6L5oq96LGh5oiQ5pyJ5bGC57qn55qE57G75Z6L44CCXG7ov5nkuYjlgZrmmL7nhLbmmK/pnZ7luLjmuIXmmbDnmoTvvIzkvYblkIzml7bkuZ/lrZjlnKjkuobov4fluqborr7orqHjgIJcbnBhZExlZnTljp/lp4vniYjmnKznmoTlpb3lpITkuYvkuIDmmK/lhYHorrjmiJHku6zkvKDlhaXljp/lp4vnsbvlnovjgIIgXG7ov5nmoLflgZrnmoTor53kvb/nlKjotbfmnaXml6LnroDljZXlj4jmlrnkvr/jgIJcbuWmguaenOaIkeS7rOWwseaYr+aDs+S9v+eUqOW3sue7j+WtmOWcqOeahOWHveaVsOeahOivne+8jOi/meenjeaWsOeahOaWueW8j+WwseS4jemAgueUqOS6huOAglxuXG7ku6Pmm78gYW5577yMIOaIkeS7rOWPr+S7peS9v+eUqCDogZTlkIjnsbvlnovlgZrkuLogcGFkZGluZ+eahOWPguaVsO+8mlxu6IGU5ZCI57G75Z6L6KGo56S65LiA5Liq5YC85Y+v5Lul5piv5Yeg56eN57G75Z6L5LmL5LiA44CCIOaIkeS7rOeUqOerlue6v++8iCB877yJ5YiG6ZqU5q+P5Liq57G75Z6L77yM5omA5LulIG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW7ooajnpLrkuIDkuKrlgLzlj6/ku6XmmK8gbnVtYmVy77yMIHN0cmluZ++8jOaIliBib29sZWFu44CCXG5cbuWmguaenOS4gOS4quWAvOaYr+iBlOWQiOexu+Wei++8jOaIkeS7rOWPquiDveiuv+mXruatpOiBlOWQiOexu+Wei+eahOaJgOacieexu+Wei+mHjOWFseacieeahOaIkOWRmOOAglxu6L+Z6YeM55qE6IGU5ZCI57G75Z6L5Y+v6IO95pyJ54K55aSN5p2C77yM5L2G5piv5L2g5b6I5a655piT5bCx5Lmg5oOv5LqG44CCIOWmguaenOS4gOS4quWAvOeahOexu+Wei+aYryBBIHwgQu+8jOaIkeS7rOiDveWknyDnoa7lrprnmoTmmK/lroPljIXlkKvkuoYgQSDlkowgQuS4reWFseacieeahOaIkOWRmOOAglxu6L+Z5Liq5L6L5a2Q6YeM77yMIEJpcmTlhbfmnInkuIDkuKogZmx55oiQ5ZGY44CCIOaIkeS7rOS4jeiDveehruWumuS4gOS4qiBCaXJkIHwgRmlzaOexu+Wei+eahOWPmOmHj+aYr+WQpuaciSBmbHnmlrnms5XjgIJcbuWmguaenOWPmOmHj+WcqOi/kOihjOaXtuaYryBGaXNo57G75Z6L77yM6YKj5LmI6LCD55SoIHBldC5mbHkoKeWwseWHuumUmeS6huOAglxuXG5cbiovXG5mdW5jdGlvbiBwYWRMZWZ0MSh2YWx1ZTogc3RyaW5nLCBwYWRkaW5nOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgLy8gLi4uXG59XG5cbi8vIGxldCBpbmRlbnRlZFN0cmluZyA9IHBhZExlZnQxKFwiSGVsbG8gd29ybGRcIiwgdHJ1ZSk7IC8vIGVycm9ycyBkdXJpbmcgY29tcGlsYXRpb25cbmxldCBpbmRlbnRlZFN0cmluZzEgPSBwYWRMZWZ0MShcIkhlbGxvIHdvcmxkXCIsIDEpOyAvL1xubGV0IGluZGVudGVkU3RyaW5nMiA9IHBhZExlZnQxKFwiSGVsbG8gd29ybGRcIiwgXCJzdHJcIik7IC8vXG5cbi8qXG7nlKjmiLfoh6rlrprkuYnnmoTnsbvlnovkv53miqRcbui/memHjOWPr+S7peazqOaEj+WIsOaIkeS7rOS4jeW+l+S4jeWkmuasoeS9v+eUqOexu+Wei+aWreiogOOAglxu5YGH6Iul5oiR5Lus5LiA5pem5qOA5p+l6L+H57G75Z6L77yM5bCx6IO95Zyo5LmL5ZCO55qE5q+P5Liq5YiG5pSv6YeM5riF5qWa5Zyw55+l6YGTIHBldOeahOexu+Wei+eahOivneWwseWlveS6huOAglxuXG5UeXBlU2NyaXB06YeM55qEIOexu+Wei+S/neaKpOacuuWItuiuqeWug+aIkOS4uuS6hueOsOWunuOAglxu57G75Z6L5L+d5oqk5bCx5piv5LiA5Lqb6KGo6L6+5byP77yM5a6D5Lus5Lya5Zyo6L+Q6KGM5pe25qOA5p+l5Lul56Gu5L+d5Zyo5p+Q5Liq5L2c55So5Z+f6YeM55qE57G75Z6L44CCIFxu6KaB5a6a5LmJ5LiA5Liq57G75Z6L5L+d5oqk77yM5oiR5Lus5Y+q6KaB566A5Y2V5Zyw5a6a5LmJ5LiA5Liq5Ye95pWw77yM5a6D55qE6L+U5Zue5YC85piv5LiA5LiqIOexu+Wei+iwk+ivje+8mlxuXG4qL1xuXG4vKlxuIHR5cGVvZuexu+Wei+S/neaKpFxuIOeOsOWcqOaIkeS7rOWbnui/h+WktOadpeeci+eci+aAjuS5iOS9v+eUqOiBlOWQiOexu+Wei+S5puWGmSBwYWRMZWZ05Luj56CB44CCIOaIkeS7rOWPr+S7peWDj+S4i+mdoui/meagt+WIqeeUqOexu+Wei+aWreiogOadpeWGme+8mlxuICovXG5cbmV4cG9ydCB7fTtcbiJdfQ==
