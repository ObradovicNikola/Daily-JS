// finding if targeted sum of two numbers
// exists in ordered tree
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function toArray(root) {
    if (!root)
        return [];
    else if (!root.left && !root.right)
        return [root.value];
    else
        return [...toArray(root.left), root.value, ...toArray(root.right)];
}

function twoSumFromBST(root, target) {
    const a = toArray(root);
    let start = 0,
        end = a.length - 1;
    while (start < end) {
        if (a[start] + a[end] == target)
            return true;
        else if (a[start] + a[end] < target)
            start++;
        else end--;
    }
    return false;
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(1);


const target = 11;

console.log(twoSumFromBST(root, target));