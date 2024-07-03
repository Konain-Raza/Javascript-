# Document Object Model 🌐

## Table of Contents 📑

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Selecting Elements](#selecting-elements)
4. [Manipulating Elements](#manipulating-elements)
5. [Event Handling](#event-handling)
6. [Traversing the DOM](#traversing-the-dom)
7. [Creating and Removing Elements](#creating-and-removing-elements)
8. [Advanced Techniques](#advanced-techniques)
9. [Best Practices](#best-practices)
10. [Practice Questions](#practice-questions)

## Introduction ✨

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects. JavaScript can interact with the DOM to manipulate and dynamically update the content, structure, and style of a web page.

## Getting Started 🚀

To start working with the DOM in JavaScript, ensure you have a basic HTML file and a linked JavaScript file. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <p class="description">This is a simple paragraph.</p>
    <button id="changeColorButton">Change Color</button>
    <input type="text" id="textInput" placeholder="Type something">
    <div id="dragContainer">
        <p id="draggable" draggable="true">Drag me!</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
And in your script.js file:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
});
```
# Selecting Elements 🔍
Selecting elements is the first step in manipulating the DOM. You can select elements using various methods:

## By ID
```javascript
const title = document.getElementById('title');
```
## By Class Name
```javascript
const descriptions = document.getElementsByClassName('description');
```
## By Tag Name
```javascript
const paragraphs = document.getElementsByTagName('p');
```
## By CSS Selector
```javascript
const title = document.querySelector('#title');
const descriptions = document.querySelectorAll('.description');
```
# Manipulating Elements 🛠️
Once you've selected an element, you can manipulate it:

## Changing Text Content
```javascript
title.textContent = 'New Title';
```
## Changing HTML Content
```javascript
title.innerHTML = '<span>New Title</span>';
```
## Changing Attributes
```javascript
title.setAttribute('class', 'new-class');
title.id = 'new-id';
```
## Changing Styles
You can apply a wide range of CSS properties to DOM elements using JavaScript. Here are some common properties:

```javascript
title.style.color = 'blue'; // Text color
title.style.backgroundColor = 'yellow'; // Background color
title.style.fontSize = '24px'; // Font size
title.style.margin = '10px'; // Margin
title.style.padding = '5px'; // Padding
title.style.border = '1px solid black'; // Border
title.style.display = 'none'; // Display property
title.style.visibility = 'hidden'; // Visibility
title.style.width = '100px'; // Width
title.style.height = '50px'; // Height
title.style.position = 'absolute'; // Positioning
title.style.top = '10px'; // Top position
title.style.left = '20px'; // Left position
// And many more...
```
# Event Handling 🎯
Handling events is crucial for interactive web pages. Add event listeners to respond to user actions. Here are some useful event handling examples:

## Mouse Events
### click - Change Color of Element
```javascript
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', () => {
    title.style.color = title.style.color === 'blue' ? 'red' : 'blue';
});
```
### dblclick - Toggle Background Color
```javascript
title.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'yellow' ? 'white' : 'yellow';
});
```
### mousedown - Log Mouse Button Press
```javascript
title.addEventListener('mousedown', () => {
    console.log('Mouse button pressed down on title');
});
```
### mouseup - Log Mouse Button Release
```javascript
title.addEventListener('mouseup', () => {
    console.log('Mouse button released over title');
});
```
### mouseenter - Highlight Element
```javascript
title.addEventListener('mouseenter', () => {
    title.style.backgroundColor = 'lightgray';
});
title.addEventListener('mouseleave', () => {
    title.style.backgroundColor = '';
});
```
### mousemove - Log Mouse Position
```javascript
title.addEventListener('mousemove', (event) => {
    console.log(`Mouse moved at (${event.clientX}, ${event.clientY})`);
});
```
### contextmenu - Prevent Default Context Menu
```javascript
title.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Context menu opened on title');
});
```
## Keyboard Events
### keydown - Display Key Pressed
```javascript
const textInput = document.getElementById('textInput');
textInput.addEventListener('keydown', (event) => {
    console.log(`Key down: ${event.key}`);
});
```
### keyup - Display Key Released
```javascript
textInput.addEventListener('keyup', (event) => {
    console.log(`Key up: ${event.key}`);
});
```
### keypress - Display Key Pressed
```javascript
textInput.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});
```
## Form Events
### submit - Handle Form Submission
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
});
```
### change - Handle Input Change
```javascript
textInput.addEventListener('change', () => {
    console.log('Input value changed');
});
```
### focus - Log Input Focus
```javascript
textInput.addEventListener('focus', () => {
    console.log('Input focused');
});
```
### blur - Log Input Blur
```javascript
textInput.addEventListener('blur', () => {
    console.log('Input lost focus');
});
```
### input - Display Input Value
```javascript
textInput.addEventListener('input', () => {
    console.log(`Input value: ${textInput.value}`);
});
```
### reset - Handle Form Reset
```javascript
form.addEventListener('reset', () => {
    console.log('Form reset');
});
```
### select - Log Text Selection
```javascript
const textarea = document.querySelector('textarea');
textarea.addEventListener('select', () => {
    console.log('Text selected in textarea');
});
```
## Window Events
### load - Log Window Load
```javascript
window.addEventListener('load', () => {
    console.log('Window loaded');
});
```
### unload - Log Window Unload
```javascript
window.addEventListener('unload', () => {
    console.log('Window unloaded');
});
```
### resize - Log Window Resize
```javascript
window.addEventListener('resize', () => {
    console.log('Window resized');
});
```
### scroll - Log Window Scroll
```javascript
window.addEventListener('scroll', () => {
    console.log('Window scrolled');
});
```
### error - Log Error
```javascript
window.addEventListener('error', (event) => {
    console.log('Error occurred:', event.message);
});
```
### beforeunload - Handle Before Unload
```javascript
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
    console.log('Before unload');
});
```
## Touch Events
### touchstart - Handle Touch Start
```javascript
title.addEventListener('touchstart', () => {
    console.log('Touch started');
});
```
### touchmove - Handle Touch Move
```javascript
title.addEventListener('touchmove', () => {
    console.log('Touch moved');
});
```
### touchend - Handle Touch End
```javascript
title.addEventListener('touchend', () => {
    console.log('Touch ended');
});
```
### touchcancel - Handle Touch Cancel
```javascript
title.addEventListener('touchcancel', () => {
    console.log('Touch cancelled');
});
```
## Drag Events
### drag - Handle Drag
```javascript
const draggable = document.getElementById('draggable');
draggable.addEventListener('drag', () => {
    console.log('Element being dragged');
});
```
### dragstart - Handle Drag Start
```javascript
draggable.addEventListener('dragstart', () => {
    console.log('Drag started');
});
```
### dragend - Handle Drag End
```javascript
draggable.addEventListener('dragend', () => {
    console.log('Drag ended');
});
```
### dragover - Handle Drag Over
```javascript
const dragContainer = document.getElementById('dragContainer');
dragContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('Drag over container');
});
```
### dragenter - Handle Drag Enter
```javascript
dragContainer.addEventListener('dragenter', () => {
    console.log('Drag entered container');
});
```
### dragleave - Handle Drag Leave
```javascript
dragContainer.addEventListener('dragleave', () => {
    console.log('Drag left container');
});
```
### drop - Handle Drop
```javascript
dragContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    console.log('Element dropped in container');
});
```

