# Loops 🔄

Loops in JavaScript allow you to repeatedly execute a block of code as long as a condition is true. They are fundamental for iterating over arrays, processing data, and controlling the flow of your program.

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [Types of Loops](#types-of-loops-🔄)
  - [for Loop](#for-loop-🔂)
  - [while Loop](#while-loop-🔄)
  - [do...while Loop](#do...while-loop-🔃)
  - [for...in Loop](#for...in-loop-🔀)
  - [for...of Loop](#for...of-loop-🔁)
- [Loop Control Statements](#loop-control-statements-⏸️)
- [Example](#example-📝)
- [Practice Question](#practice-question-📝)

## Introduction 📖

Loops are used in JavaScript to execute a block of code multiple times. They help automate repetitive tasks and make code more efficient. JavaScript provides several types of loops to suit different situations.

## Types of Loops 🔄

### for Loop 🔂

The `for` loop repeats a block of code a specified number of times.


```javascript
//for (initialization; condition; increment/decrement) 
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
### While Loop 🔄

The while loop repeats a block of code while a specified condition is true.

```javascript
// while(condition)
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
### do...while Loop 🔃

The do...while loop is similar to the while loop, but the block of code is executed at least once before the condition is tested.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
### for...of Loop 🔁

The for...of loop iterates over the values of an iterable object like arrays, strings, or collections.

```javascript
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
```
### Loop Control Statements ⏸️

JavaScript provides loop control statements to alter the execution flow within loops:

- `break`: Terminates the loop.
- `continue`: Skips the current iteration of the loop.

### Example 📝

Here's a simple example demonstrating how to use a for loop to iterate over an array:

```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```
### Practice Question 📝

Suppose you have an array of numbers and you want to find the sum of all the odd numbers in the array. However, there's a twist - you can only use a single loop and no additional arrays or variables apart from the loop variable.

Write a function called `sumOfOddNumbers` that takes an array of numbers as input and returns the sum of all the odd numbers in the array using only a single loop.

```javascript
function sumOfOddNumbers(numbers) {
  // Your code here
}
```

