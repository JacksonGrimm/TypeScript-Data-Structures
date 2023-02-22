import { Stack } from "./stack";

const stack1 = new Stack()

stack1.addToStack("A")
stack1.addToStack("B")
stack1.addToStack("C")

console.log(stack1.getStack())
console.log(stack1.getAndRemoveFromStack())
console.log(stack1.getStack())

