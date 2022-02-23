
## Node
We can think of a node as a container for some data. It can be conceptually visualized as a circle that we can put some data inside. We can store any data type in a node.

* tail - the very last node that has its next pointer pointing to nothing or has its next set to null. 
* head - the very first node. A head has a position of 0.

## Linked Lists
A linked list contains a bunch of nodes linked together. We can consider a linked list ordered data structure.

## Linked Lists & Arrays
* An array must be stored contiguously (right next to each other) in memory. 
* An linked list does not require its nodes stored contiguously in memory. 

## Traverse A Linked List
If I want to traverse through a linked list and print out every node, I would need to continually update a current pointer. In the context of my function, the only important variable I am going to track is `current`, which starts at the head of my linked list - a node.  

* Iterative Function
const printLinkedList = (head) => {
   let current = head;
   while (current !== null) {
       console.log(current.val);
       current = current.next;
   }
}

* Recursive Function
const printRecursive = (head) => {
    let current = head
    if (current === null) return;    // base case

    console.log(current.val);
    printRecursive(current.next);
}

## Usage
$ node linkedLists.js