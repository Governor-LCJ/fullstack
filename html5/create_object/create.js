function create(obj) {
    // 返回一个实例对象
    // 对象，它的原型是obj
    // xxx.__proto__ = obj;
    // return xxx;
    
}

var Person = {
    name:"noname",
    age:0,
    greet:function() {
        console.log(`Hello,${this.name}`);
    }
}

var tom = create(Person);