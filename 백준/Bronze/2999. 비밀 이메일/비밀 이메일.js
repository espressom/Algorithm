var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

function encryption(plaintext) {
    const originalNumber = plaintext.length;
    const [r, c] = getFactors(originalNumber).slice(-1)[0];
    const chars = plaintext.split("");
    const matrix = getMatrix(chars, r);
    let res = readVertically(matrix, c, r);
    return res.join("");
}

function getFactors(number) {
    const s = Math.round(Math.sqrt(number));
    let factors = [];

    for (let i = 1; i <= s; i++) {
        if (number % i == 0) {
            factors.push([i, number / i]);
        }
    }

    return factors;
}

function getMatrix(input, column) {
    let matrix = [];
    let buffer = [];
    for (el of input) {
        buffer.push(el);
        if (buffer.length == column) {
            matrix.push(buffer);
            buffer = [];
        }
    }
    return matrix;
}

function readVertically(matrix, row, column) {
    let result = [];
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            result.push(matrix[j][i]);
        }
    }
    return result;
}

console.log(encryption(input));