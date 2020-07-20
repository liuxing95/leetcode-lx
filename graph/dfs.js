var graph = {
  "A": ["B", "C"],
  "B": ["A", "C", "D"],
  "C": ["A", "B", "D", "E"],
  "D": ["B", "C", "E", "F"],
  "E": ["C", "D"],
  "F": ["D"]
}

function DFS(graph, s) {
  var stack = new Array()
  stack.push(s)

  var seen = {}
  while(stack.length > 0) {
    var node = stack.pop()

    var vertex = graph[node]

    seen[node] = true

    for (let i = 0; i < vertex.length; i++) {
      if (!seen[vertex[i]]) {
        stack.push(vertex[i])
        seen[vertex[i]] = true
      }
    }

    console.log(node)
  }
}

// DFS(graph, 'A')
DFS(graph, 'E')