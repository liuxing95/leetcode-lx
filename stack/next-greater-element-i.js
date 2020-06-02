// 496. 下一个更大元素 I

// 给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。


// 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出: [-1,3,-1]
// 解释:
//     对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
//     对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
//     对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 单调栈
  // 把nums2的下一个更大元素 兑换成 map映射
  var temp_stack = []
  var temp_obj = {}
  while(nums2.length !== 0) {
    const lastStack = temp_stack[temp_stack.length - 1]
    const first = nums2[0]
    if (temp_stack.length === 0 || lastStack > first) {
      
    } else {
      while(temp_stack[temp_stack.length - 1] < first) {
        temp_obj[temp_stack[temp_stack.length - 1]] = first
        temp_stack.pop()
      }
      
    }
    temp_stack.push(first)
    nums2 = nums2.slice(1)
  }
  while(temp_stack.length !== 0) {
    var temp = temp_stack.pop()
    temp_obj[temp] = temp_obj[temp] || -1
  }
  for(var i =0, l = nums1.length; i < l; i++) {
    nums1[i] = temp_obj[nums1[i]]
  }
  console.log(nums1)
  return nums1
};

// nextGreaterElement([4,1,2], [2,3,5,1,0,7,3])
nextGreaterElement([4,1,2], [1,3,4,2])