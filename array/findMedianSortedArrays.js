// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

 

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getMin = function(num1, num2) {
  if (nums1.length === 0) {
    return num2.shift()
  } else if (num2.length === 0) {
    return num1.shift()
  } else if (num1[0] < num2[0]) {
    return num1.shift()
  } else {
    return num2.shift()
  }
}
var findMedianSortedArrays = function(nums1, nums2) {
  var m_length = nums1.length;
  var n_length = nums2.length;
  var is_odd = !((m_length + n_length) % 2)
  var middle_pos = Math.floor((m_length + n_length) / 2)
  var middle = 0
  while(middle_pos > 0) {
    middle = getMin(nums1, nums2)
    middle_pos--
  }
  if (is_odd) {
    middle =  (middle + getMin(nums1, nums2)) / 2
  } else {
    middle = getMin(nums1, nums2)
  }
  return middle
};

var nums1 = [1, 3]
var nums2 = [2]
findMedianSortedArrays(nums1, nums2)
