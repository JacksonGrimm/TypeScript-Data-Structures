//Stack takes a LIFO (last in first out) order

class Stack {
    private stack:any[] = []
    constructor(){
        this.stack = []
    }
    //setter
    addToStack(value:any){
        this.stack.unshift(value)
    }
    getAndRemoveFromStack(){
        const value = this.stack[0]
        this.removeFromStack()
        return value
    }
    //setter
    removeFromStack(){
        this.stack.shift()
    }
    //getter
    getStack(){
        return this.stack
    }
}

export { Stack }