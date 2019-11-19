from typing import List

class Solution:
    def distrbuteCandies(self, candies: List[int])->int:
        return min(len(set(candies)), len(candies) >> 1)
x = Solution()
print("最大种类数为：", x.distrbuteCandies([1, 1, 2, 2, 3, 3]))