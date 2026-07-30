# Day 23 - JavaScript DOM Introduction

## What is the DOM?

DOM stands for **Document Object Model**.

The DOM is a programming interface that represents an HTML webpage as objects that JavaScript can access and manipulate.

It allows JavaScript to interact with HTML elements.

---

## Why is the DOM Important?

Using the DOM, JavaScript can:

- Change text
- Change styles
- Hide or show elements
- Respond to button clicks
- Create interactive webpages

Without the DOM, JavaScript cannot modify a webpage.

---

## Selecting an Element

JavaScript uses the `document` object to access HTML elements.

Example HTML:

```html
<h1 id="title">Hello, World!</h1>
```

JavaScript:

```javascript
let title = document.getElementById("title");
```

Explanation:

- `document` represents the webpage.
- `getElementById()` finds an element using its `id`.
- `"title"` is the ID of the HTML element.

---

## Viewing an Element

```javascript
console.log(title);
```

This displays the selected HTML element in the browser console.

---

## Changing Text

Example:

```javascript
title.textContent = "Welcome to My AI Engineering Journey!";
```

Before:

```
Hello, World!
```

After:

```
Welcome to My AI Engineering Journey!
```

`textContent` changes the text inside an HTML element.

---

## Buttons

Example HTML:

```html
<button id="btn">Click Me</button>
```

Buttons allow users to interact with a webpage.

---

## Events

An event is an action that occurs on a webpage.

Examples include:

- Clicking a button
- Typing in a text box
- Moving the mouse
- Pressing a key
- Submitting a form

JavaScript can listen for these events and respond to them.

---

## addEventListener()

Example:

```javascript
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    title.textContent = "Button Clicked!";
});
```

Explanation:

`addEventListener()` waits for a specific event.

In this example:

- The event is `"click"`.
- When the button is clicked, the code inside the function runs.

---

## Anonymous Functions

Example:

```javascript
function () {
    title.textContent = "Button Clicked!";
}
```

This is called an **anonymous function** because it has no name.

It executes only when the specified event occurs.

---

## Complete Example

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Practice</title>
</head>
<body>

<h1 id="title">Hello, World!</h1>

<button id="btn">Click Me</button>

<script src="../practice/dom.js"></script>

</body>
</html>
```

### JavaScript

```javascript
let title = document.getElementById("title");
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    title.textContent = "Welcome to My AI Engineering Journey!";
});
```

---

## Key Terms

| Term | Meaning |
|------|---------|
| DOM | Document Object Model |
| document | Represents the webpage |
| getElementById() | Selects an HTML element by its ID |
| textContent | Changes or reads an element's text |
| Event | An action performed by the user |
| click | Mouse click event |
| addEventListener() | Listens for an event and executes code |
| Anonymous Function | A function without a name |

---

## Summary

By the end of Day 23, you should be able to:

- Explain what the DOM is.
- Select HTML elements using `getElementById()`.
- View HTML elements in the browser console.
- Change text using `textContent`.
- Add interactivity using buttons.
- Use `addEventListener()` to respond to user actions.
- Understand how JavaScript makes webpages interactive.