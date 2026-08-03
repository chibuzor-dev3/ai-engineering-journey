# Day 27 – Modern JavaScript (ES6+)

## Objective

Learn the most important ES6 (ECMAScript 2015) features used in modern JavaScript development.

These features make code shorter, cleaner, and easier to maintain. They are widely used in React, Node.js, Express.js, Next.js, and many other modern JavaScript frameworks.

---

# Topics Covered

1. Arrow Functions
2. Template Literals
3. Destructuring
4. Spread Operator
5. Rest Parameters

---

# 1. Arrow Functions

## What are Arrow Functions?

Arrow functions are a shorter syntax for writing JavaScript functions.

### Traditional Function

```javascript
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Buzzy"));
```

Output

```
Hello Buzzy
```

### Arrow Function

```javascript
const greet = (name) => {
    return "Hello " + name;
};

console.log(greet("Buzzy"));
```

Output

```
Hello Buzzy
```

### One-Line Arrow Function

```javascript
const square = number => number * number;

console.log(square(6));
```

Output

```
36
```

### Advantages

- Less code
- Easier to read
- Commonly used in modern JavaScript

---

# 2. Template Literals

## What are Template Literals?

Template literals allow us to create strings using backticks (` `) and insert variables or expressions using `${}`.

### Old Method

```javascript
let name = "Buzzy";

console.log("Hello " + name);
```

### ES6 Method

```javascript
let name = "Buzzy";

console.log(`Hello ${name}`);
```

Output

```
Hello Buzzy
```

### Multiple Variables

```javascript
let firstName = "Chris";
let lastName = "Johnson";
let age = 30;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
```

### Expressions

```javascript
let price = 500;

console.log(`Total: ₦${price + 200}`);
```

Output

```
Total: ₦700
```

### Multi-line Strings

```javascript
let message = `Learning JavaScript
one day at a time.`;

console.log(message);
```

---

# 3. Destructuring

## What is Destructuring?

Destructuring extracts values from objects or arrays into variables.

### Object Destructuring

```javascript
let student = {
    name: "Chibuzor",
    age: 24,
    school: "University of Abuja"
};

let { name, age, school } = student;

console.log(name);
console.log(age);
console.log(school);
```

### Renaming Variables

```javascript
let { name: studentName } = student;

console.log(studentName);
```

### Default Values

```javascript
let person = {
    name: "Chris"
};

let { name, country = "Nigeria" } = person;

console.log(country);
```

Output

```
Nigeria
```

### Array Destructuring

```javascript
let colors = ["Red", "Blue", "Green"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
```

### Skipping Values

```javascript
let numbers = [10,20,30,40];

let [first, , third] = numbers;

console.log(first);
console.log(third);
```

---

# 4. Spread Operator (...)

## What is the Spread Operator?

The spread operator expands the contents of arrays or objects.

### Copying an Array

```javascript
let fruits = ["Apple","Banana","Orange"];

let newFruits = [...fruits];
```

### Merging Arrays

```javascript
let frontend = ["HTML","CSS"];

let backend = ["JavaScript","Node.js"];

let skills = [...frontend, ...backend];

console.log(skills);
```

Output

```
["HTML","CSS","JavaScript","Node.js"]
```

### Adding New Values

```javascript
let allFruits = [...fruits, "Mango"];
```

### Copying an Object

```javascript
let student = {
    name: "Chibuzor",
    course: "AI Engineering"
};

let copy = {
    ...student
};
```

### Merging Objects

```javascript
let personal = {
    name: "Chibuzor"
};

let education = {
    school: "University of Abuja"
};

let profile = {
    ...personal,
    ...education
};
```

### Overriding Values

```javascript
let user = {
    name: "Chris",
    age: 24
};

let updatedUser = {
    ...user,
    age: 25
};

console.log(updatedUser);
```

Output

```
{
name: "Chris",
age: 25
}
```

---

# 5. Rest Parameters (...)

## What are Rest Parameters?

Rest parameters collect multiple arguments into one array.

### Example

```javascript
function showNumbers(...numbers){

    console.log(numbers);

}

showNumbers(1,2,3,4,5);
```

Output

```
[1,2,3,4,5]
```

### Summing Unlimited Numbers

```javascript
function sum(...numbers){

    let total = 0;

    numbers.forEach(number => {

        total += number;

    });

    return total;

}

console.log(sum(10,20,30));
```

Output

```
60
```

### Mixing Normal and Rest Parameters

```javascript
function introduce(name, ...skills){

    console.log(name);

    console.log(skills);

}

introduce(
    "Chibuzor",
    "HTML",
    "CSS",
    "JavaScript"
);
```

Output

```
Chibuzor

["HTML","CSS","JavaScript"]
```

---

# Spread vs Rest

## Spread

Expands values.

```javascript
console.log(...numbers);
```

## Rest

Collects values.

```javascript
function example(...numbers){}
```

Although both use `...`, they perform different tasks.

---

# Real-World Applications

These ES6 features are widely used in:

- React
- Node.js
- Next.js
- Express.js
- REST APIs
- AI Applications
- Frontend Development
- Backend Development

---

# Key Concepts Learned

- Arrow functions simplify function syntax.
- Template literals make strings cleaner and easier to read.
- Destructuring extracts values from arrays and objects.
- Spread operator copies and merges arrays and objects.
- Rest parameters collect unlimited function arguments into an array.

---

# Summary

Today I learned the most important ES6 features that modern JavaScript developers use daily.

Arrow Functions make code shorter.

Template Literals make strings easier to create.

Destructuring simplifies extracting values.

Spread Operator copies and merges arrays and objects.

Rest Parameters allow functions to accept unlimited arguments.

These features are essential for writing clean, modern JavaScript and will be used extensively in React, Node.js, Express, and future AI engineering projects.