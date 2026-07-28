console.log("=== DAY 22 FUNCTIONS ===");

// Greeting Function
function greet(name) {
    console.log("Welcome " + name);
}

greet("Chibuzor");
greet("Grace");

// Addition Function
function add(a, b) {
    return a + b;
}

console.log(add(5, 8));
console.log(add(20, 30));

// BMI Function
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(70, 1.75));

// Hospital Temperature Function
function checkTemperature(temp) {
    if (temp >= 38) {
        return "Patient has fever";
    }

    return "Temperature is normal";
}

console.log(checkTemperature(39));
console.log(checkTemperature(36.5));

// Challenge 1
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));
console.log(multiply(10, 6));

// Challenge 2
function ageInFiveYears(age) {
    return age + 5;
}

console.log(ageInFiveYears(24));
console.log(ageInFiveYears(30));

// Challenge 3
function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(isAdult(24));
console.log(isAdult(15));