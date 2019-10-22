- es5
    在js中，函数是一等公民
    js的过去 没有class 关键字
    类的构造函数
    定义了一个类，
    new LRUCache 可以被实例化
    new 的过程发生了什么？
    生成了一个对象 { } Object
    内存中空的 { } new
    加上属性 构造函数 this

    面向对象 类， 构造函数  方法 属性
        class   constructor
    function A  函数本身  prototype this.
    函数具有prototype属性
    火车头 constructor prototype对象
    基于原型的面向对象

    - 任何函数都有prototype属性 它的值是对象，
    key=>function() {}
    - 任何对象都是__proto__,指向 构造函数的prototype属性
    JS的面向对象，类和实例关系， 不是父子关系，没有血缘
    基于原型的
    - new的过程 构造函数 被执行， 创造一个this指向对象
    加了属性 对象的__proto__属性 找到原型链上的方法
    cache instanceof LRUCache
    JS中没有类的概念，LRUCache也是对象
- es6