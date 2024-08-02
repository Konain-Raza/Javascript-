# Local Storage 🗄️

Local Storage in JavaScript allows you to store key-value pairs in a web browser with no expiration date, and its maximum size is usually 5 MB. This is useful for persisting data locally between sessions or even after the browser is closed.

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [Usage](#usage-💡)
  - [Setting Items](#setting-items-🔧)
  - [Getting Items](#getting-items-🔍)
  - [Removing Items](#removing-items-🗑️)
- [Example](#example-📝)
- [Practice Question](#practice-questions-📝)

## Introduction 📖

Local Storage is a part of the Web Storage API which provides a way to store data locally in the user's browser. It allows you to store data with no expiration date, meaning the data will persist even after the browser window is closed.

## Usage 💡

### Setting Items 🔧

To store data in the local storage, you can use the `setItem` method. The data is stored as key-value pairs.

```javascript
localStorage.setItem('key', 'value');
```
## Getting Items 🔍

You can retrieve data from Local Storage using the `getItem` method.

```javascript
let value = localStorage.getItem('key');
console.log(value); // Output: Value corresponding to the key in Local Storage
```Sure, here's how you can modify the README to include `localStorage.clear()` for deleting all key-value pairs:

---
```
## Removing Items 🗑️

To remove an item from Local Storage, you can use the `removeItem` method.

```javascript
localStorage.removeItem('key');
```

To clear all items from Local Storage, you can use the `clear` method.

```javascript
localStorage.clear();
```

### Example 📝

Here's a quick example demonstrating how to use Local Storage:

```javascript
// Setting data in Local Storage
localStorage.setItem('username', 'John');

// Retrieving data from Local Storage
let username = localStorage.getItem('username');
console.log('Username:', username);

// Removing a specific item from Local Storage
localStorage.removeItem('username');

// Setting another item in Local Storage
localStorage.setItem('age', '30');

// Clearing all items from Local Storage
localStorage.clear();
```
### Practice Question 📝

Suppose you're building a task management application. You want to use Local Storage to save and retrieve tasks entered by the user.

1. Write a function to add a task to Local Storage. The function should take two parameters: `taskName` (string) and `taskId` (number).
2. Write a function to retrieve a task from Local Storage based on its `taskId`.
3. Write a function to remove a task from Local Storage based on its `taskId`.
4. Write a function to clear all tasks from Local Storage.

Test these functions with sample data to ensure they work correctly.
