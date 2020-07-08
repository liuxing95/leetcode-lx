// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

const BinaryTreeNode = require('./BinaryTree')
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最小深度  2.
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  const left_depth = minDepth(root.left);
  const right_depth = minDepth(root.right);
  if (root.left === null ||  root.right === null) {
    return left_depth + right_depth + 1
  }
  return Math.min(left_depth, right_depth)+1     
};

var minDepth = function(root) {
  if(root == null){                               //叶子节点值为0
      return 0;               
  }
  let l = minDepth(root.left);                    //先左后右
  let r = minDepth(root.right);
  if(root.left == null ||  root.right == null){   //如果只有左侧叶子节点或只有右侧叶子节点那么深度应该是2而不是1
      return l+r+1
  }
  return Math.min(l,r)+1                          //每个节点的值应该是其最小深度加上其本身
};