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

let [a, b] = input().split(" ");

let res = [];

for (let i = 0; i <= b.length - a.length; i++) {
    let str = b.substring(0, i) + a + b.substring(a.length + i, b.length);
    res.push(str);
}

let min = 9999;
for (word of res) {
    let cnt = 0;
    for (let i = 0; i < b.length; i++) {
        if (word[i] != b[i]) cnt++;
    }
    min = Math.min(min, cnt);
}

log(min);
