class Stack {
    private stack:any[] = []
    constructor(){
        this.stack = []
    }
    addToStack(value:any){
        this.stack.unshift(value)
    }
    getAndRemoveFromStack(){
        const value = this.stack[0]
        this.removeFromStack()
        return value
    }
    removeFromStack(){
        this.stack.shift()
    }
    getStack(){
        return this.stack
    }
}

export { Stack }