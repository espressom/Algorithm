const fs = require("fs");
const stdin = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [m, n] = input()
    .split(" ")
    .map((_) => +_);

const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(input().trim());
}

let visited = new Array(n).fill(null).map((_) => new Array(m).fill(0));

const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function bfs(cur, team) {
    let queue = [];
    queue.push(cur);
    while (queue.length > 0) {
        cnt++;
        cur = queue.shift();
        visited[cur[0]][cur[1]] = 1;
        for (const move of moves) {
            let position = [cur[0] + move[0], cur[1] + move[1]];
            // console.log(position);
            if (
                position[0] < 0 ||
                position[0] >= n ||
                position[1] < 0 ||
                position[1] >= m
            ) {
            } else if (visited[position[0]][position[1]] === 1) {
            } else if (arr[position[0]][position[1]] !== team) {
            } else {
                queue.push(position);
                visited[position[0]][position[1]] = 1;
            }
        }
    }
}

let cnt = 0;

let scoreB = 0;
let scoreW = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j] === 0) {
            cnt = 0;
            if (arr[i][j] === "B") {
                bfs([i, j], "B");
                scoreW += cnt ** 2;
            } else {
                bfs([i, j], "W");
                scoreB += cnt ** 2;
            }
        }
    }
}

console.log(scoreB, scoreW);
