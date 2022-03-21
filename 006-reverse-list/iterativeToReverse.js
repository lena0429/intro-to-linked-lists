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


// initial ponit -         NULL         a     ->     b     ->    c
// first run     -         prev      current      next
//  current.next = prev    NULL   <-    a            b     <-    c
//  prev = current                     prev       current 

const reverseList = (head) => {
    let prev = null;  

    let current = head;
    while (current !== null){
        const next = current.next;
        current.next = prev; // this line shifts the arrow 
        prev = current;
        current = next
    }
    return prev;
}

reverseList(a)