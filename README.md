
# Terminology
## 1. Node
We can think of a node as a container for some data. It can be conceptually visualized as a circle that we can put some data inside. We can store any data type in a node. Each node has two attributes: `value` and `next`.

* tail - the very last node that has its next pointer pointing to nothing or has its next set to null. 
* head - the very first node. A head has a position of 0. As long as we know where the list starts, we can always traverse it to access all other nodes in the list by using the `next` property.

## 2. Linked List
A linked list contains a bunch of nodes linked together. We can consider a linked list ordered data structure. The `head` node denotes the start of the list.

## 3. Linked Lists & Arrays
* An array must be stored contiguously (right next to each other) in memory. 
* An linked list does not require its nodes stored contiguously in memory. 

## Note
It is important that you try to write your logic about just your current node when doing listed list algorithms.

# Functions
## 1. Linked List Traversal
If I want to traverse through a linked list and print out every node, I would need to continually update a current pointer. In the context of my function, the only important variable I am going to track is `current`, which starts at the head of my linked list - a node.  

### Iterative Function
`const printLinkedList = (head) => {
   let current = head;
   while (current !== null) {
       console.log(current.val);
       current = current.next;
   }
}
`

### Recursive Function
`const printRecursive = (head) => {
    let current = head
    if (current === null) return; 

    console.log(current.val);
    printRecursive(current.next);
}
`

## 2. Linked List Values


## 3. Linked List Sum
step -
* (1) traverse in order through the linked list
* (2) accumulate a sum

### interative solution
n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(n) 

### recursive solution
The space complexity would actually be a little more than out iterative solution. We would have O of n space here because of the call stack. Typically, when we analyze this, we should include the space utilize for making these recursive function calls.

n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(n) 

## 4. Linked List Find
Given a linked list as input and a target value, write a function that will return a boolean value whether or not the target value is contained within the linked list. 

### interative solution
n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(1)

### recursive solution
* base case 1 : if head.val equal target, then return true
* base case 2: if head is null, then return false

n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(n)

We are going to have O of n runtime because we make a call for every node of the linked list.
We also have O of n space because each of those calls by the time we bought them out at a base case, we would have to store those on the call stack. The worst case scenario is if our target is not found within the linked list. 

## 5. Get Node Value
### interative solution
n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(1)

### recursive solution
* base case 1: if head is null, then return null
* base case 2: if index is 0, return head.val

n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(n)

## 6. Reverse Linked List
Reverse the order of the nodes in the given linked list and return the new head of the reversed linked list. 


### Interative Solution
n = # of nodes
* Time Complexity: O(n) => traversing through the entire linked list ONCE
* Space Complexity: O(1) => because we only need ONE fixed number of variables 

### Recursive Solution
n = # of nodes
* Time Complexity: O(n)
* Space Complexity: O(n)

## 7. Zipper Linked Lists
In this problem, we are going to take in two linked list and zipper these two lists together. 

### Add a Exeplanation of the Code
We need to in place reassign all of these `next` pointers such that we alternate between the nodes of List One and List Two. Also we should always start with the first node of List One. And then from that point on simply alternate. Since we don't have many assumptions we can use when it comes to the length of both of our lists, except that we know that each list is none empty. What we want to do is alterante as much as we can, and then just terminate the linked list with the remaining nodes. Then I just take all of the remaining nodes of the linked list and add them to the very end.     

### Interative Solution
n = # of nodes
* Time Complexity: O(min(n + m))
* Space Complexity: O(1)

## Video
Watch the full tutorial video from freeCodeCamp on <a href="https://www.youtube.com/watch?v=Hj_rA0dhr2I&list=PLq40WqbjDuSwoiI-l1CyfPeW6nTwHTuAg&index=4">Youtube</a>

## Usage
$ node linkedLists.js