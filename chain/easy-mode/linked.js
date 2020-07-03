// 创建节点类 Node
function Node(val) {
  this.val = val
  this.next = null
}
// 创建单链表对象实例类
function List(...rest) {
  this._head = new Node('_head') // 链表头节点
  // 如果new时有传进值，则添加到实例中
  if (rest.length) {
    this.insert(rest[0], '_head')
    for (let i = 1; i < rest.length; i++) {
      this.insert(rest[i], rest[i - 1])
    }
  }
}
List.prototype.find = find
List.prototype.findPrev = findPrev
List.prototype.findIndex = findIndex
List.prototype.findIndexOf = findIndexOf
List.prototype.add = push
List.prototype.insert = insert
List.prototype.insertIndex = insertIndex
List.prototype.remove = remove
List.prototype.removeIndex = removeIndex
List.prototype.size = size
List.prototype.display = display
List.prototype.reversal = reversal
// 查找函数，在链表中查找item的位置，并把它返回，未找到返回-1
function find(item) {
  let currNode = this._head
  while (currNode !== null && currNode.element !== item) {
    currNode = currNode.next
  }
  if (currNode !== null) {
    return currNode
  } else {
    return null
  }
}
// 通过元素的索引返回该元素
function findIndex(index) {
  let currNode = this._head
  let tmpIndex = 0
  while (currNode !== null) {
    // 找到该index位置，返回当前节点，出去头结点
    if (tmpIndex === index + 1) {
      return currNode
    }
    tmpIndex += 1
    currNode = currNode.next
  }
  return null
}

function findIndexOf(item) {
  let currNode = this._head
  let tmpIndex = 0
  while (currNode.next !== null && currNode.next.element !== item) {
    tmpIndex += 1
    currNode = currNode.next
  }
  if (currNode !== null) {
    return tmpIndex
  } else {
    return -1
  }
}
// 寻找目标节点item的上一个节点，未找到返回-1
function findPrev(item) {
  let currNode = this._head
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next
  }
  if (currNode.next !== item) {
    return currNode
  } else {
    return null
  }
}
// 插入节点，找到要插入到的item的节点位置，把新节点插到item后面
function insert(newElement, item) {
  let newNode = new Node(newElement)
  let currNode = this.find(item)
  if (currNode) {
    newNode.next = currNode.next
    currNode.next = newNode
  } else {
    console.error(`insert error：链表中不存在「${item}」节点`)
  }
}
// 插入节点，新节点插到index索引下
function insertIndex(newElement, index) {
  let newNode = new Node(newElement)
  let currNode = this.findIndex(index)
  if (currNode) {
    newNode.next = currNode.next
    currNode.next = newNode
  } else {
    console.error(`insertIndex error：链表中不存在「${index}」索引节点`)
  }
}
// 在链表最后一位添加元素
function push(element) {
  let newNode = new Node(element)
  let currNode = this._head
  while (currNode.next !== null) {
    currNode = currNode.next
  }
  currNode.next = newNode
}
// 删除节点，找到删除的位置，删除，未找到提示错误
function remove(item) {
  // 找到当前和上一个节点，让上一个节点的next指向item下一个节点
  let tmpPrev = this.findPrev(item)
  let tmpNext = this.find(item)
  if (tmpPrev && tmpNext) {
    tmpPrev.next = tmpNext.next
  } else {
    console.error(`remove error：链表中不存在「${item}」节点`)
  }
}
// 删除某个索引下的节点
function removeIndex(index) {
  let tmpPrev = this.findIndex(index - 1)
  let currNode = this.findIndex(index)
  if (tmpPrev && currNode) {
    tmpPrev.next = currNode.next
  } else {
    console.error(`removeIndex error：链表中不存在「${index}」索引节点`)
  }
}
// 返回链表的长度
function size() {
  let currNode = this._head
  let tmpSize = 0
  while (currNode.next !== null) {
    tmpSize += 1
    currNode = currNode.next
  }
  return tmpSize // 不计算头部节点
}
// 链表的展示
function display() {
  // 链表展示和使用，默认头部不存在
  let currNode = this._head.next
  let tmpArr = []
  while (currNode !== null) {
    tmpArr.push(currNode)
    currNode = currNode.next
  }
  return tmpArr
}
// 链表反转=>递归
function reversal() {
  function reversalList(item) {
    if (item.next) {
      let tmpItem = reversalList(item.next)
      item.next = null
      tmpItem.next = item
      return item
    } else {
      obj._head.next = item
      return item
    }
  }
  reversalList(obj._head.next)
}

module.exports = {
  List 
}