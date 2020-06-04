
const { List } = require('../../lib/linked.js')

function generateLine(str) {
  const head = new List()
  for(let i = 0; i < str.length; i++) {
    head.add(str[i])
  }
  return head.head.next
}

module.exports = {
  generateLine
}