class Node {
    // val -> value
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node('D');

// link above nodes togehter
// A -> B -> C -> D -> NULL
a.next = b;
b.next = c;
c.next = d;

