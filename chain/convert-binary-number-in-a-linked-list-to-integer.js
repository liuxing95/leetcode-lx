/*
给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的 十进制值 。
*/
const { generateLine } = require('./generateLine.js')
const head = generateLine([1,0,1,1,0,1,1,0,1])
var getDecimalValue = function(head) {
    // 反转链表 然后求和
    var temp = head
    var reverse = null
    while(temp !== null) {
      var next = temp.next
      temp.next = reverse
      reverse = temp
      temp = next
    }
    var total = 0
    var n = 0
    while(reverse !== null) {
      total = total + reverse.val * Math.pow(2,n)
      n++
      reverse = reverse.next
    }
    return total
};

getDecimalValue(head)