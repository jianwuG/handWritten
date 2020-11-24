//------------------------------------
// 一、查找索引
// 1. Array.prototype.indexOf()
// default:0.17~ 0.501953125ms

const isArray=Array.isArray || function (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}

function findIndexByIndexOf(arr,item){
    if(!isArray(arr)) return;
    return arr.indexOf(item);
}
var arr=[1,2,3,22,33,11,222,3333,5,6,7,86,66,77]
console.time();
console.log(findIndexByIndexOf(arr,3));
console.timeEnd();

//------------------------------------
// 2. Array.prototype.lastIndexOf()
// default:0.17~ 0.501953125ms
function findIndexByLastIndexOf(arr,item){
    if(!isArray(arr)) return;
    return arr.lastIndexOf(item);
}
var arr=[1,2,3,22,33,11,222,3333,5,6,7,86,66,77]
console.time();
console.log(findIndexByLastIndexOf(arr,3));
console.timeEnd();

//------------------------------------
// 3. Array.prototype.findIndex()


function findIndexByFindIndex(arr,item){
    if(!isArray(arr)) return;
    return arr.findIndex(num=>num>item);
}


//------------------------------------
// 自定义查找
// 4.线性查找函数
//0.010009765625ms

/**
 * 线性查找函数
 * @param arr 需要进行查找的数组
 * @param target 需要查找的数据
 * @returns {number} 返回值
 */
const linearSearch = function (arr,target) {
    if(!isArray(arr)) return;
    // 目标元素位置
    let position ;
    for (let i = 0; i < arr.length; i++){
        // 如果当前遍历到的值与目标值相等则返回目标元素的位置
        if(arr[i] === target){
            position = i;
            return position;
        }
    }
    return position;
}

var arr=[1,2,3,22,33,11,222,3333,5,6,7,86,66,77]
console.time();
linearSearch(arr,66);
console.timeEnd();

//------------------------------------
// 自定义查找
// 5.二分法查找(必须是排好序的)
// 0.114990234375ms

function binarySearch(arr,item,start = 0,end = arr.length){
    if(!isArray(arr)) return;
    var middle=Math.floor((start+end)/2);
    if(arr[middle]===item) return middle;
    if(start>=end) return -1;
    if(arr[middle]<item){
        return binarySearch(arr,item,middle,end)
    }
    else{
        return binarySearch(arr,item,start,middle)
    }

}
var arr=[1,2,3,4,5,6,7,8,9,10]
console.time();

binarySearch(arr,3);
console.timeEnd();



//------------------------------------
// 二、判断是否存在
// 1.includes
//VM124:9 default: 0.130126953125 ms

function findIndexByIncludes(arr,item){
    if(!isArray(arr)) return;
    return arr.includes(item);
}
var arr=[1,2,3,22,33,11,222,3333,5,6,7,86,66,77]
console.time();
console.log(findIndexByIncludes(arr,3));
console.timeEnd();

//------------------------------------
// 二、
// 2.Array.prototype.indexOf
function findIndexByIndexOf(arr,item){
    if(!isArray(arr)) return;
    return arr.indexOf(item)>-1;
}


//------------------------------------
// 二、
// 3.Array.prototype.lastIndexOf()
function findIndexByIndexOf(arr,item){
    if(!isArray(arr)) return;
    return arr.lastIndexOf(item)>-1;
}

//------------------------------------
// 二、
// 4.Array.prototype.some()
function findIndexBySome(arr,item){
    if(!isArray(arr)) return;
    return arr.some(num=>num>item);
}


//------------------------------------
// 二、
// 5.Array.prototype.every()
function findIndexByEvery(arr,item){
    if(!isArray(arr)) return;
    return arr.every(num=>num>item);
}


//------------------------------------
// 二、
// 6.Array.prototype.filter()
function findIndexByFilter(arr,item){
    if(!isArray(arr)) return;
    return arr.filter(num=>num>item);
}

//------------------------------------
// 二、
// 6.Array.prototype.find()
function findIndexByFind(arr,item){
    if(!isArray(arr)) return;
    return arr.find(num=>num>item);
}

//------------------------------------
// 二、
// 7.Array.prototype.findIndex()
function findIndexByFindIndex(arr,item){
    if(!isArray(arr)) return;
    return arr.findIndex(num=>num>item);
}


//indexOf算法 https://www.cnblogs.com/rubylouvre/p/6658625.html
