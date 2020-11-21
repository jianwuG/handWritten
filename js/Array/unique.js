//数组去重


var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];

//方法1 Array.from+Set
//优点：简单，可以筛选NaN
//缺点：无法处理数组和对象
// 0.0390625 ms

console.time('ES6中Set耗时：');
Array.from(new Set(oldArray));
console.timeEnd('ES6中Set耗时：');


// ---------------------------------------------------------

//方法2  indexOf
//优点：使用es5语法，兼容性高
//缺点：无法处理NaN,数组,对象
//0.1240234375 ms
var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];

function uniqueByIndexOf(arr){
    if(!Array.isArray(arr)) return;
    let newArray=[];
    arr.forEach(item=>{
        newArray.indexOf(item)===-1&&newArray.push(item)
    })

    return newArray;

}

console.time('uniqueByIndexOf耗时：');
var result=uniqueByIndexOf(oldArray);
console.timeEnd('uniqueByIndexOf耗时：');
console.log('uniqueByIndexOf',result);

// ------------------------------------------------------------
//方法3 includes
//优点：可以处理NaN
//缺点：无法处理数组和对象
//0.123046875 ms

var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];


function uniqueByIncludes(arr){
    if(!Array.isArray(arr)) return;
    let newArray=[];
    arr.forEach(item=>{
        !newArray.includes(item)&&newArray.push(item)
    });

    return newArray;

}
console.time('uniqueByIncludes耗时：');
var result=uniqueByIncludes(oldArray);
console.timeEnd('uniqueByIncludes耗时：');
console.log('uniqueByIncludes',result);


// ------------------------------------------------------------
//方法4 filter和indexOf方法
//优点：代码量少，代码优雅
//缺点：filter无法处理NaN，NaN被忽略，新的数组没有NaN
//0.11572265625 ms
var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];


function uniqueByFilter(arr){
    if(!Array.isArray(arr)) return;

    return arr.filter((item,index)=>{
        return arr.indexOf(item,0)===index;
    })

}

console.time('uniqueByFilter耗时：');
var result=uniqueByFilter(oldArray);
console.timeEnd('uniqueByFilter耗时：');
console.log('uniqueByFilter',result);

// ------------------------------------------------------------
//方法5 双层循环
//优点：兼容性高
//缺点：无法处理NaN，数组，对象
// 0.0859375 ms

var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];


function uniqueByDouble(arr) {

    if(!Array.isArray(arr)) return;
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = arr.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (arr[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(arr[i])
        }
    }
    return res;
}

console.time('uniqueByDouble耗时：');
var result=uniqueByDouble(oldArray);
console.timeEnd('uniqueByDouble耗时：');
console.log('uniqueByDouble',result);



// ------------------------------------------------------------
//方法6 排序,然后前后两个数据进行对比
//优点：
//缺点：
// 0.2099609375 ms
//拓展 是否已排过序，是否不区分大小写

var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];


function uniqueBySort(arr) {
    if(!Array.isArray(arr)) return;
    let sortArray=arr.sort(),newArray=[];
    var nowItem;
    for(i=0,length=sortArray.length;i<length;i++){
        if(!i||nowItem!==sortArray[i]){
            newArray.push(sortArray[i]);
        }
        nowItem=sortArray[i];
    }
    return newArray;

}
console.time('uniqueBySort 耗时：');
var result=uniqueBySort(oldArray);
console.timeEnd('uniqueBySort 耗时：');
console.log('uniqueBySort',result);



// ------------------------------------------------------------
//方法7 Map
//优点：可以处理NaN
//缺点：不能处理对象/数组
// 0.162109375 ms
var oldArray=[1,2,3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];

function uniqueByMap (arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, true))
}

console.time('uniqueByMap 耗时：');
var result=uniqueByMap(oldArray);
console.timeEnd('uniqueByMap 耗时：');
console.log('uniqueByMap',result);


// ------------------------------------------------------------
//方法8 键值对 obj.hasOwnProperty
//优点：可以处理NaN,对象
//缺点：'003'和3被处理
//  0.208251953125 ms

var oldArray=[1,2,'003','2',3,3,3,2,12,11,22,33,'ss','ss',NaN,NaN,{a:1,b:2},{a:1,b:2},[1,2,3],[1,2,3]];


function uniqueByKeyValue(arr){
    if(!Array.isArray(arr)) return;
    var obj={};
    return arr.filter((item,index)=>{
        // return obj.hasOwnProperty(item)?false:(obj[item]=true)
        return obj.hasOwnProperty(typeof item+item)?false:(obj[typeof item+item]=true)
    })

}
console.time('uniqueByKeyValue 耗时：');
var result=uniqueByKeyValue(oldArray);
console.timeEnd('uniqueByKeyValue 耗时：');
console.log('uniqueByKeyValue',result);


//--------------------------------------------------------
//知识点
//1.Set,Array.from()  方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
//2.Map
//003.filter 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
//4.includes
//5.obj.hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。 和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