## Adding an Event Listener
```javascript
title.addEventListener('click', () => {
    alert('Title clicked!');
});
```
## Removing an Event Listener
```javascript
const handleClick = () => {
    alert('Title clicked!');
};
title.addEventListener('click', handleClick);
title.removeEventListener('click', handleClick);
```
## Traversing the DOM 🌲
You can navigate through the DOM tree to find related elements:

### Parent Node
```javascript
const parent = title.parentNode;
```
### Child Nodes
```javascript
const children = title.childNodes;
const firstChild = title.firstChild;
const lastChild = title.lastChild;
```
### Sibling Nodes
```javascript
const nextSibling = title.nextSibling;
const previousSibling = title.previousSibling;
```
## Creating and Removing Elements ✏️❌
### Dynamically create and remove elements:

#### Creating an Element
```javascript
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
document.body.appendChild(newElement);
```
#### Removing an Element
```javascript
document.body.removeChild(newElement);
```
### Advanced Techniques 🧠
#### Explore advanced DOM manipulation techniques:

##### Cloning Elements
```javascript
const clonedElement = title.cloneNode(true);
document.body.appendChild(clonedElement);
```
### Using Templates
```html
<template id="my-template">
    <p>This is a template content.</p>
</template>
```
```javascript
const template = document.getElementById('my-template');
const clone = document.importNode(template.content, true);
document.body.appendChild(clone);
```
Best Practices 🌟
Minimize DOM Manipulations: Batch DOM updates to improve performance.
Use Event Delegation: Attach events to a parent element to handle events for multiple child elements.
Keep a Clean DOM: Remove unused elements to keep the DOM clean and improve performance.
### Practice Questions 📝
1. **Change Color and Text of an Element:**
   Write JavaScript code that changes the color of an `<h1>` element with the ID "mainHeading" to red and changes its text content to "Updated Heading".

2. **Append New Element:**
   Write JavaScript code to create a new `<p>` element with the text content "This is a new paragraph." and append it to the `<div>` with the ID "contentContainer".

3. **Toggle Visibility:**
   Write JavaScript code that toggles the visibility of an `<img>` element with the ID "imageToggle" when a button with the ID "toggleButton" is clicked. Initially, the image should be visible, and clicking the button should hide or show the image alternately.

4. **Create and Remove Element:**
   Write JavaScript code to create a new `<li>` element with the text content "New Item" and add it to an existing `<ul>` list with the ID "itemList". Then, write code to remove this newly added `<li>` element after 5 seconds.

5. **Hover Effect:**
   Implement a hover effect using JavaScript:
   - When the mouse enters an `<a>` element with the class "navLink", change its background color to light blue.
   - When the mouse leaves the element, revert the background color to its original state.

6. **Form Validation:**
   Create a form with fields for name and email. Implement JavaScript code that validates:
   - The name field should not be empty.
   - The email field should contain a valid email address format.
   Display appropriate error messages or change border colors based on validation results.

7. **Dynamic Content Update:**
   Implement a counter that increments by 1 every second and updates the text content of a `<span>` element with the ID "counterDisplay". Stop the counter when it reaches 10.

8. **Drag and Drop:**
   Make an element draggable (e.g., an `<img>` or `<div>`). Write JavaScript code to handle the drag and drop events:
   - Log messages to the console when dragging starts, ends, and when the element is dropped into a drop zone.

9. **Event Delegation:**
   Set up event delegation for a list of items contained within a `<ul>` element with the ID "itemList":
   - Add a click event listener to the `<ul>` element.
   - When any `<li>` item inside the `<ul>` is clicked, log its text content to the console.

10. **Dynamic Styles:**
    Implement a function that dynamically changes the font size and color of an `<h2>` element with the ID "dynamicHeading":
    - On clicking a button with the ID "fontSizeButton", increase the font size by 2px.
    - On clicking a button with the ID "colorChangeButton", toggle the color between red and blue.
