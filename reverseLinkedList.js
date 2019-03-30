class LinkedListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(l) {
    let newL = null, tmp;
    while(l)
    {
        tmp = l;
        l = l.next;
        tmp.next = newL;
        newL = tmp;
    }
    return newL;
}


l1 = new LinkedListNode(1);
l1.next = new LinkedListNode(2);
l1.next.next = new LinkedListNode(3);
console.log(l1);

console.log(reverseList(l1));