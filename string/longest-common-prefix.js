// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 筛选出 strs 中最短的字符串
  let min_str = strs[0]
  for (let i = 1; i < strs.length; i++) {
    min_str = min_str.length > strs[i].length ? strs[i] : min_str
  }
  if (!min_str) return ''
  while(min_str) {
    if (isCommonPrefix(strs, min_str)) break;
    min_str = min_str.slice(0, min_str.length -1)
  }
  return min_str
};

var isCommonPrefix = function(strs, prefix) {
  var is_common_prefix = true
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].indexOf(prefix) !== 0) {
      is_common_prefix = false
      break;
    }
  }
  return is_common_prefix
}
longestCommonPrefix(["flwd","flow","flight"])
longestCommonPrefix(["","flow","flight"])
longestCommonPrefix(["dog","flow","flight"])
