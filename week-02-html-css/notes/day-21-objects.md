# Day 21 - JavaScript Objects

## What is an Object?

An object stores related information using key-value pairs.

Example:

```javascript
let person = {
    name: "John",
    age: 25
};
```

---

## Access Properties

```javascript
person.name
person.age
```

---

## Update a Property

```javascript
person.age = 26;
```

---

## Add a Property

```javascript
person.country = "Nigeria";
```

---

## Objects in Arrays

```javascript
let people = [
    { name: "John", age: 25 },
    { name: "Mary", age: 30 }
];

console.log(people[0].name);
```

---

## Summary

Objects organize related data into one structure. They are essential for representing users, products, patients, orders, and many other real-world entities in JavaScript.