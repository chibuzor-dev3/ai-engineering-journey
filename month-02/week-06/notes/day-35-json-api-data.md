# Day 35 — Working with JSON and API Data

## 🎯 Learning Objectives

By the end of Day 35, I should understand:

- What JSON is
- JSON objects and arrays
- JSON data types
- The difference between JSON and JavaScript objects
- `JSON.stringify()`
- `JSON.parse()`
- Nested JSON
- Nested objects
- Nested arrays
- Objects inside arrays
- Working with real API data
- Accessing nested API properties
- Using `map()` with API data
- Using `filter()` with API data
- Using `find()` with API data
- Using `forEach()` with API data
- Processing API responses
- Sending JSON data to an API

---

# 1. What Is JSON?

JSON stands for **JavaScript Object Notation**.

JSON is a text-based format commonly used to store and exchange structured data between applications.

APIs commonly use JSON when sending data between a client and a server.

Example:

```json
{
  "name": "Chibuzor",
  "course": "Biological Sciences",
  "goal": "AI Engineer"
}

The general communication flow is:

Application
     ↓
API
     ↓
JSON
     ↓
Application

2. Why JSON Is Important

JSON is widely used because it is:

Easy for humans to read
Easy for computers to process
Lightweight
Structured
Commonly supported by programming languages

When working with APIs, I will frequently receive JSON data that needs to be converted into JavaScript values before I can use it.

3. JSON Object Structure

A JSON object contains key-value pairs.

Example:

{
  "name": "Chibuzor",
  "age": 24,
  "course": "Biological Sciences"
}

The structure is:

"name"   → "Chibuzor"
"age"    → 24
"course" → "Biological Sciences"

JSON property names are written inside double quotes.

4. JSON Data Types

JSON supports several common data types:

String
Number
Boolean
Object
Array
Null

Example:

{
  "name": "Chibuzor",
  "age": 24,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "profile": {
    "course": "Biological Sciences",
    "goal": "AI Engineer"
  },
  "middleName": null
}

This example contains strings, numbers, booleans, arrays, objects, and null.

5. JSON vs JavaScript Objects

JSON and JavaScript objects can look very similar, but they are not exactly the same thing.

A JavaScript object:

const user = {
  name: "Chibuzor",
  age: 24
};

JSON:

{
  "name": "Chibuzor",
  "age": 24
}

A JavaScript object is a value that JavaScript can work with directly.

JSON is a text format used to represent structured data.

6. JSON Strings

JSON data can exist as a string.

Example:

const jsonData = '{"name":"Chibuzor","age":24}';

console.log(typeof jsonData);

Output:

string

Even though the contents look like an object, the value is still a string until it is parsed.

7. JSON.stringify()

JSON.stringify() converts a JavaScript value into a JSON string.

Example:

const user = {
  name: "Chibuzor",
  goal: "AI Engineer"
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

Output:

{"name":"Chibuzor","goal":"AI Engineer"}

The result is a string.

I can verify this using:

console.log(typeof jsonData);

Output:

string
8. Why JSON.stringify() Is Useful

JSON.stringify() is useful when I need to convert JavaScript data into JSON text.

For example, when sending data to a server:

const user = {
  name: "Chibuzor",
  goal: "AI Engineer"
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

The JavaScript object has been converted into JSON.

9. JSON.parse()

JSON.parse() does the opposite of JSON.stringify().

It converts a JSON string into a JavaScript value.

Example:

const jsonData = '{"name":"Chibuzor","goal":"AI Engineer"}';

const user = JSON.parse(jsonData);

console.log(user.name);
console.log(user.goal);

Output:

Chibuzor
AI Engineer
10. The stringify() and parse() Relationship

The two methods work in opposite directions.

JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
JSON.parse()
       ↓
JavaScript Object

Example:

const user = {
  name: "Chibuzor",
  goal: "AI Engineer"
};

const jsonData = JSON.stringify(user);

const parsedUser = JSON.parse(jsonData);

console.log(parsedUser.name);
11. Handling JSON Parsing Errors

Invalid JSON causes JSON.parse() to throw an error.

Example:

try {
  const data = JSON.parse('{"name": "Chibuzor"');
  console.log(data);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

Using try...catch protects the application from crashing because of invalid JSON.

12. What Is Nested JSON?

Nested JSON means that one JSON structure contains another object or array.

Example:

{
  "name": "Chibuzor",
  "profile": {
    "course": "Biological Sciences",
    "goal": "AI Engineer"
  }
}

Here, profile is an object inside the main object.

The structure is:

user
 ├── name
 └── profile
      ├── course
      └── goal
13. Accessing Nested Objects

Given:

const user = {
  name: "Chibuzor",
  profile: {
    course: "Biological Sciences",
    goal: "AI Engineer"
  }
};

I can access the nested course:

console.log(user.profile.course);

I can access the goal:

console.log(user.profile.goal);

The structure being accessed is:

user
  ↓
profile
  ↓
course
14. Nested Arrays

JSON can contain arrays inside objects.

Example:

{
  "name": "Chibuzor",
  "skills": [
    "JavaScript",
    "HTML",
    "CSS"
  ]
}

I can access the first skill:

console.log(user.skills[0]);

Output:

JavaScript

I can access the second skill:

console.log(user.skills[1]);

Output:

HTML
15. Objects Inside Arrays

JSON arrays can contain objects.

Example:

{
  "students": [
    {
      "name": "Chibuzor",
      "course": "Biological Sciences"
    },
    {
      "name": "John",
      "course": "Computer Science"
    }
  ]
}

The structure is:

students
   ↓
Array
   ↓
Objects
   ↓
name / course

I can access the first student's name:

console.log(data.students[0].name);

I can access the second student's course:

console.log(data.students[1].course);
16. Deeply Nested JSON

JSON can contain objects inside arrays that contain more objects.

Example:

{
  "users": [
    {
      "name": "Chibuzor",
      "profile": {
        "course": "Biological Sciences",
        "goal": "AI Engineer"
      }
    }
  ]
}

To access the goal:

console.log(data.users[0].profile.goal);

The access path is:

data
 ↓
users
 ↓
[0]
 ↓
profile
 ↓
goal

This type of structure is common when working with real APIs.

17. Working with Real API Data

I used the JSONPlaceholder API:

https://jsonplaceholder.typicode.com/users

This endpoint returns multiple user objects.

I created:

day-35-api-data.js

The basic request is:

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUsers();
18. Understanding the Real API Structure

Each user returned by the API contains multiple properties.

A simplified user object looks like:

{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "example@email.com",
  address: {
    street: "Kulas Light",
    city: "Gwenborough"
  },
  company: {
    name: "Romaguera-Crona"
  }
}

The important thing to notice is that some properties are nested.

For example:

user.address.city

and:

user.company.name
19. Accessing User Names from API Data

Because the API returns an array of users, I can loop through it with forEach().

Example:

users.forEach(user => {
  console.log(user.name);
});

This prints each user's name.

20. Accessing Nested Address Data

The user's address is an object inside the user object.

Example:

users.forEach(user => {
  console.log(user.address.city);
});

The access path is:

user
 ↓
address
 ↓
city

This demonstrates how to navigate nested API data.

21. Accessing Company Data

The user object also contains company information.

Example:

users.forEach(user => {
  console.log(user.company.name);
});

The access path is:

user
 ↓
company
 ↓
name
22. Displaying Multiple API Properties

I can display several values from each user:

users.forEach(user => {
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("City:", user.address.city);
  console.log("Company:", user.company.name);
  console.log("--------------------");
});

This allows me to extract the information my application needs from the larger API response.

23. Using map() with API Data

map() creates a new array by transforming each item in an existing array.

For example, I can extract only the user names:

const names = users.map(user => user.name);

console.log(names);

The result is an array containing only names.

Example:

[
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch"
]
24. Using map() to Extract Nested Data

I can also extract nested properties using map().

Example:

const cities = users.map(user => user.address.city);

console.log(cities);

The result is an array of city names.

The important part is:

user.address.city

which accesses the nested city property.

25. Using filter() with API Data

filter() creates a new array containing only items that meet a condition.

Example:

const filteredUsers = users.filter(user => {
  return user.address.city.includes("South");
});

console.log(filteredUsers);

This keeps users whose city names contain "South".

The original users array remains unchanged.

26. Using find() with API Data

find() returns the first item that matches a condition.

Example:

const userWithId3 = users.find(user => user.id === 3);

console.log(userWithId3);

This searches the users array for the user whose ID is 3.

I can then access that user's information:

console.log(userWithId3.name);
console.log(userWithId3.email);
27. Using forEach() with API Data

forEach() allows me to perform an operation for every item in an array.

Example:

users.forEach(user => {
  console.log(user.name);
});

It is useful when I want to display or process each API record.

28. Combining map(), filter(), find(), and forEach()

I can use different array methods for different purposes.

const names = users.map(user => user.name);

const cities = users.map(user => user.address.city);

const filteredUsers = users.filter(user => {
  return user.address.city.includes("South");
});

const userWithId3 = users.find(user => user.id === 3);

users.forEach(user => {
  console.log(user.name);
});

Each method has a different purpose:

map()
 ↓
Transform / extract data

filter()
 ↓
Select multiple matching items

find()
 ↓
Find the first matching item

forEach()
 ↓
Loop through items
29. Complete Real API Example

The complete example I practiced is:

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    const names = users.map(user => user.name);

    console.log("User Names:");
    console.log(names);

    const cities = users.map(user => user.address.city);

    console.log("Cities:");
    console.log(cities);

    const userWithId3 = users.find(user => user.id === 3);

    console.log("User with ID 3:");
    console.log(userWithId3);

    users.forEach(user => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`City: ${user.address.city}`);
      console.log(`Company: ${user.company.name}`);
      console.log("--------------------");
    });

    const allNames = users.map(user => user.name);

    console.log("All names:");
    console.log(allNames);

    const userWithId5 = users.find(user => user.id === 5);

    console.log("User with ID 5:");
    console.log(userWithId5);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUsers();
30. Understanding the Complete API Program

The complete program follows this flow:

Call getUsers()
       ↓
Fetch users from API
       ↓
Check response.ok
       ↓
Convert JSON response
       ↓
Store users in an array
       ↓
Use map()
       ↓
Extract names and cities
       ↓
Use find()
       ↓
Find specific users
       ↓
Use forEach()
       ↓
Display user information
       ↓
Handle errors

This demonstrates how API data moves through a JavaScript application.

31. JSON in API Requests

JSON is not only used when receiving data.

It can also be used when sending data to a server.

Example:

const user = {
  name: "Chibuzor",
  course: "AI Engineering"
};

const response = await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});

Here:

JSON.stringify(user)

converts the JavaScript object into JSON text before sending it.

32. Important JSON Methods

The two most important JSON methods are:

JSON.stringify()

and:

JSON.parse()
JSON.stringify()

Converts JavaScript data into JSON text:

const jsonData = JSON.stringify(user);
JSON.parse()

Converts JSON text into JavaScript data:

const user = JSON.parse(jsonData);

The relationship is:

JavaScript
    ↓
JSON.stringify()
    ↓
JSON
    ↓
JSON.parse()
    ↓
JavaScript
33. Important API Data Concepts

When working with real API data, I need to understand:

Objects
Arrays
Nested Objects
Nested Arrays
Object Properties
Array Methods
JSON
HTTP Responses
Error Handling

For example:

user.address.city

accesses a nested object.

While:

users[0]

accesses an object inside an array.

And:

users.map(user => user.name)

transforms the array into a new array containing names.

34. Why JSON and API Data Matter for AI Engineering

JSON and API data are essential for building modern software.

As I continue toward AI Engineering, I will work with data from:

AI APIs
Healthcare APIs
Backend services
Databases
Machine learning services
Business automation systems
External data platforms

For example, an AI service may return:

{
  "prediction": "positive",
  "confidence": 0.94,
  "model": {
    "name": "health-risk-model",
    "version": "1.0"
  }
}

I need to know how to navigate and process that structure.

For example:

console.log(result.prediction);
console.log(result.confidence);
console.log(result.model.name);

The same JSON and API skills learned today will be used later in AI and HealthTech applications.

35. 🧠 Day 35 Core Takeaway

The most important ideas from Day 35 are:

JSON
 ↓
Structured data format
JSON.stringify()
 ↓
JavaScript → JSON String
JSON.parse()
 ↓
JSON String → JavaScript
fetch()
 ↓
Request API data
 ↓
response.json()
 ↓
JavaScript data

For nested API data:

Object
  ↓
Nested Object
  ↓
Property

Example:

user.address.city

For API arrays:

API Array
   ↓
map()
filter()
find()
forEach()
   ↓
Processed Data

The complete mental model is:

Application
     ↓
fetch()
     ↓
API
     ↓
JSON Response
     ↓
response.json()
     ↓
JavaScript Object / Array
     ↓
Navigate Nested Data
     ↓
map / filter / find / forEach
     ↓
Useful Application Data

Day 35 taught me how to move beyond simply receiving API data. I learned how to understand its structure, convert JSON, navigate nested objects and arrays, extract information, search through records, filter results, and process real API data using JavaScript.

These skills form an important foundation for working with APIs, backend systems, AI services, HealthTech platforms, and business automation applications.