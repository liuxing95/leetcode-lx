var Node = function(key) {
  this.key = key
  this.left = null
  this.right = null
}

function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.insert = function(key) {
  var node = new Node(key);

  if (this.root === null) {
    this.root = node
  } else {
    insertNode(this.root, node)
  }
}

var insertNode = function (node, NewNode) {
  if (NewNode.key < node.key) {
    if (node.left === null) {
      node.left = NewNode
    } else {
      insertNode(node.left, NewNode)
    }
  } else {
    if (node.right === null) {
      node.right = NewNode
    } else {
      insertNode(node.right, NewNode)
    }
  }
}

// 中序遍历
BinarySearchTree.prototype.inOrderTraverse = function(callback){
  inOrderTraverseNode(this.root, callback); //{1}
};

var inOrderTraverseNode = function (node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback);
  }
}

// 先序遍历
BinarySearchTree.prototype.preOrderTraverse = function(callback){
  preOrderTraverseNode(this.root, callback);
};

var preOrderTraverseNode = function (node, callback) {
  if (node !== null) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

// 后序遍历
BinarySearchTree.prototype.postOrderTraverse = function(callback){
  postOrderTraverseNode(this.root, callback);
};

var postOrderTraverseNode = function (node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }
}

// 搜索一个特定的值
BinarySearchTree.prototype.search = function(key){
  return searchNode(this.root, key); //{1} 8
};

var searchNode = function(node, key) {
  if (node === null) {
    return false
  }
  if (key < node.key) {
    return searchNode(node.left, key)
  } else if (key > node.key) {
    return searchNode(node.right, key)
  } else {
    return true
  }
}

BinarySearchTree.prototype.remove = function(key){
  this.root = removeNode(this.root, key);//{1} 
}

var removeNode = function(node, key){
  if (node === null) {
    return null;
  }

  if (key < node.key){ //{3}
    node.left = removeNode(node.left, key); //{4}
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    //第一种情况——一个叶节点
    if (node.left === null && node.right === null){ //{9}
      node = null; //{10}
      return node; //{11}
    }
    if (node.left === null){ 
      //第二种情况——一个只有一个子节点的节点 if (node.left === null){ //{12}
      node = node.right; //{13}
      return node; //{14}
    } else if (node.right === null){ //{15}
      node = node.left; //{16}
      return node; //{17}
    }

    //第三种情况——一个有两个子节点的节点
    var aux = findMinNode(node.right); //{18}
    node.key = aux.key; //{19}
    node.right = removeNode(node.right, aux.key); //{20} return node; //{21}
    return node
  }
}

function printNode(value){ //{6}
  console.log(value);
}

var findMinNode = function(node){
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
console.log(tree)
tree.postOrderTraverse(printNode);
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');