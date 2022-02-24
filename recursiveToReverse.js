class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

// if you don't pass in a second argument when you call this function,
// it's going to be set to null by default. 
const reverseList = (head, prev = null) => {
    if (head === null) return prev; // base case - prev is going to be new tail
    const next = head.next; 
    head.next = prev;
    return reverseList(next, head)  // pass next as the new head, and pass the head as the new prev)

}

reverseList(b)

