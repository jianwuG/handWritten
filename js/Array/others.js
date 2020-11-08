//-------------------------------------------------------------------
//1. 两个数组取交集
var arr1=[1,2,3,2,3,55,11];
var arr2=[2,3,4,221];
var newArr=arr1.filter(item=>arr2.includes(item))
Array.from(new Set(newArr));

//-------------------------------------------------------------------
//2.多个数组取交集

function getRepeat(){
    let sumArr=[...arguments].flat(Infinity);
    let newArr= sumArr.filter((item,index)=>{
        return sumArr.lastIndexOf(item)!==sumArr.indexOf(item)
    });
    return Array.from(new Set(newArr));
}

getRepeat([1,2,3,4],[1,2,'2'],[2,2,'2']);

//-------------------------------------------------------------------
//3.多个数组取差集

function getRepeat(){
    let sumArr=[...arguments].flat(Infinity);
    return newArr= sumArr.filter((item,index)=>{
        return sumArr.lastIndexOf(item)===sumArr.indexOf(item)
    })

}

getRepeat([1,2,3,4],[1,2,'2'],[2,2,'2']);