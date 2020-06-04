
const { List } = require('../../lib/linked.js')

function generateLine(str) {
  const head = new List()
  for(let i = 0; i < str.length; i++) {
    head.add(str[i])
  }
  return head.head.next
}

/**
 * 说明 
 * 如果字符串是通过单链表来存储的，那该如何来判断是一个回文串呢
 * 时间复杂度()
 * 空间复杂度()
 */
var isPalindrome = function(head) {
  console.log(head)
  // 首先先判断空节点
  if (head === null || head.next === null) {
    return true
  }
  var prev = null
  var slow = head
  var fast = head
  // 第一步 先取到中间节点
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    // 转换前半部分节点的顺序
    var next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }
  if (fast !== null) {
    slow = slow.next
  }


  // 
  while(slow !== null) {
    if (slow.val !== prev.val) {
      return false
    }
    slow = slow.next;
    prev = prev.next;
  }
  return true
}

// console.log(isPalindrome(generateLine(''))); // true
console.log(isPalindrome(generateLine('abcddcba'))) // true

// node --experimental-modules ./str-chain.mjs     