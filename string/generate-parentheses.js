// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//  

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var left = 0, right = 0
  var generate_arr = []

  var generateString = function(str, left, right) {
    // 成功的终结条件
    if (left === n && right === n) {
      generate_arr.push(str)
      return
    }

    // 下一个递归进入的条件
    left < n && generateString(str + '(', left + 1, right)
    right < n && left > right && generateString(str + ')', left, right + 1)
  }

  generateString('', left, right)
  return generate_arr
};

generateParenthesis(3)