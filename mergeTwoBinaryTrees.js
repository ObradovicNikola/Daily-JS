class Node {
    constructor(x) {
        this.data = x;
        this.left = this.right = null;
    }
}

function mergeTwoBinaryTrees(t1, t2) {
    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }
    t1.data += t2.data;
    t1.left = mergeTwoBinaryTrees(t1.left, t2.left);
    t1.right = mergeTwoBinaryTrees(t1.right, t2.right);
    return t1;
}

let t1 = new Node(1);
t1.left = new Node(5);
t1.right = new Node(3);

let t2 = new Node(2);
t2.left = new Node(4);

const t = mergeTwoBinaryTrees(t1, t2)

console.log(t.data) // 3
console.log(t.left.data) // 9
console.log(t.right.data) // 3