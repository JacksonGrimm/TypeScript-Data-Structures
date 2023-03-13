import { ListNode } from "./linkedList";

const node1 = new ListNode({
    value: "node_A"
})
const node2 = new ListNode({
    value: "node_B"
})

const node3 = new ListNode({
    value: "node_C"
})

node1.setNext(node2)
node2.setNext(node3)

//reverse a linked list

function reverseList(node:any){
    //keep track of current
    //keep track of the previous
    //keep track of the next
    let current = node
    let previous = null
    let next = null
    //current = node_A
    //round 2 current is = node_b
    while(current !== null){
        //next is node_B
        //next is node_c
        next = current.next
        //node_A . next is now null
        //node_B. next is now node_A
        current.next = previous
        //prev is now equal to node_a
        //prev is now equal node_b
        previous = current
        //current is now the next
        //current is now node_c
        current = next
    }
    node = previous
    return node
}
function printList(node:any) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}
console.log(node1)
console.log(reverseList(node1))