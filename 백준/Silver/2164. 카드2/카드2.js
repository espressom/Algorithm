const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `6`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = +input();

let arr = Array.from(Array(n), (_, idx) => {
  return idx + 1;
});

class Queue {
  constructor(arr) {
    this.queue = arr;
    this.front = 0;
    this.rear = arr.length;
  }

  enqueue(val) {
    this.queue[this.rear++] = val;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return val;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const q = new Queue(arr);

let flag = true;
while (q.size() > 1) {
  if (flag) {
    q.dequeue();
    flag = false;
  } else {
    q.enqueue(q.dequeue());
    flag = true;
  }
}

console.log(q.dequeue());
