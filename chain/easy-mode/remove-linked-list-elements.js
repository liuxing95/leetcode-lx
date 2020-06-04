// https://leetcode-cn.com/problems/remove-linked-list-elements/

// 删除链表中等于给定值 val 的所有节点。

const { generateLine } = require('./generateLine.js')
const l1 = generateLine([1,2,6,7])
var removeElements = function(head, val) {
  var temp = head
  while(temp !== null && temp.next !== null) {
    if (temp.next.val === val) {
      temp = temp.next
    }
    temp = temp.next
  }
  console.log(head)
  return head
};

removeElements(l1, 6)