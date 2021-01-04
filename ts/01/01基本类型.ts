let isDone: boolean = false; // 布尔型
let str: string = '字符串';
let nun: number = 1; //    数字类型
let arr1: number[] = [1, 2, 3, 4, 5]; //数组
let arr: Array<number> = [1, 2, 3, 4, 5]; // 数组

//元组 tuple
let x: [string, number];
x = ['string', 1];

//枚举 enum
/*
枚举
enum类型是对JavaScript标准数据类型的一个补充。 
像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。


*/
enum Color {
    Red,
    Grren,
    Blue,
}
let c: Color = Color.Grren;

console.log('Color=', Color);
console.log('c=', c);

/*
默认情况下，从0开始为元素编号。
你也可以手动的指定成员的数值。
例如，我们将上面的例子改成从 1开始编号：
如果不手动赋值那么下一个的值就是上一个的值加1
*/
enum Style {
    width = 1,
    heihgt = 100,
    padding = 200,
    margin = 2,
}
//赋值
let s: Style = Style.heihgt;
console.log('Style=', Style);
console.log('s=', s);

/*
any 
有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
那么我们可以使用 any类型来标记这些变量：
*/
let notSure: any = 4;
notSure = 'str';
notSure = {
    name: 'ygs',
    address: 'g x',
};

//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [
    1,
    true,
    'str',
    {
        name: 'any',
    },
    ,
    [
        {
            title: '标题1',
        },
        {
            title: '标题2',
        },
    ],
];

//Void
/*
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
当一个函数没有返回值时，你通常会见到其返回值类型是 void：
*/
//没有返回值
function warnUser(): void {
    console.log('warnUser');
}

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = null;
let un: void = undefined;

/*
Null 和 Undefined
TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
 和 void相似，它们的本身的类型用处不是很大：
*/

let u: undefined = undefined;
let n: string = null;

/*
 接口
 接口是一个抽象类，如果继承该接口必须要去实现
 TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
 它有时被称做“鸭式辨型法”或“结构性子类型化”。
  在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
*/

interface ILabelledValue {
    label: string; // 字符串
    value: number; // 数字
}

function printLabel(labelledObj: ILabelledValue): number {
    //返回label
    return labelledObj.value;
}

//value 设置为number数字类型
let value: number = printLabel({
    label: 'label',
    value: 1,
});

console.log('value==', value);

/*
可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 
可选属性在应用“option bags”模式时很常用，
即给函数传入的参数对象中只有部分属性赋值了。
*/

interface ISquareConfig {
    color?: string;
    width?: number;
    name: string;
}

interface ISquareValue {
    color?: string;
    width?: number;
    name: string;
}

function createSquareConfig(config: ISquareConfig): ISquareValue {
    return {
        ...config,
    };
}

let square: ISquareValue = createSquareConfig({
    color:'red',
    name: 'Square name',
});

console.log('square=',square)



/*
只读属性
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

*/

interface IPoint{
    readonly x:number
    readonly y:number
}

/*
TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了
，因此可以确保数组创建后再也不能被修改：
*/

let Rarr: number[] = [1, 2, 3, 4];
let ra: ReadonlyArray<number> = Rarr;

/*

上面代码的最后一行，
可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
 但是你可以用类型断言重写：
*/
Rarr = ra as number[];

//只读对象
let Obj: object ={name:'name',address:'g x'};
let RObj: Readonly<object> = Obj;
 
console.log('RObj==',RObj)


export default{}