- leetcode 是大厂出算法题的来源
- minLen 0-minLen 皆有可能
  取出部分，str[0] str[01] str[02]...str[0minlen]
  for(let i=0;i < str[i].length;i++){
      strs[i].startsWith(str[02])
  }

  从后面开始[0minLen] [0minLen-1]
  概率是一样的，中间  二分查找

- 二分查找
  每次从中间查找，符合概率 每次都可以排除一般的元素
  low middle high 重复的去做计算， 并响应调整

  位移运算 >> 除2 取整 
  算法 时间复杂度 0(n) log2N