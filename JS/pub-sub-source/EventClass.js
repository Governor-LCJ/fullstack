const subPub = {
    'price':[],
    'paraer':[]
}
//price 对应的方法执行一遍



class Events {
    constructor() {
        this.listener = {};
    }
    on(key,fn) {
        if(!this.listener[key]) {
            this.listener[key] = [];
        }
        this.listener[key].push(fn);
        // this.listener.push(fn);
    }

    emit() {
        for(let fn of this.listener) {
            fn()
        }
    }
}
function foo() {
    console.log('foo');
}

subPub.foo = [foo]
console.log(subPub);
//在 subPub 上面添加一个 value 为数组的 key (foo)
//将 key 放入数组

const ev = new Events();
ev.on(() => {console.log(1)})
ev.on(() => {console.log(2)})
for(let i =0; i<subPub.price.length;i++) {
    ev.on(subPub.price[i])
}
ev.emit();//执行的