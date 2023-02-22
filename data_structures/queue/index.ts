import { Queue } from "./queue";

const queue1 = new Queue()

queue1.addToQueue("A")
queue1.addToQueue("B")
queue1.addToQueue("C")
console.log(queue1.getQueue())
console.log(queue1.getAndRemoveFromQueue())
console.log(queue1.getQueue())



