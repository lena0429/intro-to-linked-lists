class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node (3);

function recursiveSolution(head){
    let values = [];
    fillValues(head, values);
    return values;    
}

function fillValues(head, values){
    //base case
    if (head === null) return;

    values.push(head.value);
    fillValues(head.next, values);
}

recursiveSolution(a)

// The reason to split the recursion from this function is 
// so my resursion doesn't actually have to create like multiple arrays.
