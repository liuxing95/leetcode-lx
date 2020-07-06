class TreeNode {
  constructor(data) {
    this.data = data
    this.children = new Array(26)
    this.isEndingChar = false
  }
}

class Trie {
  _root = new TreeNode('/')

  // 往Trie树中插入一个字符串
  insert(text) {
    var p = this._root
    for (var i = 0; i< text.length; i++) {
      var index = text[i].charCodeAt() - 'a'.charCodeAt();
      if (!p.children[index]) {
        var newNode = new TreeNode(text[i])
        p.children[index] = newNode
      }
      p = p.children[index];
    }
    p.isEndingChar = true;
  }

  // 在Trie树中查找一个字符串
  find(text) {
    var p = this._root
    for (var i = 0; i < text.length; i++) {
      var index = text[i].charCodeAt() - 'a'.charCodeAt();
      if (!p.children[index]) {
        return false; // 不存在text
      }
      p = p.children[index];
    }
    if (p.isEndingChar == false) return false; // 不能完全匹配，只是前缀
    else return true
  }
}

var trie = new Trie()
trie.insert('heheh')
trie.insert('hiohi')
trie.insert('adad')
console.log(trie.find('ada'))