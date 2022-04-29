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

let [n, m] = input().split(" ");

const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(input().trim());
}

let cnt = 0;

for (let i = 0; i < n; i++) {
    let prev = "/";
    for (let j = 0; j < m; j++) {
        if (arr[i][j] !== prev && arr[i][j] === "-") {
            cnt++;
        }
        prev = arr[i][j];
    }
}
for (let i = 0; i < m; i++) {
    let prev = "/";
    for (let j = 0; j < n; j++) {
        if (arr[j][i] !== prev && arr[j][i] === "|") {
            cnt++;
        }
        prev = arr[j][i];
    }
}

console.log(cnt);
