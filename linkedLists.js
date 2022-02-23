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

//const printLinkedList = (head) => {
// if I want to traverse through a linked list and print out every node,
// I would need to continually update a current pointer. 
// In this context, the only important variable I am going to track is `current`, which starts at the head of my linked list - a node.  
// let current = head;

// while the current node is not equal to null, iterate through the list and print
// while the current node is equal to null, we reach the statement nul !== null
// which return false, and make us exit the while loop
//  while (current !== null) {
//      console.log(current.val);
//      current = current.next;
//  }
//}; 

// recursive function
const recursivePrint = (head) => {
    let current = head
    // base case
    if(current === null) {
        return;
    }
    console.log(current.val)
    recursivePrint(current.next)
}

// excute this traverse function
// printLinkedList(a);

recursivePrint(a)