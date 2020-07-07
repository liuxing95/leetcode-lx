// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释: 
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]

// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. 暴力解法
var rotate = function(nums, k) {
  var temp, previous
  k = k % nums.length
  for (var i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    for (var j = 0; j < nums.length; j++) {
      var temp = nums[j];
      nums[j] = previous;
      previous = temp
    }
  }
  return nums
};
console.log(rotate([1,2,3,4,5,6,7], 13))


// 2.  先整体翻转  然后翻转后面
var reverse = function(nums, start, end) {
  while(start < end) {
    var temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
var rotate = function(nums, k) {
  k = k % nums.length
  // 先整体翻转数组
  reverse(nums, 0, nums.length -1)

  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

  return nums
}

console.log(rotate([1,2,3,4,5,6,7], 13))
