// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let headA = l1
  let heaB = l2
  var l1_len = 0
  var l2_len = 0
  while(headA !== null) {
    l1_len++
    headA = headA.next
  }
  while(heaB !== null) {
    l2_len++
    heaB = heaB.next
  }
  // headA 是长的
  headA = l1_len >= l2_len ? l1 : l2
  headB = l1_len < l2_len ? l1 : l2
  let isAdd = 0
  while(headA !== null) {
    const tempVal = (headA.val + headB.val + isAdd) % 10 
    isAdd = Math.floor((headA.val + headB.val + isAdd) / 10)
    headA.val = tempVal
    // 空节点进位
    if (headA.next === null && isAdd) {
      headA.next = new ListNode(isAdd)
      isAdd = 0
    }
    headA = headA.next
    headB = headB.next || new ListNode(0)
  }
  return l1_len >= l2_len ? l1 : l2
};


var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node;//哑结点
  let add = 0;//是否进一
  let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while(l1 || l2){
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
      temp.next = new ListNode(sum % 10);//取余则为新链表的值
      temp = temp.next;
      add = sum >= 10 ? 1 : 0;
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return node.next;
};


const { generateLine } = require('../easy-mode/generateLine')
const head1 = generateLine([1])
const head2 = generateLine([9, 9])

console.log(addTwoNumbers(head1, head2))