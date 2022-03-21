class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d -> NULL

function iterativeSolutionToFind(head, target) {
    let current = head;
    while (current !== null){
        if (current.val === target) {
            return true;
        }
        current = current.next;
    }
    return false;
}

iterativeSolutionToFind(a, "c")
