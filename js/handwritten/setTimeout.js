/**
 *
 */

class MySetInterVal {

    tasks = [];

    add(name, func, time) {
        if (!name || !func || typeof func !== 'function') return;
        this.tasks.push({
            name,
            func,
            time
        });
        this.run(name);
    };

    run(name) {

        let _this=this;
        function inner(){
            let timerInfo=_this.tasks.find(item=>name===item.name);
            // console.log('11111111111111111',_this.tasks);
            if(!timerInfo) return;
            const {func,time}={...timerInfo};
            console.time('timeTest');
            let timer=setTimeout(()=>{
                func();
                console.timeEnd('timeTest');
                clearTimeout(timer);
                inner();
            },time)
        }
        inner();

    };

    clearTasksItem(name) {
        let index = this.tasks.findIndex(item => item.name === name);
        if (index === -1) return;
        this.tasks.splice(index, 1);
    };

    clearTask() {
        this.tasks = [];
    };



}


const MyInterVal = new MySetInterVal();
console.time('ccc');

MyInterVal.add('timer', () => {
    console.log('11111111111')
}, 2000);
setTimeout(() => {
    MyInterVal.clearTasksItem('timer');
    console.timeEnd('ccc')
}, 6500);

//有bug 会多一次执行
