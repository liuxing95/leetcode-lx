// 面试题22. 链表中倒数第k个节点  https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

var getKthFromEnd = function(head, k) {
  var head_a = head;
  var head_b = head;
  while(k > 0) {
    head_a = head_a.next
    k--
  }

  while(head_a !== null) {
    head_a = head_a.next;
    head_b = head_b.next
  }
  return head_b
};
