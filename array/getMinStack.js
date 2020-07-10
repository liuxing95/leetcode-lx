class getMinStack {
  minStack = new Array()
  constructor() {
    this.dataStack = new Array()
  }

  pushData(data) {
    this.dataStack.push(data)
    if (this.minStack.length === 0) this.minStack.push(data)
    const lastValue = this.minStack.pop()
    this.minStack.push(lastValue)
    if (lastValue < data) {   
      this.minStack.push(lastValue)
    } else {
      this.minStack.push(data)
    }
  }

  popData() {
    if (this.dataStack.length === 0) return undefined
    this.minStack.pop()
    return this.dataStack.pop()
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}

const minStack = new getMinStack()

minStack.pushData(2)
minStack.pushData(4)
minStack.pushData(6)
minStack.pushData(1)
minStack.pushData(3)

console.log(minStack.getMin())
console.log(minStack.popData())
console.log(minStack.popData())
console.log(minStack.getMin())
