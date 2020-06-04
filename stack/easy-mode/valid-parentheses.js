// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
var isValid = function(s) {
  var arr = []
  var obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  // 起一个栈  左侧字符 入站  右侧字符判断是否一致  一致则出栈
  while(s !== '') {
    var first = s[0]
    if (first !=='') {
      if (first === '(' || first === '{' || first === '[') {
        arr.push(first)
      } else {
        var pop = arr.pop()
        if (obj[pop] !== first) return false
      }
    }
    s = s.slice(1)
  }
  if (arr.length === 0) return true
  return false
};

console.log(isValid('{{}}')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('{[]}')) // true