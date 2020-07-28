// 剑指 Offer 04. 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

 

// 限制：

// 0 <= n <= 1000

// 0 <= m <= 1000

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if(matrix == null || matrix.length == 0) {
    return false;
  }
  // 从右上角开始查找
  var row = 0, col = matrix[0].length - 1 
  while(row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target){
      col--;
    } else {
      row++
    }
  }
  return false
};

var arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

var arr2 = [[-5]]
console.log(findNumberIn2DArray(arr, 5))
console.log(findNumberIn2DArray(arr, 20))
console.log(findNumberIn2DArray(arr2, -5))