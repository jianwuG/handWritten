## 一、Promise介绍
callback -> promise -> generator -> async/await

解决问题：
* 解决回调地狱
* 模块化：代码更具有可维护性和可读性(数据请求和数据处理分开)

### 基本结构

#### 状态和值
一、Promise 对象存在以下三种状态：
* Pending(进行中)  等待中，或者进行中，表示还没有得到结果
* resolved(Fulfilled已成功)  已经完成，表示得到了我们想要的结果，可以继续往下执行
* Rejected(已失败) 也表示得到结果，但是由于结果并非我们所愿，因此拒绝执行

这三种状态不受外界影响，而且状态只能从pending改变为resolved或者rejected，
并且不可逆。在Promise对象的构造函数中，将一个函数作为第一个参数。而这个函数
，就是用来处理Promise的状态变化。

```
new Promise((resolve, reject) => {
  if(true) { resolve() };
     if(false) { reject() };
})

```
上面的resolve和reject都为一个函数，他们的作用分别是将状态修改为resolved和rejected。

二、Promise对象中的then方法

可以接收构造函数中处理的状态变化，并分别对应执行。then方法有2个参数，第一个函数接收resolved
状态的执行，第二个参数接收reject状态的执行。

```

function fn(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == 'number') {
            resolve();
        } else {
            reject();
        }
    }).then(function() {
        console.log('参数是一个number值');
    }, function() {
        console.log('参数不是一个number值');
    })
}

fn('hahha');
fn(1234);


```
then方法的执行结果也会返回一个Promise对象。
因此我们可以进行then的链式执行，这也是解决回调地狱的主要方式。

then(null, function() {}) 就等同于catch(function() {})


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

 在Promise的原型上有一个then方法，会在promise的executor执行后根据不同情况执行
 
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

```


参考

[Promise(1)-手写Promise](https://juejin.cn/post/6844904088963022856#heading-1)

[Promise详解](https://juejin.cn/post/6844903633050419207)

[异步解决方案----Promise与Await](https://juejin.cn/post/6844903620878532616)
