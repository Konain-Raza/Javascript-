# Hoisting 🚀


## 📋 Table of Contents

- [Introduction](#introduction)
- [Hoisting of Variables](#hoisting-of-variables)
- [Hoisting of Functions](#hoisting-of-functions)
- [Common Pitfalls](#common-pitfalls)
- [Best Practices](#best-practices)
- [Practice Questions](#practice-questions)

## 📝 Introduction

Hoisting is a fundamental concept in JavaScript that impacts how variables and functions are declared and initialized. During the compilation phase, JavaScript moves (or "hoists") variable and function declarations to the top of their containing scope. This means you can use variables and functions before they are actually declared in the code. Understanding hoisting is crucial for writing predictable and bug-free code, as it helps you anticipate how and when different parts of your code will be executed. By mastering hoisting, you can avoid common pitfalls and ensure your JavaScript programs run smoothly.

## 📦 Hoisting of Variables

Variables declared with `var` are hoisted to the top of their scope, but only the declaration is hoisted, not the initialization.

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

### `let` and `const`

Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a `ReferenceError`.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
```

## 🛠️ Hoisting of Functions

Function declarations are hoisted completely, meaning both the function name and the body are moved to the top of their scope.

```javascript
greet(); // Output: Hello, world!

function greet() {
  console.log('Hello, world!');
}
```

Function expressions, however, are not hoisted.

```javascript
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
  console.log('Hello!');
};
```

## ⚠️ Common Pitfalls

1. **Temporal Dead Zone (TDZ)**: Variables declared with `let` and `const` are in the TDZ from the start of the block until the declaration is encountered.

2. **Using Function Expressions before Declaration**: Function expressions are not hoisted, leading to runtime errors if called before the declaration.

3. **Re-declaring Variables with `var`**: Variables declared with `var` can be re-declared, leading to potential bugs.

## ✅ Best Practices

- Always declare variables at the top of their scope to avoid confusion.
- Use `let` and `const` instead of `var` for block-scoped variables.
- Declare functions before calling them to enhance code readability and maintainability.

## 📘 Practice Questions

### Variable Hoisting 📝

1. What will be the output of the following code?

    ```javascript
    console.log(a);
    var a = 10;
    ```

2. Explain the difference between `var`, `let`, and `const` in terms of hoisting.

### Function Hoisting 📚💻

1. What will be the output of the following code?

    ```javascript
    hello();
    
    function hello() {
      console.log('Hello, world!');
    }
    ```

2. What will happen if you call a function expression before it is defined?

### Scenario-Based Questions 🔍

1. Given the following code, what will be the output and why?

    ```javascript
    function test() {
      console.log(message);
      var message = 'Hoisted!';
      console.log(message);
    }
    test();
    ```

2. Rewrite the following code to avoid any hoisting issues:

    ```javascript
    var name = 'Alice';
    function printName() {
      console.log(name);
      var name = 'Bob';
    }
    printName();
    ```
