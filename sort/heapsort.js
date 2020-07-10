var heapSort = function(array) {
  var heapSize = array.length;

  buildHeap(array)

  while (heapSize > 1) {
    heapSize--;
    swap(array, 0, heapSize); //{2}
    heapify(array, heapSize, 0); //{3}
  }
  return array
}

function swap(array, start, end) {
  var temp = array[start]
  array[start] = array[end]
  array[end] = temp
}

function buildHeap(array) {
  var heapSize = array.length;
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }
}

var heapify = function(array, heapSize, i){
  var left = i * 2 + 1,
  right = i * 2 + 2,
  largest = i;
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
   }
  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, heapSize, largest);
  }
};

// 第一步，构造一个满足array[parent(i)] ≥ array[i]的堆结构(行{1})。

// 第二步，交换堆里第一个元素(数组中较大的值)和最后一个元素的位置(行{2})。这样， 最大的值就会出现在它已排序的位置。

// 第二步可能会丢掉堆的属性。因此，我们还需要执行一个heapify函数，再次将数组转换成 堆，也就是说，它会找到当前堆的根节点(较小的值)，重新放到树的底部。


console.log(heapSort([3,1,4,2,6,8,1]))