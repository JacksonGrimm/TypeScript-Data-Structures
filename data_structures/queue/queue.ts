//Stack takes a FIFO (first in first out) order

class Queue {
    private queue:any[] = []
    constructor(){
        this.queue = []
    }
    //setter
    addToQueue(value:any){
        this.queue.push(value)
    }
    getAndRemoveFromQueue(){
        const value = this.queue[this.queue.length - 1]
        this.removeFromQueue()
        return value
    }
    //setter
    removeFromQueue(){
        this.queue.pop()
    }
    //getter
    getQueue(){
        return this.queue
    }
}

export { Queue }