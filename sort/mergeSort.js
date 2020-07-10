function mergeSort(arr) {
  return mergeSortRec(arr)
}

function mergeSortRec (arr) {
  var length= arr.length
  if (length === 1) return arr

  var mid = Math.floor(length / 2)
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)
  return merge(mergeSortRec(left), mergeSortRec(right));
}

var merge = function(left, right) {
  var result = []
  var left_index = 0
  var right_index = 0
  while(left_index < left.length && right_index < right.length) {
    if(left[left_index] < right[right_index]) {
      result.push(left[left_index++]);  // {9}
    } else{
      result.push(right[right_index++]); // {10}
    }
  }

  while (left_index < left.length){
    result.push(left[left_index++]);
  }
  while (right_index < right.length){
    result.push(right[right_index++]);
  }
  return result; // {13}
}

console.log(mergeSort([3,1,4,2,6,8,1]))