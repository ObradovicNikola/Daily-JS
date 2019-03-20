class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function mergeSortedLists(list1, list2) {
    let l = null;

    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    if (list1.data <= list2.data) {
        l = list1;
        l.next = mergeSortedLists(list1.next, list2);
    } else {
        l = list2;
        l.next = mergeSortedLists(list1, list2.next);
    }
    return l;
}

const list1 = new Node(1);
list1.next = new Node(2);

const list2 = new Node(1);
list2.next = new Node(3);


l = mergeSortedLists(list1, list2);
tmp = l;
while (tmp) {
    process.stdout.write(tmp.data + "");
    if (tmp.next)
        process.stdout.write(" -> ");
    tmp = tmp.next;
}