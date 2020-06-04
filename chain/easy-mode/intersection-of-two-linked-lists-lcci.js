https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { List } = require('../../lib/linked.js')
var listA = [4,1,8,4,5], listB = [5,0,1,8,4,5]
function generateLine(str) {
  const strList = new List()
  for(let i = 0; i < str.length; i++) {
    strList.add(str[i])
  }
  return strList.head.next
}
var headA = generateLine(listA)
var headB = generateLine(listB)
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 判断有一个为空 返回null
    if (headA === null || headB === null) {
      return null
    }
    var headALen = 0
    var headBLen = 0
    var p = headA
    var q = headB
    // 计算两个链表的长度
    while(p !== null) {
      p = p.next
      headALen++
    }

    while(q !== null) {
      q = q.next
      headBLen++
    }
    p = headA
    q = headB

    if (headALen >= headBLen ) {
      var diff = headALen - headBLen
      while(diff > 0) {
        diff--
        p = p.next
      }
      while(p && q) {
        if (p === q) return p
        p = p.next
        q = q.next
      }
    } else {
      var diff = headBLen - headALen
      while(diff > 0) {
        diff--
        q = q.next
      }
      while(p && q) {
        if (p == q) return p
        p = p.next
        q = q.next
      }
    }
    return null
};

console.log(getIntersectionNode(headA, headB))