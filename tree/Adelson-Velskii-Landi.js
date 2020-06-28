var Node = function(key) {
  this.key = key
  this.left = null
  this.right = null
}

function AdelsonVelskiiLandi() {
  this.root = null
}

var heightNode = function(node) {
  if (node === null) {
    return -1
  } else {
    return Math.max(heightNode(node.left), heightNode(node.right)) + 1
  }
}

var rotationRR = function(node) {
  var tmp = node.right;  // {1}
  node.right = tmp.left; // {2}
  tmp.left = node;       // {3}
  return tmp;
};

var rotationLL = function(node) {
  var tmp = node.left
  node.left = tmp.right
  tmp.right = node
  return tmp
}


var rotationLR = function(node) {
  node.left = rotationRR(node.left);
  return rotationLL(node);
};

var rotationRL = function(node) {
  node.right = rotationLL(node.right);
  return rotationRR(node);
};


AdelsonVelskiiLandi.prototype.insertNode = function(node, element) {
  if (node === null) {
    node = new Node(element)
  } else if (node.key < element) {
    node.left = insertNode(node.left, element);
    if (node.left !== null) {
      // 确认是否需要平衡 {1}
      if (heightNode(node.left) - heightNode(node.right) > 1) {
        // 旋转 {3}
        if (element < node.left.key){
          node = rotationLL(node);
        } else {
          node = rotationLR(node);
        }
      }
    }
  } else if (node.key > element) {
    node.right = insertNode(node.right, element);
    if (node.right !== null) {
      // 确认是否需要平衡 {2}
      if ((heightNode(node.right) - heightNode(node.left)) > 1) {
        // 旋转 {4}
        if (element > node.right.key){
          node = rotationRR(node);
        } else {
          node = rotationRL(node);
        }
      }
    }
  }

  return node
}