/*
泛型
    介绍
    软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
    组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，
    这在创建大型系统时为你提供了十分灵活的功能。

    在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，
    一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
*/

/*
泛型之Hello World
    下面来创建第一个使用泛型的例子：identity函数。
    这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。

    不用泛型的话，这个函数可能是下面这样：
*/

function identity(arg: number): number {
    return arg;
}

//或者，我们使用any类型来定义函数：
function identity1(arg: any): any {
    return arg;
}

/*
使用any类型会导致这个函数可以接收任何类型的arg参数，
这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。
如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。
这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
*/
function identity2<T>(arg: T): T {
    return arg;
}

let output1 = identity1('myString');
let output2 = identity2('myString');
let output3 = identity2<string>('myString'); // type of output will be 'string'

/*
如果这么做，编译器会报错说我们使用了arg的.length属性，
但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，
所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。
*/
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

/*
现在假设我们想操作T类型的数组而不直接是T。
由于我们操作的是数组，所以.length属性是应该存在的。
我们可以像创建其它数组一样创建这个数组：
泛型数组t
*/
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
/*
你可以这样理解loggingIdentity的类型：泛型函数loggingIdentity，
接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。
如果我们传入数字数组，将返回一个数字数组，因为此时 T的的类型为number。 
这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。
我们也可以这样实现上面的例子：
*/
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
/*
泛型类型
    上一节，我们创建了identity通用函数，可以适用于不同的类型。
    在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。

    泛型函数的类型与非泛型函数的类型没什么不同，
    只是有一个类型参数在最前面，像函数声明一样：
*/

function identity4<T>(arg: T): T {
    return arg;
}
// 赋值函数myIdentity4
let myIdentity4: <T>(arg: T) => T = identity4;

//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
function identity5<T>(arg: T): T {
    return arg;
}

let myIdentity5: <U>(arg: U) => U = identity5;

//我们还可以使用带有调用签名的对象字面量来定义泛型函数：

function identity6<T>(arg: T): T {
    return arg;
}

let myIdentity6: { <T>(arg: T): T } = identity6;

// 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity7<T>(arg: T): T {
    return arg;
}

let myIdentity7: GenericIdentityFn = identity7;



interface GenericIdentityFn8<T> {
    (arg: T): T;
}

function identity8<T>(arg: T): T {
    return arg;
}

let myIdentity8: GenericIdentityFn8<number> = identity8;

/*
泛型类
泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
*/
/*
GenericNumber类的使用是十分直观的，并且你可能已经注意到了，
没有什么去限制它只能使用number类型。 
也可以使用字符串或其它更复杂的类型。

与接口一样，直接把泛型类型放在类后面，
可以帮助我们确认类的所有属性都在使用相同的类型。
我们在类那节说过，类有两部分：静态部分和实例部分。
泛型类指的是实例部分的类型，
所以类的静态属性不能使用这个泛型类型。

*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x:number, y:number):number { return x + y; };


/*
相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。
只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
为此，我们需要列出对于T的约束要求。

为此，我们定义一个接口来描述约束条件。
创建一个包含 .length属性的接口，
使用这个接口和extends关键字来实现约束：
*/

interface Lengthwise {
    length: number;
}

// 泛型可以继承接口
function loggingIdentity9<T extends Lengthwise>(arg: T): T {
    // console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity9('string')

//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentity9(3);  // Error, number doesn't have a .length property


 /*
在泛型约束中使用类型参数
    你可以声明一个类型参数，且它被另一个类型参数所约束。
    比如，现在我们想要用属性名从对象里获取这个属性。
    并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。
 */

function create<T>(c: {new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal10 {
    numLegs: number;
}

class Bee extends Animal10 {
    keeper: BeeKeeper;
}

class Lion extends Animal10 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal10>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!


export default{}