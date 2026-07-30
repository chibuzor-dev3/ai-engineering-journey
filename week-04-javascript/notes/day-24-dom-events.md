# Day 24 – JavaScript DOM (Document Object Model)

## Objectives

By the end of this lesson, I can:

- Understand what the DOM is.
- Select HTML elements using JavaScript.
- Change text on a webpage.
- Read user input.
- Respond to button clicks.
- Change CSS styles with JavaScript.
- Hide and show HTML elements.
- Toggle elements using if...else.
- Create new HTML elements dynamically.
- Add new elements to the webpage.

---

# What is the DOM?

DOM stands for **Document Object Model**.

It is a representation of an HTML page that JavaScript can interact with.

Instead of seeing HTML as plain text, JavaScript sees it as objects.

Example:

```html
<h1 id="title">Welcome!</h1>
```

JavaScript can access it like this:

```javascript
let title = document.getElementById("title");
```

---

# Selecting Elements

Use `getElementById()` to select an element.

```javascript
let title = document.getElementById("title");
```

---

# Changing Text

Use `textContent`.

```javascript
title.textContent = "Welcome to My AI Engineering Journey!";
```

---

# Reading User Input

HTML

```html
<input id="nameInput">
```

JavaScript

```javascript
let input = document.getElementById("nameInput");

let name = input.value;
```

---

# Button Click Events

```javascript
button.addEventListener("click", function () {

});
```

The code inside the function runs whenever the button is clicked.

---

# Changing CSS with JavaScript

```javascript
title.style.color = "black";

title.style.backgroundColor = "green";

title.style.padding = "20px";

title.style.borderRadius = "10px";

title.style.fontSize = "50px";

title.style.fontStyle = "italic";

title.style.fontWeight = "bold";
```

---

# Resetting Styles

```javascript
title.style.color = "black";
title.style.backgroundColor = "";
title.style.padding = "";
title.style.borderRadius = "";
title.style.fontSize = "";
title.style.fontStyle = "";
title.style.fontWeight = "";
```

Using an empty string removes the inline style.

---

# Hiding Elements

```javascript
secret.style.display = "none";
```

---

# Showing Elements

```javascript
secret.style.display = "block";
```

---

# Toggle Button

```javascript
toggleButton.addEventListener("click", function () {

    if (secret.style.display === "none") {

        secret.style.display = "block";

    } else {

        secret.style.display = "none";

    }

});
```

---

# Creating Elements

```javascript
let newParagraph = document.createElement("p");
```

---

# Adding Text

```javascript
newParagraph.textContent = "🚀 I am becoming an AI Software Engineer!";
```

---

# Styling New Elements

```javascript
newParagraph.style.color = "green";
newParagraph.style.backgroundColor = "yellow";
newParagraph.style.fontSize = "24px";
newParagraph.style.fontWeight = "bold";
newParagraph.style.padding = "10px";
newParagraph.style.borderRadius = "8px";
```

---

# Adding Elements to the Page

```javascript
document.body.appendChild(newParagraph);
```

---

# Complete Example

```javascript
createButton.addEventListener("click", function () {

    let newParagraph = document.createElement("p");

    newParagraph.textContent = "🚀 I am becoming an AI Software Engineer!";

    newParagraph.style.color = "green";
    newParagraph.style.backgroundColor = "yellow";
    newParagraph.style.fontSize = "24px";
    newParagraph.style.fontWeight = "bold";
    newParagraph.style.padding = "10px";
    newParagraph.style.borderRadius = "8px";

    document.body.appendChild(newParagraph);

});
```

---

# Key Takeaways

- The DOM allows JavaScript to interact with HTML.
- `getElementById()` selects elements.
- `textContent` changes text.
- `.value` reads user input.
- `addEventListener()` responds to user actions.
- `.style` changes CSS properties.
- `display = "none"` hides elements.
- `display = "block"` shows elements.
- `createElement()` creates new HTML elements.
- `appendChild()` adds elements to the webpage.

---

# Real-World Uses

- Login forms
- Dashboard interfaces
- Chat applications
- To-do lists
- Social media feeds
- Shopping carts
- Healthcare web applications
- AI-powered interfaces

---

## Day 24 Summary

Today I learned how JavaScript interacts with HTML using the Document Object Model (DOM). I selected elements, changed text, handled user input, listened for button clicks, modified CSS styles, hid and showed elements, toggled visibility with `if...else`, and created new HTML elements dynamically. These skills are the foundation of building interactive web applications.