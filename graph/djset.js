function djset() {
  var vertices = 6
  var parent = new Array(vertices).fill(-1)
  var rank = new Array(vertices).fill(0)
  var edges = {
    0: [1],
    1: [2, 3],
    2: [4, 5],
    3: [4],
  }

  const edgesKeys = Object.keys(edges)
  var is_has_circle = false
  for(let i = 0; i< edgesKeys.length; i++) {
    const end_edges = edges[edgesKeys[i]]
    for (let j = 0; j < end_edges.length; j++) {
      var x = +edgesKeys[i]
      var y = end_edges[j]
      if (union_vertices(x, y, parent, rank) === 0) {
        is_has_circle = true
        break;
      }
      if (is_has_circle) break
    }
  }
  if (is_has_circle) {
    console.log('有环')
  } else {
    console.log('无环')
  }
  
}

function find_root(x, parent) {
  var x_root = x
  while(parent[x_root] !== -1) {
    x_root = parent[x_root]
  }
  return x_root
}

function union_vertices(x, y, parent, rank) {
  var x_root = find_root(x, parent);
  var y_root = find_root(y, parent);
  if (x_root === y_root) {
    return 0
  } else {
    // parent[x_root] = y_root
    if (rank[x_root] > rank[y_root]) {
      parent[y_root] = x_root
      rank[x_root]++
    } else {
      parent[x_root] = y_root
      rank[y_root]++
    }
    return 1
  }
}

djset()