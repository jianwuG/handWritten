//----------------------------------------------
//方法1 JSON.parse(JSON.stringify())
//缺点：1.会忽略undefined
//      2.忽略symbol
//      003.不能序列化函数
//      4.不能解决循环引用
//      5.不能正确处理new Date()
//      6.不能处理正则
//      7.+Infinity,-Infinity,NAN会被转为null

var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2=JSON.parse(JSON.stringify(obj1))
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'aaa', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }

// 例1
// undefined symbol 函数被忽略
var obj = {
    name: 'aaa',
    a: undefined,
    b: Symbol('aaa'),
    c: function() {}
}
console.log(obj);  //{name: "aaa", a: undefined, b: Symbol(aaa), c: ƒ}

var b = JSON.parse(JSON.stringify(obj));
console.log(b); //{name: "aaa"}

// 例2
// 循环引用情况下，会报错。
var obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}
obj.a = obj.b;
obj.b.c = obj.a;

var b = JSON.parse(JSON.stringify(obj)); //VM859:1 Uncaught SyntaxError: Identifier 'obj' has already been declaredat <anonymous>:1:1

//例3
//时间转换错误
//解决方案：new Date().valueOf()


var obj={
    name:'aaa',
    date:new Date()
}
console.log(obj);  //{name: "aaa", date: Mon Nov 09 2020 13:42:27 GMT+0800 (中国标准时间)}
JSON.parse(JSON.stringify(obj));//{name: "aaa", date: "2020-11-09T05:42:27.042Z"}

//例4
//正则转为对象
let obj = {
    name: "aa",
    a: /'123'/
}
console.log(obj);
// {name: "aa", a: /'123'/}

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "aa", a: {}}
//----------------------------------------------


//方法2 递归+浅拷贝模拟

function deepCopy(obj){
    if(isObject(obj)) return;
    var newObj=Array.isArray(obj)?[]:{};

    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=!isObject(obj[key])?deepCopy(obj[key]):obj[key]
        }
    }
    return newObj;
}

function isObject(obj){
    return typeof obj!=='object'||obj===null
}

var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2=deepCopy(obj1)
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'aaa', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }
