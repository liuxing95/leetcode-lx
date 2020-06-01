// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

// 输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
const { generateLine } = require('./generateLine.js')
const l1 = generateLine([1, 2, 3, 3, 2, 1])
var removeDuplicateNodes = function(head) {
  var obj = {}
  var prev = null
  var current = head
  while(current !== null) {
    if (obj[current.val]) {
      prev.next = current.next;
      current = prev.next;
    } else {
      obj[current.val] = true
      prev = current
      current = current.next
    }
  }
  return head
};

removeDuplicateNodes(l1)