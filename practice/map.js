let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number){

    return number * 2;

});

console.log(numbers);

console.log(doubled);

let prices = [100, 250, 400, 800];

let discountedPrices = prices.map(function(price){

    return price * 0.9; // Apply 10% discount

});

console.log(discountedPrices);

let names = ["Ada", "John", "Mary"];

let upperNames = names.map(function(name){

    return name.toUpperCase();

});

console.log(upperNames);