## 一、Promise介绍
callback -> promise -> generator -> async/await

### 基本结构
```
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED')
  }, 1000)
})

```

构造函数Promise必须接受一个函数作为参数，我们称该函数为handle，
handle又包含resolve和reject两个参数，它们是两个函数。

### 状态和值
Promise 对象存在以下三种状态：
* Pending(进行中)
* Fulfilled(已成功)
* Rejected(已失败)

状态只能由 Pending 变为 Fulfilled 或由 Pending 变为 Rejected ，
且状态改变之后不会在发生变化，会一直保持这个状态。


##### resolve 和 reject

* resolve : 将Promise对象的状态从 Pending(进行中) 变为 Fulfilled(已成功)
* reject : 将Promise对象的状态从 Pending(进行中) 变为 Rejected(已失败)
* resolve 和 reject 都可以传入任意类型的值作为实参，表示 Promise 对象成功（Fulfilled）和失败（Rejected）的值

```
状态只能由 Pending 变为 Fulfilled 或由 Pending 变为 Rejected ，
且状态改变之后不会在发生变化，会一直保持这个状态。

```
promise是用来解决：
* 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象
* promise可以支持多个并发的请求，获取并发请求中的数据
* 这个promise可以解决异步的问题，本身不能说promise是异步的



## 二、Promise使用


构造函数Promise必须接受一个函数作为参数，我们称该函数为handle，
handle又包含resolve和reject两个参数，它们是两个函数。

Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
* resolve ：异步操作执行成功后的回调函数
* reject：异步操作执行失败后的回调函数


* then 链式操作
```
    let p = new Promise((resolve, reject) => {
        //做一些异步操作
      setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<=5){
                resolve(num);
            }
            else{
                reject('数字太大了');
            }
      }, 2000);
    });
    p.then((data) => {
            console.log('resolved',data);
        },(err) => {
            console.log('rejected',err);
        }
    ); 

```

* catch的用法

```
p.then((data) => {
    console.log('resolved',data);
}).catch((err) => {
    console.log('rejected',err);
});

```

* all

谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象

```
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})

let p = Promise.all([Promise1, Promise2, Promise3])

p.then(funciton(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})

```

* race

谁跑的快，以谁为准执行回调

## 三、手写

```
[手写Promise](promise.js)
