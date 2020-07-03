
const { List } = require('./linked.js')

function generateLine(str) {
  const head = new List()
  for(let i = 0; i < str.length; i++) {
    head.add(str[i])
  }
  return head._head.next
}

generateLine([1,2,3,4])
module.exports = {
  generateLine
}