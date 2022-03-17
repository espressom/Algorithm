var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n"); //
input = input.map((input) => input.replace(/\r| /gi, "")).slice(1);

btree = {};

for (el of input) {
    let [val, left, right] = el.split("");
    left = left == "." ? null : left;
    right = right == "." ? null : right;
    btree[val] = { left, right };
}

function inOrder(root, result, btree) {
    if (root == null) {
        return;
    }
    inOrder(btree[root].left, result, btree);
    result.push(root);
    inOrder(btree[root].right, result, btree);
}

function preOrder(root, result, btree) {
    if (root == null) {
        return;
    }
    result.push(root);
    preOrder(btree[root].left, result, btree);
    preOrder(btree[root].right, result, btree);
}

function postOrder(root, result, btree) {
    if (root == null) {
        return;
    }
    postOrder(btree[root].left, result, btree);
    postOrder(btree[root].right, result, btree);
    result.push(root);
}

function traversal(root = "A", btree) {
    result = [];
    preOrder(root, result, btree);
    console.log(result.join(""));
    result = [];
    inOrder(root, result, btree);
    console.log(result.join(""));
    result = [];
    postOrder(root, result, btree);
    console.log(result.join(""));
}

traversal("A", btree);