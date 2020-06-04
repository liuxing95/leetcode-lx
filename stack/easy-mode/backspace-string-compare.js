// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var arr_s = []
    var arr_t = []
    while(S !== '') {
      var first = S[0]
      if ( first === '#') {
        arr_s.pop()
      } else {
        arr_s.push(first)
      }
      S = S.slice(1)
    }

    while(T !== '') {
      var first = T[0]
      if ( first === '#') {
        arr_t.pop()
      } else {
        arr_t.push(first)
      }
      T = T.slice(1)
    }

    if (arr_s.join('') === arr_t.join('')) return true
    return false
};

console.log(backspaceCompare('ab##', 'c#d#'))