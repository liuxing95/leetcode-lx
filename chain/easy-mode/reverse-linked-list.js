// https://leetcode-cn.com/problems/reverse-linked-list/
// 反转一个单链表。

var reverseList = function(head) {
  var temp = head
  var reverse = null
  while(temp !== null) {
    var next = temp.next
    temp.next = reverse
    reverse = temp
    temp = next
  }
  return reverse
};