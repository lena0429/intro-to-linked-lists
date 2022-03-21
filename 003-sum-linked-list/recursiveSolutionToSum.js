class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(-1)
const e = new Node(7)

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const LinkedListSum = (head) => {
    if (head === null) return 0; // base case
    return head.val + LinkedListSum(head.next)
}

LinkedListSum(a)

const linkedSum = (head) => {
    if (head === null) return 0;
    return head.val+ linkedSum(head.next)
}