# Day 26 – Higher-Order Array Methods

## Objective

Learn how to work with arrays using JavaScript's higher-order array methods.

Instead of writing long `for` loops, JavaScript provides built-in methods that make code shorter, cleaner, and easier to read.

---

# What are Higher-Order Array Methods?

Higher-order array methods are functions that operate on arrays.

They can:

- Transform data
- Filter data
- Find data
- Combine data

The four methods learned today are:

- map()
- filter()
- find()
- reduce()

---

# 1. map()

## Purpose

Creates a **new array** by transforming every element in the original array.

The original array is not changed.

## Syntax

```javascript
array.map(function(item){

    return modifiedItem;

});
```

Example

```javascript
let numbers = [1,2,3,4,5];

let doubled = numbers.map(function(number){

    return number * 2;

});

console.log(doubled);
```

Output

```
[2,4,6,8,10]
```

### Uses

- Add VAT to prices
- Convert text to uppercase
- Format data
- Modify objects

---

# 2. filter()

## Purpose

Creates a **new array** containing only the elements that satisfy a condition.

## Syntax

```javascript
array.filter(function(item){

    return condition;

});
```

Example

```javascript
let ages = [12,18,15,25,30];

let adults = ages.filter(function(age){

    return age >= 18;

});

console.log(adults);
```

Output

```
[18,25,30]
```

### Uses

- Passed students
- Active users
- Available products
- Search results

---

# 3. find()

## Purpose

Returns the **first element** that satisfies a condition.

Unlike filter(), it returns only one value.

## Syntax

```javascript
array.find(function(item){

    return condition;

});
```

Example

```javascript
let names = ["Ada","John","Mary","Chris"];

let person = names.find(function(name){

    return name === "Mary";

});

console.log(person);
```

Output

```
Mary
```

If no match exists:

```
undefined
```

### Uses

- Find one user
- Find one product
- Find one transaction
- Find one student

---

# 4. reduce()

## Purpose

Combines every value in an array into one final result.

Most commonly used to calculate totals.

## Syntax

```javascript
array.reduce(function(total,current){

    return total + current;

},0);
```

Example

```javascript
let numbers = [10,20,30,40];

let total = numbers.reduce(function(sum,number){

    return sum + number;

},0);

console.log(total);
```

Output

```
100
```

### Uses

- Total prices
- Total marks
- Banking balances
- Shopping carts

---

# Comparison

| Method | Returns | Purpose |
|---------|----------|---------|
| map() | New Array | Transform every element |
| filter() | New Array | Keep matching elements |
| find() | One Value | Return first match |
| reduce() | One Value | Combine everything |

---

# Mini Project

Student Records

```javascript
let students = [

{name:"Ada",score:80},

{name:"John",score:45},

{name:"Mary",score:90},

{name:"Chris",score:65}

];
```

### map()

Increase every student's score by 5.

### filter()

Return only students who scored at least 50.

### find()

Find Mary.

### reduce()

Calculate the total score of all students.

---

# Key Concepts Learned

- Higher-order functions
- Callback functions
- Returning new arrays
- Returning a single value
- Working with objects in arrays

---

# Real-World Applications

These methods are used in:

- React
- Node.js
- Next.js
- Express.js
- REST APIs
- Data Analytics
- Dashboards
- AI Applications

---

# Summary

Today I learned JavaScript's four most important higher-order array methods.

- map() transforms data.
- filter() keeps matching data.
- find() returns the first matching item.
- reduce() combines data into one result.

These methods make JavaScript code shorter, cleaner, and easier to maintain, and they are widely used in modern web development.