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


// linear time complexity
// constant space
function iterativeToGetNodeValue(head, index){
    let current = head;
    let count = 0;
    while(current !== null){
        if (count === index) return current.val;
        count += 1;
        current = current.next;
    }
    return null
};

iterativeToGetNodeValue(a, 1)    // "b"
iterativeToGetNodeValue(b, 2)    // "d"
iterativeToGetNodeValue(a, 7)    // null
iterativeToGetNodeValue(a, 0)    // "a"


// n = # of nodes
// Time Complexity: O(n)
// Space Complexity: O(1)