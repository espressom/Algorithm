const log = console.log;
const fs = require("fs");
const stdin = true
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs.readFileSync("./input.txt").toString().trim();

let word = stdin;

let arr = word.split("");
let wordBag = [];

for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        word1 = arr.slice(0, i);
        word2 = arr.slice(i, j);
        word3 = arr.slice(j);
        let newWord = [
            ...word1.reverse(),
            ...word2.reverse(),
            ...word3.reverse(),
        ].join("");
        wordBag.push(newWord);
    }
}

log(wordBag.sort()[0]);
