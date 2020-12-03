
const PENDING='pending';
const REJECTED='rejected';
const RESOLVED='resolved';


class MyPromise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;
        this.reason=undefined;

        //promise必须支持异步
        //发布订阅者模式
        this.onResolvedCallbacks = [];// 专门存放成功的回调函数
        this.onRejectedCallbacks = [];// 专门存放失败的回调函数

        try {
            executor(this.resolve.bind(this),this.reject.bind(this) )
        }
        catch (e) {
            console.log('catch错误', e);
            this.reject.bind(this,e); //如果内部出错 直接将error手动调用reject向下传递
        }
    }

      resolve=value=>{
        if(this.status===PENDING){
            this.value=value;
            this.status=RESOLVED;
            this.onResolvedCallbacks.forEach(fn => fn());
        }
    };
    reject=reason=>{
        if(this.status===PENDING){
            this.reason=reason;
            this.status=REJECTED;
            this.onRejectedCallbacks.forEach(fn => fn());
        }
    };

    then=(onfulfilled,onrejected)=>{
        if(this.status===RESOLVED){
            onfulfilled(this.value)
        }
        else if(this.status===REJECTED){
            onrejected(this.reason)
        }
        if (this.status === PENDING) {
            // this.onResolvedCallbacks.push(onfulfilled); 这种写法可以换成下面的写法，多包了一层，这叫面向切片编程，可以加上自己的逻辑
            this.onResolvedCallbacks.push(() => {
                // TODO ... 自己的逻辑
                onfulfilled(this.value);
            });
            this.onRejectedCallbacks.push(() => {
                // TODO ... 自己的逻辑
                onrejected(this.reason);
            });
        }

    };
}
var promise3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('123456');
    }, 1000);
});
// 发布订阅模式应对异步 支持一个promise可以then多次
promise3.then((res) => {
    console.log('成功的结果1', res);
}, (error) => {
    console.log('失败的结果1',error);
});

promise3.then((res) => {
    console.log('成功的结果2', res);
}, (error) => {
    console.log('失败的结果2',error);
});


// var promise=new MyPromise((resolve,reject)=>{
//     try {
//         resolve('123456')
//     }catch (e) {
//         reject(e)
//     }
// });
// promise.then(res=>{
//     console.log(res);
// },rej=>{
//     console.log('fail!',rej);
// });
// console.log('my promise ：',promise);
