let numbers = [5, 10, 15, 20, 25, 30];

let bigNumbers = numbers.filter(function(number){
    return number > 15; // Keep only numbers greater than 15
});

console.log(numbers); // Output: [5, 10, 15, 20, 25, 30]

console.log(bigNumbers); // Output: [20, 25, 30]

let ages = [12, 18, 15, 21, 30, 16];

let adults = ages.filter(function(age){

    return age >= 18;

});

console.log(adults); // Output: [18, 21, 30]

let names = ["Ada", "John", "Al", "Mary", "Bo"];

let longNames = names.filter(function(name){

    return name.length >= 4;

});

console.log(longNames); // Output: ["Ada", "John", "Mary"]

let scores = [35, 80, 45, 90, 60, 25];

let passingScores = scores.filter(function(score){

    return score >= 50;

});

console.log(passingScores); // Output: [80, 45, 90, 60]