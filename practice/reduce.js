let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(sum, number){

    return sum + number;

}, 0);

console.log(total); // Output: 100

let prices = [150, 400, 250];

let totalPrice = prices.reduce(function(total, price){

    return total + price;

}, 0);

console.log(totalPrice);

let cart = [

    {name: "Laptop", price: 800},

    {name: "Mouse", price: 50},

    {name: "Keyboard", price: 100}

];

let totalCartPrice = cart.reduce(function(total, item){

    return total + item.price;
}, 0);

console.log(totalCartPrice); // Output: 950

let marks = [75, 80, 95, 60];

let totalMark = marks.reduce(function(total, mark){
    
        return total + mark;

}, 0);

console.log(totalMark); // Output: 310