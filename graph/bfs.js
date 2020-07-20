var graph = {
  "A": ["B", "C"],
  "B": ["A", "C", "D"],
  "C": ["A", "B", "D", "E"],
  "D": ["B", "C", "E", "F"],
  "E": ["C", "D"],
  "F": ["D"]
}

function BFS (graph, s) {
  var queue = new Array()
  queue.push(s)

  var seen = {}

  seen[s]= true

  var parent = { [s]: null }
  while(queue.length !== 0) {
    var node = queue.shift()
    var vertex = graph[node]
    for (let i = 0; i < vertex.length; i++) {
      if (!seen[vertex[i]]) {
        queue.push(vertex[i])
        seen[vertex[i]]= true
        parent[vertex[i]] = node
      }
    }
  }
  return parent
}
var parent = BFS(graph, 'E')
var v = 'B'

while (v !== null) {
  console.log(v)
  v = parent[v]
}