// 反转链表 https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

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