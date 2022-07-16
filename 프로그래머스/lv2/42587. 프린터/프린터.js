    class Queue {
  constructor(arr) {
    this.queue = arr;
    this.front = 0;
    this.rear = arr.length;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {

let q = new Queue(priorities.map((el, idx) => [el, idx]));
let priority = priorities.sort((a, b) => a - b);


let cnt = 0;
let priNum = priority.pop();
while (q.size() > 0) {
  let [el, idx] = q.peek();
  if (el !== priNum) {
    q.enqueue(q.dequeue());
  } else {
    cnt++;
    let [del, didx] = q.dequeue();
    if (didx === location) {
      return cnt;
    }
    priNum = priority.pop();
  }
}


}