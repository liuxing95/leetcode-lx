// 给定一个二叉树，检查它是否是镜像对称的。

//  

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
//  

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？
// 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true 
    return dfs(root.left, root.right)
};

var dfs = function (left, right) {
  //递归的终止条件是两个节点都为空
	//或者两个节点中有一个为空
	//或者两个节点的值不相等
  if (left === null && right === null) return true
  if (left === null || right === null) return false
  if (left.val !== right.val) return false

  return dfs(left.left, left.right) &&  dfs(right.left, right.right)
}

var isSymmetric = function (root) {
  const check = (left, right) => {   // 参数接收左右子树
    if (!left && !right) return true // 左右子树都不存在 也是对称的 
    if (left && right) {             // 左右子树都存在，要继续判断
      return left.val === right.val &&   // 左右子树的顶点值要相等
        check(left.left, right.right) && // 左子树的left和右子树的right相等
        check(left.right, right.left)    // 左子树的right和右子树的left相等
    }
    return false;  // 左右子树中的一个不存在，一个存在，不是对称的
  }
  return !root || check(root.left, root.right) // root为null也是对称的
                                               // 不满足则调用check判断左右子树
};