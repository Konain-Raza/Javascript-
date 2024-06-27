# Regular Expressions 🎯

1. [Introduction](#introduction)
2. [Creating Regular Expressions](#creating-regular-expressions)
3. [Regex Methods](#regex-methods)
4. [Regex Patterns](#regex-patterns)
5. [Flags](#flags)
6. [Common Patterns](#common-patterns)
7. [Practice Questions](#practice-questions)

## Introduction 🌟

Regular expressions (regex or regexp) are patterns used to match character combinations in strings. In JavaScript, regex is implemented with the `RegExp` object and various methods that allow for powerful string searching and manipulation based on patterns.

## Creating Regular Expressions 🧵

Regex can be created using a literal syntax or the `RegExp` constructor.

- **Literal Syntax:**
  
  ```javascript
  const regexLiteral = /pattern/;
  ```

- **Using `RegExp` Constructor:**
  
  ```javascript
  const regexConstructor = new RegExp('pattern');
  ```

## Regex Methods 🛠️

JavaScript provides methods for working with regex:

- **`test()`**: Tests for a match in a string and returns true or false.
  
  ```javascript
  const regex = /pattern/;
  regex.test('input string'); // Returns true or false
  ```

- **`exec()`**: Executes a search for a match in a string and returns the result array or `null`.
  
  ```javascript
  const regex = /pattern/;
  regex.exec('input string'); // Returns array or null
  ```

## Regex Patterns 🔍

### Basic Patterns

- **Literal Characters**: Characters match themselves (e.g., `/abc/` matches 'abc').
- **Character Classes**: `[...]` matches any single character within the brackets (e.g., `/[abc]/` matches 'a', 'b', or 'c').
- **Quantifiers**: `{}` specifies exact occurrences (e.g., `/a{2}/` matches 'aa').

### Metacharacters

- **`.` (Dot)**: Matches any single character except newline.
- **`\d`, `\w`, `\s`**: Shorthand for digit, word, and whitespace characters respectively.
- **Anchors**: `^` (start of string), `$` (end of string).

## Flags 🚩

Flags modify how regex behaves:

- **`g` (global)**: Searches for all matches.
- **`i` (case insensitive)**: Ignores case.
- **`m` (multiline)**: Treats beginning (`^`) and end (`$`) characters as working across multiple lines.

```javascript
const regex = /pattern/gi; // Example with global and case insensitive flags
```

## Common Patterns 📊

### Email Validation

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test('example@email.com'); // Returns true or false
```

### URL Matching

```javascript
const urlRegex = /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
urlRegex.test('https://example.com/path'); // Returns true or false
```

## Practice Questions 📝

1. How do you create a regular expression in JavaScript?
2. What are flags in regex and how do they modify pattern matching?
3. Explain how `test()` and `exec()` methods work with regex in JavaScript.
4. What are metacharacters and give examples of their usage?
5. How can you match email addresses and URLs using regex in JavaScript?

Explore these questions to enhance your understanding and proficiency in using regular expressions in JavaScript. Happy coding!

