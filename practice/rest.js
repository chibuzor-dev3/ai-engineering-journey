function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(10, 20, 30, 40, 50);

function sum(...numbers) {

    let total = 0;

    numbers.forEach(number => {

        total += number;

    });

    return total;

}

console.log(sum(10, 20));

console.log(sum(10, 20, 30));

console.log(sum(10, 20, 30, 40));

function introduce(name, ...skills) {

    console.log(name);

    console.log(skills);

}

introduce(
    "Chibuzor",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js"
);

function shoppingCart(...items) {

    console.log("Items:");

    items.forEach(item => {

        console.log(item);

    });

}

shoppingCart(
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
);

function favoriteFoods(...foods) {

    console.log("My favorite foods are:");

    foods.forEach(food => {

        console.log(food);

    });

}

favoriteFoods(
    "Rice",
    "Pizza",
    "Beans",
    "Chicken"
);

function multiply(multiplier, ...numbers) {

    numbers.forEach(function(number) {

        console.log(number * multiplier);

    });

}

multiply(2, 5, 10, 20);