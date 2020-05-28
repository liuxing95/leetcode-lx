// 返回倒数第n个节点
// 创造两个指针 让第一个先走n步 之后 两个一起走
const { List } = require('../lib/linked.js')
var listA = [1]

function generateLine(str) {
  const strList = new List()
  for(let i = 0; i < str.length; i++) {
    strList.add(str[i])
  }
  return strList.head.next
}
var headA = generateLine(listA)

var kthToLast = function(head, k) {
  if (k <= 0) return null
  var head1 = head
  var head2 = head
  while(k > 0) {
    head1 = head1.next
    k--
  }

  while(head1) {
    head1 = head1.next
    head2 = head2.next
  }
  return head2.val
};

console.log(kthToLast(headA, 1))