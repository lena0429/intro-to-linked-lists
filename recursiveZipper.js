class Node {
    constructor(val){
        this.val = val
        this.next = next
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const f = new Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

const g = new Node(1)
const h = new Node(2)
const i = new Node(3)

g.next = h
h.next = i

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;  //base case
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2

    head2.next = zipperLists(next1, next2);
    return head1
}
