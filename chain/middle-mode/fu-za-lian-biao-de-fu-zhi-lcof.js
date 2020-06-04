// 面试题35. 复杂链表的复制

// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

// 用一个哈希表表示映射关系：键是原节点，值是复制的节点。

// 整体算法流程是：

// 第一次遍历，复制每个节点和 next 指针，并且保存“原节点-复制节点”的映射关系
// 第二次遍历，通过哈希表获得节点对应的复制节点，更新 random 指针

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
    return head
  }
  const map = new Map()
  let node = head; // 当前节点
  const newHead = new Node(node.val);
  let newNode = newHead; // 当前节点的copy
  map.set(node, newNode);
  while(node.next !== null) {
    newNode.next = new Node(node.next.val);
    node = node.next
    newNode = newNode.next
    map.set(node, newNode);
  }

  newNode = newHead
  node = head
  while(newNode) {
    newNode.random = map.get(node.random);
    node = node.next
    newNode = newNode.next
  }
  return newHead
};
