class ListNode {
    private value:object
    public next:Object | null
    constructor(value:object) {
        this.value = value
        this.next = null
    }
    getValue(){
        return this.value
    }
    setNext(nextNode:object){
        this.next = nextNode
    }
}

export {ListNode}