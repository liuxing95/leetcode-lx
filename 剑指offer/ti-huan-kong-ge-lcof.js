// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."
 

// 限制：

// 0 <= s 的长度 <= 10000

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  if (typeof s == "string" && s.length >= 0 && s.length <= 10000) {
    return s.split(' ').join('%20');
  }
  return '';
};
