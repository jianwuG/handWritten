[对象浅拷贝](shallowCopy.js)
* 数组
    * Array.prototype.slice
    * Array.prototype.concat
    * 扩展运算
    * 循环赋值
    * Array.from
* 对象
    * Object.assign
    * 扩展运算
    * Object.keys 循环赋值
    
* 通用浅拷贝封装
    

[对象深拷贝](deepCopy.js)

[参考](https://www.jianshu.com/p/b084dfaad501)

* JSON.parse(JSON.stringify())
  * 1.会忽略undefined
  * 2.忽略symbol
  * 3.不能序列化函数
  * 4.不能解决循环引用
  * 5.不能正确处理new Date()
  * 6.不能处理正则
  * 7.+Infinity,-Infinity,NAN会被转为null
* 浅拷贝+递归 (待完善)






