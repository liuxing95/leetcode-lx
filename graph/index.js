function Graph() {
  var vertices = []; //{1}
  var adjList = new Map(); //{2}

  this.addVertex = function(v){
    vertices.push(v); //{3}
    adjList.set(v, []); //{4}
  };
  
  this.addEdge = function(v, w){
    adjList.get(v).push(w); //{5}
    adjList.get(w).push(v); //{6}
  };
  
  this.toString = function(){
    var s = '';
    for (var i=0; i<vertices.length; i++){
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //{11}
      for (var j=0; j<neighbors.length; j++){ //{12}
        s += neighbors[j] + ' ';
      }
      s += '\n'; //{13}
    }
    return s;
  };

  var initializeColor = function(){
    var color = [];
    for (var i=0; i<vertices.length; i++){
      color[vertices[i]] = 'white'; //{1}
    }
    return color;
  };

  this.bfs = function(v, callback) {
    var color = initializeColor()
    // 数组的方法 假装队列
    var queue = new Array()
    queue.push(v)
    while(queue.length !== 0) {
      var u = queue.shift()
      var neighbors = adjList.get(u);
      color[u] = 'grey';
      for (var i=0; i<neighbors.length; i++){ // {9}
        var w = neighbors[i];
        if (color[w] === 'white'){
          color[w] = 'grey';
          queue.push(w);
        } 
      }
      color[u] = 'black';
      if (callback) {     // {15}
        callback(u);
      }
    }
  }

  this.BFS = function (v) {
    var color = initializeColor(),
    queue = new Array(),
    d = [],
    pred = [];
    queue.push(v)

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while(queue.length > 0) {
      var u = queue.shift(),
          neighbors = adjList.get(u);
      color[u] = 'grey';
      for(i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white'){
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.push(w);
        }
      }
      color[u] = 'black';
    }
    return { //{8}
        distances: d,
        predecessors: pred
    };
  }


  function dfsVisit(u, color, callback) {
    color[u] = 'grey';
    if (callback) {    //{6}
      callback(u);
    }
    var neighbors = adjList.get(u);
    for (var i=0; i<neighbors.length; i++){
      var w = neighbors[i];
      if (color[w] === 'white'){
        dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
  }

  this.dfs = function(callback) {
    var color = initializeColor();
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white'){ //{3}
        dfsVisit(vertices[i], color, callback); //{4}
      }
    }
  }
}



var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7} 
for (var i=0; i<myVertices.length; i++){ //{8}
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

function printNode(value){ //{16}
  console.log('Visited vertex: ' + value); //{17}
}
// graph.bfs(myVertices[0], printNode); //{18}

console.log(graph.BFS(myVertices[0]))
// graph.dfs(printNode);
