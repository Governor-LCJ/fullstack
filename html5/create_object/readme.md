- new 的过程
    1.创建应该空对象{}
    2.new functionA (){}
    函数运行时，会产生几个必有的对象
    动态决定
    this{}<=this.name
    functionA不是以new的方式来运行时？普通函数，this指向window 

- 面向对象的做法，三种
    1.constructor + prototype 基于原型
    es6  class 关键字
    Object.create（原型对象）

- 手写代码是js考试的方式
    Object.create()
    function F()