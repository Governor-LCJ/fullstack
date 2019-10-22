function LRUCache(capacity) {
    this.capacity = capacity;//容量
    this.obj = {};//方便实现get put
    this.arr = [];//优先级
    // push splice pop unshift
}

LRUCache.prototype.get = function (key){
  
    var val = this.obj[key];
    if(val) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return val;
    }else{
        // 数据不存在，返回-1
        return -1;
    }
    return this.obj[key] 
}

LRUCache.prototype.put = function (key,value){
    if(this.obj[key]){
        //已存在容器中
        this.obj[key] = value;//更新数值
        //调整数值的优先级，找到 删除 移入前面
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return ;
    }
    if(this.capacity === this.arr.length){
        //已经放满了
        var k =this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key);//放入最前面，最前面是最优先
}


let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(2));
cache.put(4,4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
// console.log(cache.arr,cache.obj);

// push 最后一个元素是 最重要的
// [0]元素是可以被删除的