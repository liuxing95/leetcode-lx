
// 面试题 02.04. 分割链表
// 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。
// 如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。

// 示例:

// 输入: head = 3->5->8->5->10->2->1, x = 5
// 输出: 3->1->2->10->5->5->8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummyHead1 = { //哨兵结点 指向第一个节点 代表小于
    next: head
  }
  const dummyHead2 = {
    next: head
  }

  let smallHead = dummyHead1
  let largeHead = dummyHead2

  while((smallHead && smallHead.next) || (largeHead && largeHead.next)) {
    if (smallHead && smallHead.next && smallHead.next.val >= x) {
      const nextNode = smallHead.next.next
      smallHead.next = nextNode
    }else {
      smallHead = smallHead.next
    }

    if (largeHead && largeHead.next && largeHead.next.val < x) {
      const nextNode = largeHead.next.next
      largeHead.next = nextNode
    }else {
      largeHead = largeHead.next
    }
  }
  smallHead.next = dummyHead2.next;
  return dummyHead1.next;
};

const { generateLine } = require('../easy-mode/generateLine')
const head = generateLine([3,5,8,5,10,2,1])

console.log(partition(head, 5))