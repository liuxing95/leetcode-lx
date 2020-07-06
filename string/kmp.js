// KMP 算法
function prefix_table(pattern = [], prefix = [], n = 0) {
  prefix[0] = 0;
  var len = 0;
  var i = 1;
  while( i < n ) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefix[i] = len;
      i++;
    } else {
      if (len > 0) {
        len = prefix[len - 1]
      } else {
        prefix[i] = len;
        i++;
      }
    }
  }
}

function move_prefix_table(prefix_arr, n) {
  for (var i = n -1; i > 0; i--) {
    prefix_arr[i] = prefix_arr[i -1]
  }
  prefix_arr[0] = -1
}


function kmp_search(text = '', pattern = '') {
  var pattern_prefix_table = new Array(pattern.length)
  prefix_table(pattern, pattern_prefix_table, pattern.length)
  move_prefix_table(pattern_prefix_table, pattern_prefix_table.length)

  // text[i]   text.len = m
  // pattern[j] pattern.len = n
  var i = 0;
  var j = 0;
  var m = text.length
  var n = pattern.length
  while(i < m) {
    if (j == n -1 && text[i] === pattern[j]) {
      console.log("postion:", i - j)
      j = pattern_prefix_table[j]
    }
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else {
      j = pattern_prefix_table[j];
      if ( j == -1) {
        i++;
        j++
      }
    }
  }
}


var text = 'ABSBAABABCABAANASD'
var pattern = "ABABCABAA"

kmp_search(text, pattern)