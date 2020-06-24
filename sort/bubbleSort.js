function bubbleSort(arr) {
  const len = arr.length
  
  for(let i = 0, len_i = len; i < len_i; i++) {
    let flag = false;
    for (let j = 0, len_j = len; j < len_j; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        flag = true; // 表示有数据交换
      }
    }
    if (!flag) break; // 没有数据交换，提前退出
  }
  return arr
}

console.log(bubbleSort([3,1,4,2,6,8,1]))