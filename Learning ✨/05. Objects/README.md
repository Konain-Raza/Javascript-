# Objects 🛠️

JavaScript objects are collections of key-value pairs, where the keys are strings (or Symbols) and the values can be any type, including other objects. Objects allow you to store related data and functions together, making your code more organized and manageable.

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [Creating Objects](#creating-objects-🛠️)
  - [Object Literals](#object-literals-📝)
- [Accessing Properties](#accessing-properties-🔍)
- [Modifying Properties](#modifying-properties-🔧)
- [Deleting Properties](#deleting-properties-🗑️)
- [Methods](#methods-🔄)
- [Iterating Over Objects](#iterating-over-objects-🔄)
- [Object Destructuring](#Object-Destructuring-🔄)
- [Practice Question](#practice-question-📝)

## Introduction 📖

Objects in JavaScript are used to group related data and functionality. They are one of the fundamental building blocks of JavaScript programming, allowing you to model real-world entities and their interactions.

## Creating Objects 🛠️

### Object Literals 📝

The simplest way to create an object is using an object literal, which is a comma-separated list of key-value pairs wrapped in curly braces `{}`.

``` javascript
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};
```

## Accessing Properties 🔍

You can access object properties using dot notation or bracket notation.

``` javascript
console.log(person.name); // Dot notation 
console.log(person['age']); // Bracket notation
```
## Modifying Properties 🔧

You can add, modify, or delete properties of an object.

``` javascript
person.name = 'Jane'; // Modify 
person.city = 'New York'; // Add
```
## Deleting Properties 🗑️

You can delete properties from an object using the `delete` operator.

``` javascript
delete person.age;
```

## Methods 🔄

Methods are functions stored as object properties. They can be used to perform actions using the object's data.

``` javascript
person.greet = function() {
  console.log('Hello, my name is ' + this.name);
};
person.greet();

```

## Iterating Over Objects 🔄

You can iterate over object properties using `for...in` loop, `Object.keys()`, `Object.values()`, or `Object.entries()`.

``` javascript
for (let key in person) { 
console.log(key + ': ' + person[key]); 
}

Object.keys(person).forEach(key => console.log(key + ': ' + person[key])); 
Object.values(person).forEach(value => console.log(value)); 
Object.entries(person).forEach(([key, value]) => console.log(key + ': ' + value));
```

## Object Destructuring 🔎

Object destructuring allows you to extract properties from an object and assign them to variables.

```javascript
const { name, age } = person;
console.log(name); // 'Jane'
console.log(age); // 30
```

You can also assign new variable names while destructuring.

```javascript
const { name: personName, age: personAge } = person;
console.log(personName); // 'Jane'
console.log(personAge); // 30
```
## Practice Question 📝

Suppose you have an array of objects representing books in a library. Each book object contains the properties `title`, `author`, and `isAvailable`. Write a function that accepts this array and returns a list of all available book titles.

``` javascript
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: false },
  { title: '1984', author: 'George Orwell', isAvailable: true }
];

function getAvailableBooks(books) {
  // Your code here
}

console.log(getAvailableBooks(books)); // Output: ['The Great Gatsby', '1984']
```
JavaScript objects are powerful and flexible, allowing you to create complex data structures and manage them efficiently. Mastering objects is crucial for becoming proficient in JavaScript programming.
