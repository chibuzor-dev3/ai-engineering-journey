let developer = {
    name: "Chibuzor",
    language: "JavaScript",
    years: 2
};

let { name, language } = developer;

let skills = ["HTML", "CSS", "JavaScript"];

let [skill1, skill2, skill3] = skills;

console.log(name);
console.log(language);
console.log(skill1);
console.log(skill2);
console.log(skill3);

let phone = {
    brand: "Samsung",
    model: "S24",
    price: 1200000
};

let { brand, model, price } = phone;

console.log(brand);
console.log(model);
console.log(price);

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit);
console.log(thirdFruit);