/**
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { generateLine } = require('./generateLine.js')
const l1 = generateLine([1,2,6,7])
const l2 = generateLine([3,4,6,7])

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 递归处理
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
};

console.log(mergeTwoLists(l1, l2))