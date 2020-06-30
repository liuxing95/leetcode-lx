// 给定一个 N 叉树，返回其节点值的前序遍历。

// 例如，给定一个 3叉树 :

 



 

// 返回其前序遍历: [1,3,5,6,2,4]。

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  var result = []
  const preorderInner = function(node) {
    if (node !== null) {
      result.push(node.val)
      node.children.forEach(item => {
        preorderInner(item)
      })
    }
  }
  preorderInner(root)
  return result 
};