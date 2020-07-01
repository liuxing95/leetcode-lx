// 利用散列表和双向链表实现。

var LinkNode = function (key, value) {
  this.key = key
  this.value = value
  this.next = null
  this.prev = null
}

var DoubelLinkList = function() {
  this.size = 0;
  this.head = new LinkNode() // 空白节点 作为 头部
  this.tail = new LinkNode() // 空白节点 作为尾部
  this.head.next = this.tail
  this.tail.prev = this.head
}

DoubelLinkList.prototype.addNode = function (node) {
  if (!(node instanceof LinkNode)) throw new Error('param must be a LinkNode');
  // 插入节点时，使用尾插法。这里可以利用双向链表一直在尾结点前驱插入节点。
  const prevNode = this.tail.prev
  const nextNode = this.tail.prev.next  
  node.prev = prevNode
  node.next = nextNode
  prevNode.next = node
  nextNode.prev = node
  this.size++
}

DoubelLinkList.prototype.deleteNode = function(node) {
  if (!(node instanceof LinkNode)) throw new Error('param must be a LinkNode');
  // 将刚刚访问过的节点插入到链表最后一位。
  const prevNode = node.prev
  const nextNode = node.next
  prevNode.next = nextNode
  nextNode.prev = prevNode
  this.size--
}

DoubelLinkList.prototype.refreshList = function(node){
  this.deleteNode(node);
  this.addNode(node);
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.maxSize = capacity
  this.map = new Map();
  this.doubleLinkedList = new DoubelLinkList();
}

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function(key) {
  if (this.map.get(key) === undefined ) return -1;
  const curNode = this.map.get(key);
  this.doubleLinkedList.refreshList(curNode)
  return curNode.value
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const newNode = new LinkNode(key,value);
  //  如果key已经存在，则变更其值
  if (this.map.get(key)) {
    this.doubleLinkedList.refreshList(newNode)
    return this.map.get(key).value = value;
  }

  if (this.map.size < this.maxSize) {
    // 没满的话 赛数值
    this.doubleLinkedList.addNode(newNode)
  } else {
    // 满了的话 清除首部节点 然后向尾部塞入
    var firstNode = this.doubleLinkedList.head.next
    this.doubleLinkedList.deleteNode(firstNode)
    this.doubleLinkedList.addNode(newNode)
    // 同时需要清理掉散列表中的key
    this.map.delete(firstNode.key);
  }
  this.map.set(key,newNode);
}


var lrudemo = new LRUCache(10000)

for (let i = 0; i < 100000; i++) {
  lrudemo.put(i, {
    key: i,
    value: i
  });
}
console.log(lrudemo)

console.log(lrudemo.get(90000))