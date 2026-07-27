# Day 20 - JavaScript Arrays

## What is an Array?

An array stores multiple values inside a single variable.

Example:

```javascript
let fruits = ["Apple", "Banana", "Orange"];
```

---

## Index

Arrays start counting from **0**.

```javascript
fruits[0]
```

returns the first item.

---

## Length

```javascript
fruits.length
```

Returns the number of items in the array.

---

## Add Item

```javascript
fruits.push("Mango");
```

Adds an item to the end.

---

## Remove Item

```javascript
fruits.pop();
```

Removes the last item.

---

## Loop Through an Array

```javascript
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

## Summary

Arrays let JavaScript store and work with collections of data efficiently. They are essential for building real-world applications.