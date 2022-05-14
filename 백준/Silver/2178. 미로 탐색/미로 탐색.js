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
    .map((_) => +_);

const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(input().trim());
}

let visited = new Array(n).fill(null).map((_) => new Array(m).fill(0));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs(i, j) {
    let queue = [];
    queue.push([i, j]);
    visited[i][j] = 1;
    ext: while (queue.length > 0) {
        let [i, j] = queue.shift();
        for (let k = 0; k < dx.length; k++) {
            let nextXPosition = i + dy[k];
            let nextYPosition = j + dx[k];
            if (
                nextXPosition < 0 ||
                nextXPosition >= n ||
                nextYPosition < 0 ||
                nextYPosition >= m
            ) {
            } else if (visited[nextXPosition][nextYPosition] > 0) {
            } else if (arr[nextXPosition][nextYPosition] === "0") {
            } else {
                visited[nextXPosition][nextYPosition] = visited[i][j] + 1;
                if (nextXPosition === n - 1 && nextYPosition === m - 1) {
                    break ext;
                }
                queue.push([nextXPosition, nextYPosition]);
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j] === 0) {
            bfs(i, j);
        }
    }
}

console.log(visited[n - 1][m - 1]);
