// 节点应用类型
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class List {
  constructor(val) {
    this.head = new Node()
    this.size = 0;
  }

  // 在链表尾部增加节点
  add(val) {
    var current=this.head;
    while(current.next!=null){
        current=current.next;
    }
    current.next=new Node(val);

    this.size++;
  }

  //遍历链表，不对链表元素操作都可以调用此方法
  forEach(callback){
    for(var current=this.head.next;current!=null;current=current.next){
        callback(current.val);
    }
  }

  //查找链表元素的位置
  indexOf(val){
    var pos=0;
    var current=this.head.next;
    while(current!=null){
        if(current.val===val){
            break;
        }
        current=current.next;
        pos++;
    }
    return pos;
  }

  /**
   * 在位置pos处插入节点值为val
   * 若成功则返回插入的值，若失败则返回null
   */
  insert(pos,val) {
    if(pos<0 || pos>this.size-1){
        return null;
    }

    //插入位置的上一个节点
    var last=this.head;
    for(var i=0;i<pos;i++){
        last=last.next;
    }
    //保存下一个节点的引用
    var ready=last.next;
    last.next=new Node(val);
    last.next.next=ready;

    this.size++;
    return val;
  }

  /**
   * 删除指定位置的元素
   * 若成功则返回删除的值，若失败则返回null
   */
  removeAt(index){
    if(index<0 || index>this.size-1){
        return null;
    }

    var current=this.head.next;
    var last=this.head;
    for(var i=0;i<index;i++){
        last=current;
        current=current.next;
    }
    last.next=current.next;

    this.size--;
    return current.val;
  }
  //删除相应元素
  remove(val){
    var current=this.head.next;
    var last=this.head;
    while(current!=null){
        if(current.val===val){
            last.next=current.next;
            //已删除节点
            this.size--;
            break;
        }
        last=current;
        current=current.next;
    }
  }
}

module.exports = {
  List
}
