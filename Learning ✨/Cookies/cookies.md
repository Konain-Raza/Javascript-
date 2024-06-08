#  Cookies 🍪

Cookies in JavaScript allow you to store small pieces of data in the user's browser. They are commonly used for user authentication, session management, and tracking user activity on websites.

## Table of Contents 📑
- [Introduction](#introduction-📖)
- [Creating Cookies](#creating-cookies-🍪)
- [Reading Cookies](#reading-cookies-👓)
- [Updating Cookies](#updating-cookies-🔄)
- [Deleting Cookies](#deleting-cookies-🗑️)
- [Cookie Attributes](#cookie-attributes-🔍)
- [Security Considerations](#security-considerations-🔒)
- [Cookies and HTTPS](#cookies-and-https-🔐)
- [Best Practices](#best-practices-🚀)
- [Resources](#resources-📚)

## Introduction 📖

Cookies are small pieces of data stored in the user's browser. They are sent with every HTTP request to the same domain, allowing websites to remember user preferences, login status, and other information. Cookies have a maximum size limit (usually around 4KB) and an expiration date, after which they are automatically deleted.

## Creating Cookies 🍪

You can create a cookie using the `document.cookie` property. Cookies are set as key-value pairs, separated by semicolons.

```javascript
document.cookie = "username=John Doe";
```
### Reading Cookies 👓

To read a cookie, you can access the `document.cookie` property, which returns a string containing all cookies for the current document.

```javascript
let cookies = document.cookie;
console.log(cookies);
```
### Updating Cookies 🔄

To update a cookie, you can set it again with the same name. The new value will replace the old one.

```javascript
document.cookie = "username=Jane Doe;";
```

### Cookie Attributes 🔍

Cookies can have various attributes such as `expires`, `path`, `domain`, and `secure`, which control their behavior and scope. These attributes are appended to the cookie string.

```javascript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/; domain=example.com; secure";
```
### Security Considerations 🔒

Cookies are vulnerable to security threats such as cross-site scripting (XSS) and cross-site request forgery (CSRF). It's important to properly validate and sanitize cookie data to prevent these attacks.

### Cookies and HTTPS 🔐

Cookies are sent with every HTTPS request to the same domain. This means that sensitive information stored in cookies should be encrypted to ensure privacy and security.

### Practice Question 🍪

Suppose you're building a basic website where users can enter their name and you want to greet them by name every time they visit the website. You decide to use cookies to store the user's name.

Write JavaScript code to accomplish the following tasks:

1. When the user enters their name in an input field and submits the form, store their name in a cookie named "userName".
2. When the website loads, check if the "userName" cookie exists. If it does, greet the user by name. If not, display a generic greeting.
3. Include a button that allows the user to clear the "userName" cookie, resetting the greeting to a generic one.


