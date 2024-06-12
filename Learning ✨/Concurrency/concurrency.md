# Concurrency⚙️

Concurrency in JavaScript allows you to perform multiple tasks simultaneously, improving the efficiency and responsiveness of your applications. JavaScript handles concurrency using various mechanisms like the event loop, callbacks, promises, and async/await.

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [The Event Loop](#the-event-loop-🔄)
- [Callbacks](#callbacks-📞)
  - [Problems with Callbacks](#problems-with-callbacks-❌)
- [Promises](#promises-🌟)
  - [Promise Chaining](#promise-chaining-🔗)
  - [Problems with Promise Chaining](#problems-with-promise-chaining-❌)
- [Async/Await](#asyncawait-⏳)
- [Practice Question](#practice-question-📝)

## Introduction 📖

JavaScript operates on a single thread, meaning it executes code in a linear sequence. However, certain operations, such as using the `alert()` function, can block the execution context, causing delays in other code execution. For example, when an `alert()` dialog is displayed, JavaScript code halts until the user interacts with it, rendering the user interface unresponsive. Despite this limitation, JavaScript can handle concurrent tasks through asynchronous programming, where operations continue while waiting for tasks to complete. This is made possible by mechanisms like the event loop, callbacks, promises, and async/await.

``` javascript
console.log('Start');

// This alert pauses the execution of JavaScript code
alert('This is an alert!');

console.log('End');
```

## The Event Loop 🔄

The event loop is the mechanism that allows JavaScript to perform non-blocking operations. It continuously checks the call stack and the task queue, executing tasks from the queue when the stack is empty.

![Animated GIF](https://res.cloudinary.com/practicaldev/image/fetch/s--4U9iPU-P--/c_imagga_scale,f_auto,fl_progressive,h_500,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k2l36khs41oncfwmy3wk.gif)


```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```
Output:

```sql
Start
End
Timeout
```


## Callbacks 📞

Callbacks are functions passed as arguments to other functions and are executed once the task is complete. They are one of the earliest ways to handle asynchronous operations.

Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

fetchData(data => {
  console.log(data);
});
```
### Problems with Callbacks ❌

Callbacks can lead to deeply nested code that is hard to read and maintain, often referred to as "callback hell" or the "Christmas tree problem."

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doAnotherThing(newResult, function(finalResult) {
      console.log(finalResult);
    });
  });
});
```
## Promises 🌟

Promises provide a cleaner way to handle asynchronous operations. A promise represents a value that may be available now, in the future, or never.

Example:

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});

promise.then(result => {
  console.log(result);
});
```
In JavaScript, promises are like real-life promises. They have three states:

- **Pending**: The initial state of a promise. It represents that the promise is still pending and hasn't been fulfilled or rejected yet.
- **Fulfilled**: The state of a promise when it's successfully resolved with a value.
- **Rejected**: The state of a promise when it fails to fulfill its purpose and is rejected with a reason (usually an error).

### Promise Chaining 🔗

Promises can be chained to perform multiple asynchronous operations in sequence, improving readability compared to nested callbacks.

Example:

```javascript
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doAnotherThing(newResult))
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));
```
### Problems with Promise Chaining ❌

Although promise chaining improves readability, it can still lead to issues if not handled correctly:

- **Error Handling**: Errors need to be caught at each step, or a single `.catch` at the end must handle all errors.
- **Complexity**: Long chains can still become hard to read and maintain, especially when dealing with multiple asynchronous operations.

## Async/Await ⏳

Async/await is syntactic sugar built on promises, making asynchronous code look and behave more like synchronous code.

``` javascript
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });

  let result = await promise;
  console.log(result);
}

fetchData();
```
## Practice Question 📝

Suppose you have a function that fetches data from two different APIs, and you want to execute them concurrently to improve performance. Write an async function that fetches data from both APIs and returns the combined result. Use `Promise.all` to handle the concurrency.

Example:

```javascript
async function fetchDataFromAPIs() {
  let api1 = fetch('https://api1.example.com/data');
  let api2 = fetch('https://api2.example.com/data');

  let results = await Promise.all([api1, api2]);

  let data1 = await results[0].json();
  let data2 = await results[1].json();

  return { data1, data2 };
}

fetchDataFromAPIs().then(result => {
  console.log(result);
});
```





