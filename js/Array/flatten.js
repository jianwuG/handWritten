// 数组扁平化



//方法1  递归

var arr=[1,2,[2,3],[3,3,[2,3,[2,3,3]]]];

function flattenByNomal(arr){
    if(!Array.isArray(arr)) return;
    let newArr=[];

    for(let i=0,length=arr.length;i<length;i++){
        if(Array.isArray(arr[i])){
            newArr=[...newArr,...flattenByNomal(arr[i])]
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
flattenByNomal(arr);

// ---------------------------------------------------------
//方法2 toString

var arr=[1,2,[2,3],[3,3,[2,3,[2,3,3]]]];

function flattenByToString(arr){
    if(!Array.isArray(arr)) return;

    return arr.toString().split(',').map(item=>+item);
}
flattenByToString(arr);


// ---------------------------------------------------------
//方法3 reduce

var arr=[1,2,[2,3],[3,3,[2,3,[2,3,3]]]];

function falttenByReduce(arr){
    if(!Array.isArray(arr)) return;
    return arr.reduce((falttenList,item)=>{
        return falttenList.concat(Array.isArray(item)?falttenByReduce(item):item)
    },[])
}
falttenByReduce(arr);



// ---------------------------------------------------------
//方法4 es6解构
var arr=[1,2,[2,3],[3,3,[2,3,[2,3,3]]]];

function flattenByDeconstruction(arr){
    if(!Array.isArray(arr)) return;
    while(arr.some(item=>Array.isArray(item))){
      arr=[].concat(...arr);
    }
  return arr;
}
flattenByDeconstruction(arr);
// ---------------------------------------------------------
//方法5 flat语法 兼容性不高

var arr=[1,2,[2,3],[3,3,[2,3,[2,3,3]]]];

function flattenByHigh(arr,num = Infinity){
    if(!Array.isArray(arr)) return;
    return arr.flat(num);
}
flattenByHigh(arr);


