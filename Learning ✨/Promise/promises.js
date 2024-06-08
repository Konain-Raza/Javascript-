// Promises are like real-life promises, like when we order something on Foodpanda. They promise to give us our food if the order is successful, or not give it if it's canceled. So, a promise is resolved if the order is successful, and rejected if it's canceled.

let promise = new Promise(function(resolve, reject) { // Resolve and reject are callbacks provided by promises, and new Promise creates a new object of the Promise class constructor.
    // resolve("order successful")
    reject("order canceled");
});

// Promises have states and results.
// 3 states of promises: pending, fulfilled, rejected.
// Fulfilled: Promise has a value.
// Rejected: Caused an error.
// Pending: Promise started but work is pending.

// If we have a promise, we use promise chaining with .then and .catch. We use .then if the promise is fulfilled, and .catch if it causes an error.

promise.then((result) => { // .then accepts a callback function that runs if the promise is resolved. It automatically has access to the promise result.
    console.log(result);
    console.log("eat and enjoy");
}).catch((error) => { // .catch runs if the promise is rejected. It accepts a callback function and automatically gets the result of the rejection data passed, so we can access it.
    console.log(error);
    console.log("eat your home food");
}).then(() => { // This .then runs regardless of whether the promise is resolved or rejected.
    console.log("sleep if you don't want to eat home food");
});

// This is called promise chaining, which can lead to callback hell.

// The problem with promises is readability, and chaining with .then and .catch becomes complex. To resolve this, async and await come into play.
