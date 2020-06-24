function quicksort(arr) {
  if (arr.length < 2) return arr
  const pivot = arr[0]
  const less = []
  const greater = []
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] <= pivot) less.push(arr[i])
    else greater.push(arr[i])
  }
  return quicksort(less).concat(pivot).concat(quicksort(greater))
}

console.log(quicksort([3,1,4,2,6,8,1]))