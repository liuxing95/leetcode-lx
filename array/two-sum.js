// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length < 2) return [-1, -1]
  let index = 0
  while(nums.length > 0) {
    const fistValue = nums.shift()
    const secondIndex= nums.findIndex(item => item === target - fistValue)
    if (secondIndex !== -1) {
      return [index, secondIndex + index + 1]
    }
    index++
  }
  return [-1, -1]
};

console.log(twoSum([3,2,4], 6))