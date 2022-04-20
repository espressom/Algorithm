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

let visited = new Array(n).fill(false);
let arr = [];

function dfs(depth) {
    if (depth === m) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            arr[depth] = i + 1;
            dfs(depth + 1);
            visited[i] = false;
        }
    }
    return;
}

dfs(0);
