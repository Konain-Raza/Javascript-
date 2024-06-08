// Callbacks are examples of achieving concurrency in JavaScript, allowing multiple tasks to be executed effectively at the same time. For example, when you go to the dry cleaner and ask them to press your clothes, you don't want to wait until they finish pressing. You want to do other tasks during that time, achieving concurrency. JavaScript itself is single-threaded, but to perform multiple tasks simultaneously, we use concurrency.

// An example of JavaScript's single-threaded nature is when we use alert, which blocks the execution context. After closing the alert, we can resume using the document for the webpage or other tasks.

console.log("first");
setTimeout(function() {
    console.log("second");
}, 5000);
console.log("third");

// The output is "first", "third", and then "second" due to concurrency. When the setTimeout function is encountered, it sends the execution to the web API, and when the stack is empty, it notifies the task queue. Then, when the stack is clear, it performs the task and pops it.

// A function passed as an argument to another function is called a callback.

function pressClothes() {
    console.log("pressing clothes");
    boilWater();
}

function boilWater() {
    console.log("boiling water");
}

pressClothes(boilWater); // Here, we pass as an argument without parentheses. If we use parentheses, it causes an error.

// The problem of callback hell occurs when there's nested callback, causing readability and scope issues. It's often likened to the Christmas tree problem or the pyramid of doom. Promises are introduced to solve this issue.
