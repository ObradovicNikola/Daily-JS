//this is for binary search tree  (ordered tree)

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/* efficient solution if we assume that nodes are in the tree
function lowestCommonAncestor(root, node1, node2) {
	if (root.val > node1.val && root.val > node2.val) {
		return lowestCommonAncestor(root.left, node1, node2);
	} else if (root.val < node1.val && root.val < node2.val) {
		return lowestCommonAncestor(root.right, node1, node2);
	} else {
		return root;
	}
};
*/

function isInTree(root, x) {
    if (!root)
        return false;
    else if (root.val == x)
        return true;
    else if (x < root.val)
        return isInTree(root.left, x);
    return isInTree(root.right, x);
}

function lowestCommonAncestor(root, node1, node2) {
    if (!root)
        return null;
    if ((root.val == node1) || (root.val == node2))
        return null;
    if ((node1 < root.val) && (node2 > root.val)) {
        if (isInTree(root.left, node1) && isInTree(root.right, node2))
            return root.val;
    } else if ((node2 < root.val) && (node1 > root.val)) {
        if (isInTree(root.left, node2) && isInTree(root.right, node1))
            return root.val;
    }
    else if(node1 < root.val){
        return lowestCommonAncestor(root.left, node1, node2);
    }
    else return lowestCommonAncestor(root.right, node1, node2);
}

const root = new Node(7);
root.left = new Node(4);
root.left.left = new Node(1);
root.left.right = new Node(5);
root.right = new Node(8);

console.log(lowestCommonAncestor(root, 1, 8));