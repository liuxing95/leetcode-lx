// 24. 两两交换链表中的节点
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead1 = { //哨兵结点 指向第一个节点
    next: head
  }
  let tempHead = dummyHead1
  while(tempHead && tempHead.next && tempHead.next.next) {
    const firstNode = tempHead.next
    const secondNode = tempHead.next.next
    const thirdNode = tempHead.next.next.next

    // 节点交换
    tempHead.next = secondNode
    tempHead.next.next = firstNode
    tempHead.next.next.next = thirdNode

    tempHead = tempHead.next.next;
  }
  return dummyHead1.next
};

const { generateLine } = require('../easy-mode/generateLine')
const head = generateLine([1,2,3,4,5])

swapPairs(head)