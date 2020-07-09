var arr = [1, 2, 4, 1, 7, 8, 3];

// 递归手法
function rec_opt(arr, i) {
  if (i === 0) return arr[0]
  else if ( i === 1) return Math.max(arr[0], arr[1])
  else {
    var A = arr[i] + rec_opt(arr, i - 2)
    var B = rec_opt(arr, i - 1)
    return Math.max(A, B)
  }
}

function dp_opt(arr, i) {
  var opt_arr = new Array(arr.length).fill(0);
  opt_arr[0] = arr[0]
  opt_arr[1] = Math.max(arr[0], arr[1])

  for (var i = 2; i < arr.length; i++) {
    opt_arr[i] = Math.max((arr[i] + opt_arr[i - 2]), opt_arr[i - 1])
  }
  return opt_arr[opt_arr.length - 1]
}

console.log(rec_opt(arr, 6))
console.log(dp_opt(arr, 6))


var arr = [3, 34, 3, 7, 8, 2]
var S = 9

// 递归写法
function rec_subset(arr, i, sum) {
  if (sum === 0) return true
  if (i === 0) return arr[i] === sum
  if (arr[i] > sum) return rec_subset(arr, i - 1, sum)
  return rec_subset(arr, i - 1, sum - arr[i]) || rec_subset(arr, i - 1, sum)
}

// 动态规划
function dp_subset(arr, S) {
  var subset =  new Array(arr.length);
  for(var i = 0;i < subset.length; i++){
    subset[i] = new Array(S + 1).fill(false);  
  }
  // 第一列全为 true
  for(var i = 0;i < subset.length; i++){
    subset[i][0] = true
  }
  // 第一行 等于 s的为true
  subset[0][arr[0]] = true
  for (var i = 1; i < arr.length; i++) {
    for (var s = i; s < S + 1; s++) {
      if (arr[i] > s) {
        subset[i][s] =  subset[i-1][s] 
      } else {
        var A = subset[i - 1][s - arr[i]];

        var B = subset[i - 1][s]
        subset[i][s] = A || B
      }
    }
  }
  return subset[arr.length - 1][S]
}

console.log(rec_subset(arr, arr.length-1, 9))
console.log(rec_subset(arr, arr.length-1, 10))
console.log(rec_subset(arr, arr.length-1, 11))
console.log(dp_subset(arr, 9))
console.log(dp_subset(arr, 10))
console.log(dp_subset(arr, 11))