let numbers = [5, 10, 15, 20, 25];

let result = numbers.find(function(number){

    return number > 12;

});

console.log(result);

let names = ["Ada", "John", "Mary", "Chris"];

let person = names.find(function(name){

    return name === "Mary";

});

console.log(person);

let students = [

    {name: "Ada", score: 80},

    {name: "John", score: 65},

    {name: "Chris", score: 95}

];

let student = students.find(function(item){

    return item.name === "John";

});

console.log(student);

let books = [

    "Biology",

    "Chemistry",

    "Physics",

    "Mathematics"

];

let book = books.find(function(b){
    return b === "Physics";
});

console.log(book);