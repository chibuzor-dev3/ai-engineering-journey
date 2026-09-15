# Day 33 — Async/Await in JavaScript

## 🎯 Learning Objectives

By the end of Day 33, I should understand:

* Asynchronous JavaScript
* Promises
* `async`
* `await`
* `fetch()`
* `response.json()`
* `try...catch`
* `response.ok`
* Error handling
* Making API requests with `async/await`

---

# 1. Asynchronous JavaScript

Some JavaScript operations take time to complete, such as:

* API requests
* Database requests
* File operations
* Timers
* Network requests

Instead of blocking the entire program while waiting, JavaScript handles these operations asynchronously.

This allows other code to continue running while the operation is being completed.

---

# 2. Promises

A **Promise** represents the eventual result of an asynchronous operation.

A Promise has three possible states:

```text
Pending
   ↓
Fulfilled
```

or:

```text
Pending
   ↓
Rejected
```

### States

* **Pending** — operation is still running.
* **Fulfilled** — operation completed successfully.
* **Rejected** — operation failed.

Promises are important because `async/await` works directly with them.

---

# 3. The `async` Keyword

The `async` keyword makes a function asynchronous.

```javascript
async function getMessage() {
    return "Hello";
}
```

An `async` function always returns a Promise.

Therefore:

```javascript
getMessage();
```

does not directly return the string. It returns a Promise containing the string.

---

# 4. The `await` Keyword

`await` waits for a Promise to settle and gives us its result.

```javascript
async function getMessage() {
    const message = await Promise.resolve("Hello");

    console.log(message);
}

getMessage();
```

### Important Rule

`await` is normally used inside an `async` function.

Think of the relationship as:

```text
async → allows the function to use await
await → waits for a Promise result
```

---

# 5. `fetch()`

`fetch()` is used to make HTTP requests.

Example:

```javascript
const response = await fetch(url);
```

Because `fetch()` returns a Promise, we use `await` to wait for the response.

The result is stored in:

```javascript
response
```

---

# 6. Converting the Response to JSON

The response from `fetch()` is not automatically the JavaScript data we want.

We usually convert it using:

```javascript
const data = await response.json();
```

So the basic API flow is:

```text
fetch()
   ↓
Response
   ↓
response.json()
   ↓
JavaScript data
```

---

# 7. Error Handling With `try...catch`

Network requests can fail.

For example:

* No internet connection
* Server unavailable
* Invalid URL
* Request failure
* Unexpected data

We can handle errors using `try...catch`.

```javascript
try {
    // code that might fail
} catch (error) {
    console.error(error);
}
```

For asynchronous API requests:

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Failed to get data:", error);
    }
}
```

---

# 8. Checking `response.ok`

`fetch()` does not automatically throw an error for every HTTP error status.

For example, a `404` response can still result in a resolved Promise.

We can check whether the request was successful with:

```javascript
response.ok
```

Example:

```javascript
if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}
```

This allows our `catch` block to handle HTTP errors.

---

# 9. Complete API Request Pattern

This is the main pattern to remember:

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}
```

### Flow

```text
Call function
     ↓
fetch API
     ↓
wait for response
     ↓
check response
     ↓
convert to JSON
     ↓
return data
     ↓
handle errors if something fails
```

---

# 10. Using the Returned Data

Because an `async` function returns a Promise, we can use `await` when calling it from another async function.

```javascript
async function main() {
    const data = await getData();

    console.log(data);
}

main();
```

---

# 11. `async/await` vs `.then()`

Promises can be handled with `.then()`:

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

The same operation can be written with `async/await`:

```javascript
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

`async/await` generally makes asynchronous code easier to read, especially when several asynchronous operations are involved.

---

# 12. `getWeather()` Mini Challenge

I completed the `getWeather()` mini challenge.

The challenge reinforced:

```javascript
async
await
fetch()
response.json()
try
catch
response.ok
return
```

The important structure is:

```javascript
async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Failed to get weather:", error);
    }
}
```

---

