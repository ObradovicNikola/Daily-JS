class LinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectLoop(head) {
    let ptr1 = head,
        ptr2 = head;

    while (ptr1) {
        ptr1 = ptr1.next;
        if(!ptr2.next) 
            return false;
        ptr2 = ptr2.next.next; // throws error if list doesn't have loop

        if (ptr1 == ptr2) {
            return true;
        }
    }

    return false;
}

let head = new LinkedListNode(8);
const nodes = [1, 2, 3, 4, 5, 6, 7, 9];
let tmp = head;
for (let i = 0; i < nodes.length; i++) {
    let newNode = new LinkedListNode(nodes[i]);
    tmp.next = newNode;
    tmp = newNode;
}

head.next.next.next.next.next = head.next.next;
console.log(detectLoop(head));