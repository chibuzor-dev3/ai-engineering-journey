# Day 22 - JavaScript Functions

## What is a Function?

A function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, I can write it once inside a function and call it whenever I need it.

---

## Why Use Functions?

Functions help me to:

- Reuse code
- Reduce repetition
- Organize my program
- Make code easier to read and maintain

---

## Function Syntax

```javascript
function greet() {
    console.log("Hello!");
}
```

To run the function:

```javascript
greet();
```

Output:

```
Hello!
```

---

## Function with Parameters

Parameters allow me to pass information into a function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Chibuzor");
```

Output:

```
Hello Chibuzor
```

---

## Function with Multiple Parameters

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 5);
```

Output:

```
15
```

The values passed into the function are called **arguments**.

---

## Returning Values

The `return` keyword sends a value back from a function.

```javascript
function multiply(a, b) {
    return a * b;
}

let answer = multiply(6, 4);

console.log(answer);
```

Output:

```
24
```

Using `return` allows me to store or reuse the result later.

---

## Example: Calculate BMI

```javascript
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(70, 1.75));
```

Output:

```
22.86
```

Functions are useful for calculations that need to be repeated with different values.

---

## Example: Check if Someone is an Adult

```javascript
function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(isAdult(24));
console.log(isAdult(15));
```

Output:

```
Adult
Minor
```

---

## Key Terms

### Function

A reusable block of code.

### Parameter

A variable listed in the function definition that receives data.

Example:

```javascript
function greet(name)
```

`name` is the parameter.

### Argument

The actual value passed into the function.

Example:

```javascript
greet("Chibuzor");
```

`"Chibuzor"` is the argument.

### Return

Sends a value back from the function.

---

## Summary

Today I learned that:

- Functions allow me to reuse code.
- Functions can accept parameters.
- Arguments provide the actual values when calling a function.
- The `return` keyword sends results back to the program.
- Functions make JavaScript programs cleaner, more organized, and easier to maintain.

---

## Reflection

Today I learned one of the most important concepts in JavaScript. Functions help me organize my code into reusable blocks, making programs easier to build and maintain. I also learned the difference between parameters and arguments, and how `return` allows a function to produce a value that can be used elsewhere in my program.