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
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 !== null && current2 !== null){
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.text;
        } else {
            tail.text = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return tail;
}
