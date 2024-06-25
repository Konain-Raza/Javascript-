# Array 💰

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [Array Methods](#array-methods-🛠️)
  - [Mutator Methods](#mutator-methods-🔧)
  - [Accessor Methods](#accessor-methods-🔍)
  - [Iteration Methods](#iteration-methods-🔄)
- [Examples](#examples-📝)
- [Practice Quetsion](#practice-question-📝)

## Introduction 📖
JavaScript provides a variety of methods to manipulate arrays. These methods can be categorized into mutator methods, accessor methods, and iteration methods.

## Array Methods 🛠️

### Mutator Methods 🔧
These methods modify the array itself.

- `push()`: Adds one or more elements to the end of an array. ➡️

  ```javascript
  let numbers = [1, 2, 3];
  numbers.push(4);
  console.log(numbers); // [1, 2, 3, 4]
  ```

- `pop()`: Removes the last element from an array. ⬅️

  ```javascript
  let numbers = [1, 2, 3, 4];
  numbers.pop();
  console.log(numbers); // [1, 2, 3]
  ```

- `shift()`: Removes the first element from an array. ⬆️

  ```javascript
  let numbers = [1, 2, 3];
  numbers.shift();
  
  
  console.log(numbers); // [2, 3]
  ```

- `unshift()`: Adds one or more elements to the beginning of an array. ⬇️

  ```javascript
  let numbers = [2, 3];
  numbers.unshift(1);
  console.log(numbers); // [1, 2, 3]
  ```

- `splice()`: Adds/removes elements from an array. ✂️

  ```javascript
  let numbers = [1, 2, 3, 4];
  numbers.splice(2, 1);
  console.log(numbers); // [1, 2, 4]
  ```

- `sort()`: Sorts the elements of an array. 🔀

  ```javascript
  let numbers = [3, 1, 4, 2];
  numbers.sort();
  console.log(numbers); // [1, 2, 3, 4]
  ```

- `reverse()`: Reverses the order of the elements in an array. 🔄

  ```javascript
  let numbers = [1, 2, 3];
  numbers.reverse();
  console.log(numbers); // [3, 2, 1]
  ```

### Accessor Methods 🔍
These methods do not modify the array and return some representation of the array.

- `concat()`: Merges two or more arrays. ➕

  ```javascript
  let numbers1 = [1, 2];
  let numbers2 = [3, 4];
  let combined = numbers1.concat(numbers2);
  console.log(combined); // [1, 2, 3, 4]
  ```

- `slice()`: Extracts a section of an array. 🔪

  ```javascript
  let numbers = [1, 2, 3, 4];
  let sliced = numbers.slice(1, 3);
  console.log(sliced); // [2, 3]
  ```

- `indexOf()`: Returns the first index at which a given element can be found. 🔢

  ```javascript
  let numbers = [1, 2, 3, 4];
  let index = numbers.indexOf(3);
  console.log(index); // 2
  ```

- `lastIndexOf()`: Returns the last index at which a given element can be found. 🔚

  ```javascript
  let numbers = [1, 2, 3, 2];
  let index = numbers.lastIndexOf(2);
  console.log(index); // 3
  ```

- `includes()`: Determines whether an array includes a certain element. 🔎

  ```javascript
  let numbers = [1, 2, 3];
  let includesTwo = numbers.includes(2);
  console.log(includesTwo); // true
  ```

- `join()`: Joins all elements of an array into a string. 🧵

  ```javascript
  let numbers = [1, 2, 3];
  let joined = numbers.join("-");
  console.log(joined); // "1-2-3"
  ```

### Iteration Methods 🔄
These methods are used to iterate over arrays, typically using callback functions.

- `forEach()`: Executes a provided function once for each array element. 🔁

  ```javascript
  let numbers = [1, 2, 3];
  numbers.forEach(num => console.log(num));
  // 1
  // 2
  // 3
  ```

- `map()`: Creates a new array with the results of calling a provided function on every element. 🗺️

  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6]
  ```

- `filter()`: Creates a new array with all elements that pass the test implemented by the provided function. 🔍

  ```javascript
  let numbers = [1, 2, 3, 4];
  let filtered = numbers.filter(num => num > 2);
  console.log(filtered); // [3, 4]
  ```

- `reduce()`: Apply a function against an accumulator and each element in the array to reduce it to a single value. ➖

  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 10
  ```

- `reduceRight()`: Apply a function against an accumulator and each element in the array (from right-to-left) to reduce it to a single value. ➖

  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduceRight((acc, num) => acc + num, 0);
  console.log(sum); // 10
  ```

- `some()`: Tests whether at least one element in the array passes the test implemented by the provided function. 🔎

  ```javascript
  let numbers = [1, 2, 3];
  let hasEven = numbers.some(num => num % 2 === 0);
  console.log(hasEven); // true
  ```

- `every()`: Tests whether all elements in the array pass the test implemented by the provided function. ✅

  ```javascript
  let numbers = [1, 2, 3];
  let allEven = numbers.every(num => num % 2 === 0);
  console.log(allEven); // false
  ```

- `find()`: Returns the value of the first element that passes a test. 🔍

  ```javascript
  let numbers = [1, 2, 3, 4];
  let found = numbers.find(num => num > 2);
  console.log(found); // 3
  ```

- `findIndex()`: Returns the index of the first element that passes a test. 🔢

  ```javascript
  let numbers = [1, 2, 3, 4];
  let index = numbers.findIndex(num => num > 2);
  console.log(index); // 2
  ```

## Examples 📝

Here's a quick example to demonstrate some of these methods:

```javascript
let numbers = [1, 2, 3, 4, 5];

// Using push() to add an element
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// Using pop() to remove the last element
numbers.pop(); // [1, 2, 3, 4, 5]

// Using map() to create a new array
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Using filter() to create a new array with elements greater than 2
let filtered = numbers.filter(num => num > 2); // [3, 4, 5]
```


Certainly! Here's how you can provide JSON data and convert it into an array:

## JSON Data to Array Conversion 📝

Suppose you have the following JSON data:

```json
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" }
  ]
}
```

To convert this JSON data into an array, you can use JavaScript:

```javascript
let jsonData = `{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" }
  ]
}`;

let parsedData = JSON.parse(jsonData);
let usersArray = parsedData.users;

console.log(usersArray);
```

This will log the following array to the console:

```javascript
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" }
]
```

## Practice Question 📋

You are given an array of numbers representing test scores of students. Use JavaScript array methods to perform the following tasks:

1. **Initial Array**:
   - Start with an array of test scores: `[88, 94, 78, 85, 91]`.

2. **Tasks to Perform**:
   - Add a score of `96` to the end of the array.
   - Remove the first score from the array.
   - Sort the array in descending order.
   - Find the average score of the remaining scores.
   - Create a new array that includes only the scores above `85`.
   - Join all elements of the new array into a single string separated by a comma.

3. **Expected Output**:
   - Display the final array after each operation.
   - Print the average score rounded to two decimal places.
   - Show the final comma-separated string of scores.

### Example Solution:

```javascript
let scores = [88, 94, 78, 85, 91];

// Add 96 to the end of the array
scores.push(96);
console.log("After adding 96:", scores);

// Remove the first score
scores.shift();
console.log("After removing the first score:", scores);

// Sort scores in descending order
scores.sort((a, b) => b - a);
console.log("Sorted in descending order:", scores);

// Calculate average score
let sum = scores.reduce((acc, score) => acc + score, 0);
let average = sum / scores.length;
console.log("Average score:", average.toFixed(2));

// Create new array with scores above 85
let above85 = scores.filter(score => score > 85);
console.log("Scores above 85:", above85);

// Join array elements into a comma-separated string
let commaSeparated = above85.join(", ");
console.log("Comma-separated string:", commaSeparated);
```

