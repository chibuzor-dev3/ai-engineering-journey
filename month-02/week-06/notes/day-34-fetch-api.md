# Day 34 — Fetch API

## What I Learned

Today I learned how to use the JavaScript Fetch API to request data from external APIs.

## 1. What Is the Fetch API?

The Fetch API allows JavaScript to make network requests and retrieve data from servers and APIs.

Basic flow:

```text
JavaScript
    ↓
  fetch()
    ↓
 API response
    ↓
 response.json()
    ↓
 JavaScript data

 ## 2. Basic Fetch Request

 fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  