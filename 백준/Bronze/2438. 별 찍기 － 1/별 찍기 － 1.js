const fs = require("fs");
const stdin =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt");

const log = console.log;
const n = +stdin;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  log();
}
