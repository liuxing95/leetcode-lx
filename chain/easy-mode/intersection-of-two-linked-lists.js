// 编写一个程序，找到两个单链表相交的起始节点。
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

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var pA = headA;
  var pB = headB;
  while(pA !== pB){
      pB = pB? pB.next: headA;
      pA = pA? pA.next: headB;
  }
  return pA;
};

console.log(getIntersectionNode(l1, l2))