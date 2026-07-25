# Day 19 - JavaScript Loops

## What I Learned

Today I learned how loops help JavaScript repeat a block of code without writing the same code multiple times.

### Why Loops Are Useful

Without loops, I would have to write the same statement repeatedly. Loops make code shorter, cleaner, and easier to maintain.

---

## The `for` Loop

A `for` loop is used when I know how many times I want to repeat an action.

### Syntax

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Parts of a `for` Loop

- `let i = 0` → Starting value.
- `i < 5` → Condition that must remain true.
- `i++` → Increase the counter by 1 after each loop.

### Output

```
0
1
2
3
4
```

---

## Counting from 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

This prints the numbers from 1 to 10.

---

## Looping Through an Array

```javascript
let skills = ["HTML", "CSS", "JavaScript", "Python"];

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
```

I learned that:

- `skills.length` gives the number of items in the array.
- `skills[i]` accesses each item one at a time.

---

## The `while` Loop

A `while` loop repeats code as long as a condition is true.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

### Output

```
1
2
3
4
5
```

---

## Infinite Loops

I learned that forgetting to update the loop variable can create an infinite loop.

Example:

```javascript
while (count <= 5) {
    console.log(count);
}
```

Since `count` never changes, the loop never stops.

---

## Key Takeaways

- Loops help avoid repeating code.
- `for` loops are useful when the number of repetitions is known.
- `while` loops are useful when the number of repetitions is unknown.
- Arrays can be processed efficiently using loops.
- `length` returns the number of elements in an array.

---

## Reflection

Today I learned how to automate repetitive tasks using loops. I also learned how to loop through arrays, which is a skill I will use frequently when building websites and future AI-powered applications.
