// function Persion(name) {
//   this.name = name
// }

// let p = new Persion('wn')
// p.__proto__ = Persion.prototype
// console.log(p.__proto__)
// console.log(Persion.__proto__)
// console.log(Function.__proto__)


// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)  // valA
// console.log(foo.b)  // undefined
// console.log(F.a)    // valA
// console.log(F.b)    // valB

// function Persion(name) {
//   this.name = name
//   return 1
// }
// let p = new Persion('wn')
// console.log(p)
Array.prototype.method = function() {}
var myArray = [1, 2, 3, 4, 5, 6, 7]
myArray.name = '蜗牛'
for (let index in myArray) {
  console.log(index)
}
for (let index of myArray) {
  console.log(index)
}
// for in
// 1. index是索引，不能直接进行几何运算
// 2. 遍历顺序可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历数组的所有可枚举属性， 包括原型

// for of
// 1. 遍历的是数组的元素
// 2. 遍历不包括数组的原型和索引