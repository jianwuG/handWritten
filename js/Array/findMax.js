//取数组中的最大值/最小值

//----------------------------------------------------------------------
//方法1 循环+Math.max Math.min()
var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMin(arr,isMax = true){
    let result=arr[0];
    arr.forEach(item=>{
        result=isMax?Math.max(result,item):Math.min(result,item)

    });
    return result

}

getMaxOrMin(arr);


//----------------------------------------------------------------------
//方法2 reduce+Math.max Math.min

var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMinByReduce(arr,isMax = true){
   return arr.reduce((pre,next)=>{
       return isMax?Math.max(pre,next):Math.min(pre,next);
   })

}

getMaxOrMinByReduce(arr);


//----------------------------------------------------------------------
//方法3 排序

var arr=[1,1,2,33,22,0,223,55,-1,221,324];

function getMaxOrMinBySort(arr,isMax = true){
    arr.sort((a,b)=>a-b);
    return isMax?arr[arr.length-1]:arr[0];
}

getMaxOrMinBySort(arr,false);


//----------------------------------------------------------------------
//方法4 es6扩展运算符+Math.max Math.min


var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMinByEs6(arr,isMax = true){
    return isMax?Math.max(...arr):Math.min(...arr);

}

getMaxOrMinByEs6(arr);

//----------------------------------------------------------------------
//方法5 apply+Math.max Math.min
var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMinByApply(arr,isMax = true){
    return isMax?Math.max.apply(null,arr):Math.min.apply(null,arr);

}

getMaxOrMinByApply(arr);

//----------------------------------------------------------------------
//方法6 eval+ Math.max Math.min
var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMinByApply(arr,isMax = true){
    return eval("isMax?Math.max("+arr+"):Math.min("+arr+");")

}

getMaxOrMinByApply(arr,false);


var arr=[1,1,2,33,22,0,223,55,-1,221,324];


function getMaxOrMinByApply2(arr,isMax = true){
    return isMax?Math.max.apply(Math,arr):Math.min.apply(Math,arr)

}

getMaxOrMinByApply2(arr,false);
