const log = console.log;
const fs = require("fs");
const stdin = (
    true
        ? fs.readFileSync("/dev/stdin").toString()
        : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [n, m] = input()
    .split(" ")
    .map((el) => +el);

let arr = [];
let result = [];

function dfs(depth) {
    if (depth === m) {
        result.push(arr.join(" "));
        return;
    }

    for (let i = 0; i < n; i++) {
        arr[depth] = i + 1;
        dfs(depth + 1);
    }
    return;
}

dfs(0);
console.log(result.join("\n"));
