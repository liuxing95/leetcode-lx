// 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

function selectSort(arr) {
  for(let i = 0; i< arr.length; i++) {
    let k = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j
      }
    }
    if (k !== i) {
      const temp = arr[i]
      arr[i] = arr[k]
      arr[k] = temp
    }
  }
  return arr
}

console.log(selectSort([3,1,4,2,6,8,1]))