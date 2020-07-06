const SIZE = 256;
function generateBC(sub_arr, bc) {
  const len = sub_arr.length
  for (var i = 0; i < SIZE; i++) {
    bc[i] = -1
  }
  for (var i = 0; i < len; ++i) {
    var acsii = String.fromCharCode(sub_arr[i])
    bc[acsii] = i
  }
}

function generateGS(sub_arr, suffix, prefix) {
  const len = sub_arr.length
  for (var i = 0; i < len; i++) {
    suffix[i] = -1
    prefix[i] = false
  }
  for (var i = 0; i < len - 1; ++i) { // sub_arr[0, i]
    var j = i;
    var k = 0; // 公共后缀字串长度
    while(j >= 0 && b[j] == b[len-1-k]) { // // 与b[0, m-1]求公共后缀子串
      --j;
      ++k;
      suffix[k] = j+1; //j+1表示公共后缀子串在b[0, i]中的起始下标
    }
    if (j == -1) prefix[k] = true; //如果公共后缀子串也是模式串的前缀子串
  }
}

function bm(main_arr, sub_arr) {
  var bc = new Array(SIZE); // 记录模式串中每个字符最后出现的位置
  generateBC(sub_arr, bc) // 构建坏字符哈希表
  var i = 0; // i表示主串与模式串对齐的第一个字符
  var main_len = main_arr.length,
      sub_len = sub_arr.length;
  while(i <= main_len - sub_len) {
    var j = 0;
    for (j = sub_len - 1; j > 0; --j) { // 模式串从后往前匹配
      if (main_arr[i+j] != sub_arr[j]) break; // 坏字符对应模式串中的下标是j
    }
    if (j < 0) {
      return i; // 匹配成功，返回主串与模式串第一个匹配的字符的位置 
    }
    // 这里等同于将模式串往后滑动j-bc[(int)a[i+j]]位
    i = i + (j - bc[String.fromCharCode(main_arr[i + j])])
  }
  return -1;
}

// 在模式串中，查找跟好后缀匹配的另一个子串
// 在好后缀的后缀子串中，查找最长的、能跟模式串前缀子串匹配的后缀子串；

bm('aaaaaaaaaaaaaaaa', 'baaa')