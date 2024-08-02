# Closures in JavaScript 📦

## Table of Contents 📜
1. [Overview](#overview)
2. [Definition](#definition)
3. [Example](#example)
4. [Closure Use Cases](#closure-use-cases)
5. [Practice Questions](#practice-questions)

## Overview 📝

Closures are an important concept in JavaScript that allow functions to retain access to variables from their parent scopes even after the parent function has finished executing. Understanding closures is crucial for writing clean and efficient JavaScript code.

## Definition 📚

A closure is the combination of a function and the lexical environment within which that function was declared. This allows the function to retain access to variables from its parent scope even after the parent function has finished executing.

## Example 💡

```javascript
function outerFunction() {
    let outerVariable = 'I am from outer function';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // Output: "I am from outer function"
```

## Closure Use Cases 🛠️

- **Encapsulation:** Closures can be used to create private variables and methods, encapsulating them within a function scope.
- **Callback Functions:** Closures are commonly used in callback functions to maintain access to the surrounding state.
- **Memoization:** Closures can be utilized to implement memoization, caching the results of expensive function calls for future use.

## Practice Questions 💻

1. **Basic Closure:**
   - Write a closure function that takes a number as input and returns a function that adds that number to any other number passed to it.

2. **Encapsulation with Closure:**
   - Create a counter function using closures that increments a counter variable each time it is called.

3. **Callback Function with Closure:**
   - Write a function that takes a callback function as an argument and calls it after a specific delay using `setTimeout`. Use a closure to maintain access to variables from the surrounding scope inside the callback function.
```
