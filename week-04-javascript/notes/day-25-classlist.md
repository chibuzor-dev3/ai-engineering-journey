# Day 25 - Part 1: JavaScript classList

## Objective

Learn how to add, remove, and toggle CSS classes using JavaScript.

This allows JavaScript to change the appearance of a webpage without directly changing individual CSS properties.

---

## What is classList?

Every HTML element has a `classList` property.

It lets JavaScript manage CSS classes on an element.

Example:

```javascript
let paragraph = document.getElementById("paragraph");
```

Now we can use:

```javascript
paragraph.classList.add("highlight");
```

to apply the CSS class named `highlight`.

---

## classList Methods

### 1. add()

Adds a class.

```javascript
paragraph.classList.add("highlight");
```

Result:

The paragraph receives the CSS styling inside `.highlight`.

---

### 2. remove()

Removes a class.

```javascript
paragraph.classList.remove("highlight");
```

Result:

The paragraph returns to its original appearance.

---

### 3. toggle()

Adds a class if it doesn't exist.

Removes the class if it already exists.

```javascript
paragraph.classList.toggle("highlight");
```

This is useful for:

- Dark Mode
- Dropdown menus
- Sidebars
- Popups
- Accordions

---

## Accessing the body

To change the whole page:

```javascript
let body = document.body;
```

Now we can do:

```javascript
body.classList.add("dark");
```

---

## Example CSS

```css
.dark{
    background-color: black;
    color: white;
}

.highlight{
    color: blue;
    font-size: 28px;
    font-weight: bold;
}
```

---

## Dark Mode Button

```javascript
darkButton.addEventListener("click", function(){

    body.classList.add("dark");

    paragraph.classList.add("highlight");

});
```

This applies Dark Mode.

---

## Light Mode Button

```javascript
lightButton.addEventListener("click", function(){

    body.classList.remove("dark");

    paragraph.classList.remove("highlight");

});
```

This removes Dark Mode.

---

## Toggle Button

```javascript
toggleButton.addEventListener("click", function(){

    body.classList.toggle("dark");

    paragraph.classList.toggle("highlight");

});
```

Each click switches between Dark Mode and Light Mode.

---

## Difference Between add(), remove(), and toggle()

| Method | Purpose |
|---------|----------|
| add() | Adds a class |
| remove() | Removes a class |
| toggle() | Adds or removes a class automatically |

---

## Real-World Uses

The `classList` property is used in almost every modern website.

Examples include:

- Dark Mode
- Mobile Navigation Menus
- Sidebar Toggle
- Notifications
- Login Forms
- Popups
- Dropdown Menus
- Accordions
- Tabs
- Image Galleries

Frameworks like React, Vue, Angular, and Next.js rely heavily on adding and removing CSS classes dynamically.

---

## Key Takeaways

- JavaScript can change CSS without editing styles directly.
- `classList` is cleaner than changing many individual style properties.
- `toggle()` is perfect for features that switch between two states.
- Combining CSS and JavaScript creates interactive web applications.

---

## Git Commit

```bash
git add .

git commit -m "Complete Day 25 Part 1 - JavaScript classList"

git push origin main
```

---

## Skills Learned Today

- Selecting HTML elements
- CSS Classes
- classList.add()
- classList.remove()
- classList.toggle()
- Event Listeners
- Building Dark Mode

---

## Progress

- [x] DOM Manipulation
- [x] Event Listeners
- [x] Styling with JavaScript
- [x] JavaScript classList
- [ ] Creating Elements
- [ ] Removing Elements
- [ ] Mini Project