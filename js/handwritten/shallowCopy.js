// Array
//---------------------------------------------
//方法1 Array.slice
//如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。
// 两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的
// 这个元素也会发生改变。
// 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷
// 贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());

//---------------------------------------------
//方法2 Array.concat


var arr = [{old: 'old'}, ['old'],33];

var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new';
arr[2]=22;

console.log(arr); // [{old: 'new'}, ['new'],22]
console.log(new_arr) ;// [{old: 'new'}, ['new'],33]


//---------------------------------------------
//方法3 扩展运算符

var arr = [{old: 'old'}, ['old'],33];

var new_arr =[...arr];

arr[0].old = 'new';
arr[1][0] = 'new';
arr[2]=22;

console.log(arr); // [{old: 'new'}, ['new']，22]
console.log(new_arr) ;// [{old: 'new'}, ['new']，33]

//---------------------------------------------
//方法4 Array.from 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

var arr = [{old: 'old'}, ['old'],33];

var new_arr =Array.from(arr);

arr[0].old = 'new';
arr[1][0] = 'new';
arr[2]=22;

console.log(arr); // [{old: 'new'}, ['new']，22]
console.log(new_arr) ;// [{old: 'new'}, ['new']，33]

//---------------------------------------------
//方法5 循环赋值

var arr = [{old: 'old'}, ['old'],33];

var new_arr =Array(arr.length);

for(i=0;i<arr.length;i++){
    new_arr[i]=arr[i];
}

arr[0].old = 'new';
arr[1][0] = 'new';
arr[2]=22;

console.log(arr); // [{old: 'new'}, ['new']，22]
console.log(new_arr) ;// [{old: 'new'}, ['new']，33]


//Object
//---------------------------------------------
//方法1 object.assign
var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2 = Object.assign({}, obj1);
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'bbb', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }


//---------------------------------------------
//方法2 扩展运算符
var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2 ={...obj1};
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'bbb', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }


//---------------------------------------------
//方法3 Object.keys 循环赋值
var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2={}
Object.keys(obj1).forEach(item=>{
    obj2[item]=obj1[item];
});
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'bbb', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }





//通用浅拷贝封装
function shallowCopy(obj){
    if(typeof obj!=='object'||obj===null) return;
    var newObj=Array.isArray(obj)?[]:{};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key]
        }
    }
    return newObj;
}

var obj1 = { person: {name: "aaa", age: 22},sports:'basketball' };
var obj2=shallowCopy(obj1)
obj2.person.name = "bbb";
obj2.sports = 'football';
console.log(obj1); // { person: { name: 'bbb', age:22 }, sports: 'basketball' }
console.log(obj2);// { person: { name: 'bbb', age:22 }, sports: 'football' }
