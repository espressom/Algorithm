const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `dmih
    11
    B
    B
    P x
    L
    B
    B
    B
    P y
    D
    D
    P z`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const s = input().replace(/\t|\r|\n|\v|\f/, "");
const n = +input();

let stack1 = s.split("");
let stack2 = [];

for (let i = 0; i < n; i++) {
  const [cmd, ch] = input().trim().split(" ");

  switch (cmd) {
    case "L":
      stack1.length !== 0 && stack2.push(stack1.pop());
      break;
    case "D":
      stack2.length !== 0 && stack1.push(stack2.pop());
      break;
    case "B":
      stack1.length !== 0 && stack1.pop();
      break;
    case "P":
      stack1.push(ch);
      break;
  }
}
console.log(stack1.concat(stack2.reverse()).join(""));
