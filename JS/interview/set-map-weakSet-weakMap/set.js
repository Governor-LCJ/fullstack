// // set
// var a = new Set()   // 类似数组，成员是值是唯一的

// Array.from([2, 3, 4, 5, 6, 4, 2, 3]).forEach(x => a.add(x))

// for (let i of a) {
//   console.log(i)
// }

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log(items.length)   // undefined
// console.log(items.size)     // 5

let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// console.log(set)
// console.log(set.size)
// 对于Set而言 NaN是相等的

// set.add({})
// console.log(set.size)
// set.add({})
// console.log(set.size)
// // 对于Set而言 空对象是不等的
// let s = new Set()
// s.add(1), s.add(1), s.add(1)
// console.log(s.size)
// console.log(s.has(1))
// s.delete(1)
// console.log(s.has(1))

// const item = new Set([1, 2, 3, 4])
// const array = Array.from(item)
// console.log(array)

let set = new Set(['red', 'green', 'blue'])
for(let i in set.keys()) {
  console.log(i)
}
for(let i of set.keys()) {
  console.log(i)
}
for(let i of set.values()) {
  console.log(i)
}
for(let i of set.entries()) {
  console.log(i)
}

// let arr = [...set]
// console.log(arr)

// let testArr = [1, 2, 3, 4, 3, 2]
// let unique = [...new Set(testArr)]

let oSet = new Set([1, 2, 3])
oSet = [...oSet].map(x => x * 2)
console.log(oSet)

let b = new Set([4, 3, 2])
// 并集
let union = new Set([...oSet, ...b])

// 交集
let intersect = new Set([...oSet].filter(x => b.has(x)))
console.log(union)