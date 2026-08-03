const greetArrow = (name) => {

    return "Hello " + name;

};

console.log(greetArrow("Buzzy"));

const add = (a, b) => {

    return a + b;

};

console.log(add(5, 3));

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

const ageInFiveYears = age => age + 5;

console.log(ageInFiveYears(24));

const isAdult = age => age >= 18 ? "Adult" : "Minor";

console.log(isAdult(18));

console.log(isAdult(15));