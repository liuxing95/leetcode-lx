var graph = {
  "A": {"B": 5, "C": 1},
  "B": {"A": 5, "C": 2, "D": 1},
  "C": {"A": 1, "B": 2, "D": 4, "E": 8},
  "D": {"B": 1, "C": 4, "E": 3, "F": 6},
  "E": {"C": 8, "D": 3},
  "F": {"D": 6}
}

function PriorityQueue(){
  this.data = [];
  /*入队*/
  this.enqueue = function(element){
      this.data.push(element);
  };
  /*出队：删除队列中更拥有最高优先级的元素，优先码最小的元素优先级最高。*/
  this.dequeue = function(){
      var priority = this.data[0].code;
      var index = 0
      //使用顺序查找方法寻找优先级最高的元素，优先码越小优先级越高
      for(var i=0; i<this.data.length; ++i){
          if(this.data[i].code < priority){
              priority = this.data[i].code;
              index = i
          }
      }
      return this.data.splice(index,1);
  };
}

function init_distance(graph, s) {
  var distance = {[s]: 0}
  for (let vertex in graph) {
    if (vertex !== s) {
      distance[vertex] = +Infinity
    }
  }
  return distance
}

function dijkstra(graph, s) {
  var p_queue = new PriorityQueue()
  p_queue.enqueue({ code: 0, value: s});
  var seen = {}
  var parent = {}
  parent[s]= null
  var distance = init_distance(graph, s)

  while(p_queue.data.length !== 0) {
    var pair = p_queue.dequeue()[0]
    var vertex = pair.value
    seen[vertex] = true
    var dist = pair.code
    var nodes = Object.keys(graph[vertex])
    for (let key of nodes) {
      if (!seen[key]) {
        if (dist + graph[vertex][key] < distance[key]) {
          parent[key] = vertex
          distance[key] = dist + graph[vertex][key]
          p_queue.enqueue({ code: dist + graph[vertex][key], value: key});
        }
      }
    }
  }
  return {
    parent,
    distance
  }
}

dijkstra(graph, 'A')