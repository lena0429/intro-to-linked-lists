class Node {
    constructor(val) {
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

function recursiveSolution(head){
    let current = head;
    if (current === null) return;  // base case

    console.log(current.val);
    recursiveSolution(current.next);
}

recursiveSolution(a)

