// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   // 先排序
//   nums = nums.sort((a, b) => a - b)
//   // len 
//   // 三节点
//   // i 从0 到 len - 2
//   // j 从 i + 1 到 len -1
//   // k 从 len -1 到 大于 j 且 nums[k] > 0
//   var len = nums.length
//   var sum_zero_arr = []
//   for (var i = 0; i < len - 2; i++) {
//     for (var j = i + 1; j < len -1; j++) {
//       if (nums[i] + nums[j] > 0) break
//       var k = len - 1
//       while(k > j && nums[k] >= 0) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           sum_zero_arr.push([nums[i], nums[j], nums[k]])
//         }
//         k--
//       }
//     }
//   }
//   return Array.from(new Set(sum_zero_arr.map(item => item.join(',')))).map(item => item.split(',').map(item => +item))
// };

var threeSum = function(nums) {
  // 先排序
  nums = nums.sort((a, b) => a - b)
  // len 
  // i 从0 到 len - 2
  // j k 双指针
  var len = nums.length
  var sum_zero_arr = []
  for (var i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    var j = i + 1;
    var k = len - 1
    var sum = 0 - nums[i]
    while(j < k) {
      if (nums[j] + nums[k] === sum) {
        sum_zero_arr.push([nums[i], nums[j], nums[k]])
        while(j < k && nums[j + 1] === nums[j]) {
          j++
        }
        while(j < k && nums[k - 1] === nums[k]) {
          k--
        }
        j++;
        k--;
      } else if (nums[j] + nums[k] < sum) {
        j++
      } else {
        k--
      }
    }
  }
  return sum_zero_arr
};


var result = threeSum([0,0,0,0,0,0])
var result1 = threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])
debugger