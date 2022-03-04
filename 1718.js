// var fs = require("fs");
// var input = fs.readFileSync("input.txt").toString().split("\n");
// input = input.map((input) => input.replace("\r", ""));

// console.log(input);

var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("input.txt").toString().split("\n"); //
input = input.map((input) => input.replace("\r", ""));
var plainText = input[0];
var key = input[1];

function encryption(plaintext, key) {
    if (plaintext == " ") {
        return " ";
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let ciphertext = "";
    plaintext = plaintext.toLocaleLowerCase();

    for (char of plaintext) {
        let idx = (alphabet.indexOf(char) + key) % alphabet.length;
        idx = idx < 0 ? idx + alphabet.length : idx;
        ciphertext += alphabet[idx];
    }

    return ciphertext;
}

function bellasoDecryption(ciphertext, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let plaintext = "";

    key = key
        .toLocaleLowerCase()
        .split("")
        .map((key) => alphabet.indexOf(key) + 1);

    for (let i = 0; i < ciphertext.length; i++) {
        plaintext += encryption(ciphertext[i], -key[i % key.length]);
    }

    return plaintext;
}

console.log(bellasoDecryption(plainText, key));
