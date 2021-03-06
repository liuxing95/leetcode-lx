// 给定一个二叉树，返回它的 前序 遍历。

//  示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var result = []
  const preorderTraversalInner = function(node) {
    if (node !== null) {
      result.push(node.val)
      preorderTraversalInner(node.left)
      preorderTraversalInner(node.right)
    }
  }
  preorderTraversalInner(root)
  return result
};
