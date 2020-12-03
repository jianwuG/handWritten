//1.Es6+
 const arrLike={
     0: 3,
     1: 4,
     2: 5,
     length: 3
 };
function toArray1(likeArr){
    return Array.from(likeArr);
}

function C(a,b){

    console.log(arguments,arguments instanceof Array,arguments instanceof Object,Array.isArray([...arguments]));
    //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ] false  true
    console.log(toArray1(arguments));     //     [1, 2]
    console.log([...arguments]);

}
C(1,2);


toArray1(arrLike)



//2.Es5

//稀松数组会有问题
Array.apply(null, arrLike)
Array.prototype.concat.apply([], arrLike)
Array.prototype.slice.call(arrLike)
Array.prototype.map.call(arrLike, x => x)
Array.prototype.filter.call(arrLike, x => 1)


//稀松数组会有问题
//最终类数组转数组方法

Array.from(arrLike)
Array.apply(null, arrLike)
Array.prototype.concat.apply([], arrLike)



//3.总结
//定义：不是函数，有 length 属性，且 length 属性值是不大于 Number.MAX_SAFE_INTEGER 的自然数
//类数组是指在写法上跟数组一样，比如argumens，函数的第一个参数是argument[0]，写法上跟数组一样，但是不是数组，他的原型是Object。
// 常见的类数组:
//1.document.getElementsByTagName
//2.document.querySelectorAll
// function arguments


// 转换方案：
// es6+ ： 1.Array.from(arrLike); 2.[...arrLike] (要注意是否是iterable object 可迭代对象)
//es5 :1. Array.apply(null,arrLike) 2.Array.prototype.concat.apply([],arrLike);




//4.稀疏数组
//Array(100) 将会创建一个稀疏数组 (sparse array)，即不存在真实元素，节省内存空间。在控制台上显示为 [empty]

Array.from(Array(5),x=>1)

Array.apply(null,Array(6)).map(x=>1)


