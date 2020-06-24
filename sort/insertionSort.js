function insertionSort(arr) {
  var len = arr.length
  if (len < 1) return
  for(let i = 1; i < len; i++) {
    var value = arr[i];
    var j = i - 1;
    // 查找插入的位置
    for ( ; j >=0; j--) {
      if (arr[j] > value) {
        arr[j+1] = arr[j]; // 数据移动
      } else {
        break
      }
    }
    arr[j+1] = value; // 插入数据
  }
  return arr
}

console.log(insertionSort([3,1,4,2,6,8,1]))