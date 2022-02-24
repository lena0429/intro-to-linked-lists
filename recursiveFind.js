class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const recursiveFind = (head, target) => {
    // base case 1 
    if (head === null) return false;

    // base case 2
    if (head.val === target) return true;

    return recursiveFind(head.next, target);
}

recursiveFind(a, "C")