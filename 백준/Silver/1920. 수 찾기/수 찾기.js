const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    4 1 5 2 3
    5
    1 3 7 9 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++].trim();
})();

let n = +input();
let arr = input()
  .split(" ")
  .sort((a, b) => a - b);
let m = +input();
let nums = input().split(" ");

function func(num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let idx = Math.floor((left + right) / 2);
    if (arr[idx] == num) {
      return 1;
    } else if (arr[idx] > num) {
      right = idx - 1;
      continue;
    } else {
      left = idx + 1;
      continue;
    }
  }
  return 0;
}

console.log(nums.map((e) => func(+e)).join("\n"));
