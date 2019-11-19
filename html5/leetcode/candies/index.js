// es6 新特性
const distributeCandies = function (candies) {
  //糖果种类数
  var count = 0;//种类数 unique
  let obj = {};
  candies.forEach(function(item) {
    //如果出现过
    if (!obj[item]) {
      obj[item] = 1;//出现过了
      count ++;//加上种类数
    }
  })
  return count >= (candies.length / 2) ? (candies.length >> 1) : candies;
}

console.log(distributeCandies([1,1,2,2,3,3]))