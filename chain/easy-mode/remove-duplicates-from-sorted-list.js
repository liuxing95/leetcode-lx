// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。


const { List } = require('../../lib/linked.js')

function generateLine(str) {
  const head = new List()
  for(let i = 0; i < str.length; i++) {
    head.add(str[i])
  }
  return head.head.next
}

var head = generateLine([1,2,4,4,5])
var deleteDuplicates = function(head) {
  var current = head
  while(current !== null) {
      while (current.next && (current.val === current.next.val)) {
          current.next = current.next.next
      }
      current = current.next
  }
  return head
};
console.log(deleteDuplicates(head))