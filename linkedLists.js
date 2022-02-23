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

const printLinkedList = (head) => {
// if I want to traverse through a linked list and print out every node,
// I would need to continually update a current pointer. 
let current = head;

  while (current !== null) {
      console.log(current.val);
      current = current.next;
  }
}; 

// excute this traverse function
printLinkedList(a);