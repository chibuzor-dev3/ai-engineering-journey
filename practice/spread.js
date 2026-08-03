let frontend = ["HTML", "CSS"];

let backend = ["Node.js", "Express"];

let skills = [...frontend, ...backend];

console.log(skills);

let fruits = ["Apple", "Banana"];

let allFruits = [...fruits, "Orange", "Mango"];

console.log(allFruits);

let student = {
    name: "Chibuzor",
    course: "AI Engineering"
};

let copy = {
    ...student
};

console.log(copy);

let personal = {
    name: "Chibuzor",
    age: 24
};

let education = {
    school: "University of Abuja",
    course: "Biological Science"
};

let profile = {
    ...personal,
    ...education
};

console.log(profile);

let user = {
    name: "Chris",
    age: 24
};

let updatedUser = {
    ...user,
    age: 25
};

console.log(updatedUser);

let first = ["HTML", "CSS"];

let second = ["JavaScript", "React"];

let webDevelopment = [...first, ...second];

console.log(webDevelopment);

let person = {
    name: "Chibuzor",
    age: 24
};

let job = {
    title: "AI Engineer",
    company: "OpenAI"
};

let resume = {
    ...person,
    ...job
};

console.log(resume);