function solution(s) {
function sol(arr) {
  let stack = [];
  for (let e of arr) {
    let popped;
    switch (e) {
      case "(":
      case "{":
      case "[":
        stack.push(e);
        continue;
      case ")":
        popped = stack.pop();
        if (!!!popped || popped !== "(") {
          return;
        }
        continue;
      case "}":
        popped = stack.pop();
        if (!!!popped || popped !== "{") {
          return;
        }
        continue;
      case "]":
        popped = stack.pop();
        if (!!!popped || popped !== "[") {
          // console.log("3");
          return;
        }
        continue;
    }
  }
  if (stack.length === 0) {
    cnt++;
  }
}

let arr = s.split("");
let cnt = 0;

for (let i = 0; i < s.length; i++) {
  let first = arr.splice(0, 1);
  arr = arr.concat(first);
  sol(arr);
}

    return cnt;

}