    class Queue {
  constructor(arr) {
    this.front = 0;
    this.rear = arr.length;
    this.queue = arr;
  }

  enqueue(val) {
    this.queue[rear++] = val;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return val;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(progresses, speeds) {

let q = new Queue(progresses);
let res = [];

while (q.size() > 0) {
  if (q.peek() < 100) {
    q.queue = q.queue.map((el, idx) => {
      el += speeds[idx];
      return el;
    });
  } else {
    let cnt = 0;
    let size = q.size();
    for (let i = 0; i < size; i++) {
      if (q.peek() >= 100) {
        q.dequeue();
        cnt++;
      } else {
        break;
      }
    }
    res.push(cnt);
  }
}

return res;

}