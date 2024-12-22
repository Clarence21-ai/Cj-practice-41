// Create a new JavaScript file named groceryStacks.js

// Initialize an empty stack
const groceryStack = [];

// Peek function to check the top item or if the stack is empty
function peek() {
    if (groceryStack.length === 0) {
            console.log("The stack is empty.");
                } else {
                        console.log("Top item:", groceryStack[groceryStack.length - 1]);
                            }
                            }

                            // Push function to add an item to the stack
                            function push(item) {
                                groceryStack.push(item);
                                    console.log(`Pushed "${item}" to the stack.`);
                                        printStack();
                                        }

                                        // Pop function to remove the last added item from the stack
                                        function pop() {
                                            if (groceryStack.length === 0) {
                                                    console.log("The stack is empty. Nothing to pop.");
                                                        } else {
                                                                const removedItem = groceryStack.pop();
                                                                        console.log(`Popped "${removedItem}" from the stack.`);
                                                                                printStack();
                                                                                    }
                                                                                    }

                                                                                    // Print the current state of the stack
                                                                                    function printStack() {
                                                                                        console.log("Current Stack:", groceryStack);
                                                                                        }

                                                                                        // Example usage
                                                                                        push("Milk");
                                                                                        push("Eggs");
                                                                                        push("Bread");
                                                                                        push("Butter");
                                                                                        push("Cheese");
                                                                                        peek();
                                                                                        pop();
                                                                                        peek();