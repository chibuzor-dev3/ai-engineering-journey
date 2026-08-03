# Day 25 – Mini Project
## Student Registration App

## Objective

Build a simple Student Registration application using JavaScript DOM Manipulation and Form Validation.

This project combines everything learned throughout Day 25.

---

# Skills Practiced

- Selecting HTML elements
- Event Listeners
- Form Validation
- Reading User Input
- CSS Classes
- DOM Manipulation
- Conditional Statements
- Clearing Input Fields

---

# Project Structure

```
student-registration/

│── index.html

│── style.css

└── script.js
```

---

# HTML Elements

The application contains:

- Heading
- Name Input
- Age Input
- Register Button
- Message Paragraph

Example:

```html
<input type="text" id="nameInput">

<input type="number" id="ageInput">

<button id="registerBtn">
Register
</button>

<p id="message"></p>
```

---

# Selecting Elements

```javascript
let nameInput = document.getElementById("nameInput");

let ageInput = document.getElementById("ageInput");

let button = document.getElementById("registerBtn");

let message = document.getElementById("message");
```

---

# Event Listener

```javascript
button.addEventListener("click", function(){

});
```

This waits for the Register button to be clicked.

---

# Reading User Input

```javascript
let name = nameInput.value.trim();

let age = Number(ageInput.value);
```

## trim()

Removes spaces before and after text.

Example

```
"   Chris   "

↓

"Chris"
```

---

## Number()

Converts input into a number.

Example

```
"20"

↓

20
```

This allows mathematical comparisons.

---

# Validation Rules

## Rule 1

Name cannot be empty.

```javascript
if(name === ""){
```

Message

```
Please enter your name.
```

---

## Rule 2

Name must contain at least three characters.

```javascript
else if(name.length < 3){
```

Message

```
Name must be at least 3 characters long.
```

---

## Rule 3

Age cannot be empty.

```javascript
else if(ageInput.value === ""){
```

Message

```
Please enter your age.
```

---

## Rule 4

User must be at least 18 years old.

```javascript
else if(age < 18){
```

Message

```
You must be at least 18 years old to register.
```

---

## Success

```javascript
else{
```

Message

```
Registration successful.

Welcome, Chris!
```

Input fields are cleared after successful registration.

---

# Using classList

Instead of

```javascript
message.style.color="red";
```

we used

```javascript
message.classList.add("error");
```

and

```javascript
message.classList.add("success");
```

This separates styling from JavaScript.

---

# CSS Classes

```css
.error{

color:red;

}

.success{

color:green;

}
```

---

# Flow of the Program

User clicks Register

↓

Read Name

↓

Read Age

↓

Is Name Empty?

↓

Yes → Show Error

↓

No

↓

Is Name Less Than 3 Characters?

↓

Yes → Show Error

↓

No

↓

Is Age Empty?

↓

Yes → Show Error

↓

No

↓

Is Age Less Than 18?

↓

Yes → Show Error

↓

No

↓

Registration Successful

↓

Clear Inputs

---

# Concepts Learned

- getElementById()
- value
- trim()
- Number()
- length
- addEventListener()
- classList.add()
- classList.remove()
- textContent
- if
- else if
- else

---

# Real World Applications

These concepts are used in:

- Login Systems
- Registration Forms
- Banking Apps
- Hospital Portals
- Contact Forms
- Online Shopping
- AI Applications

---

# Reflection

Today I built my first complete JavaScript application.

Instead of practicing isolated concepts, I combined DOM manipulation, form validation, conditional logic, and CSS classes to create a simple Student Registration App.

This project helped me understand how JavaScript is used to create interactive web applications.