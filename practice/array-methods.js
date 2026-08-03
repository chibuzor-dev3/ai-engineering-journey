let students = [

    {name: "Ada", score: 80},

    {name: "John", score: 45},

    {name: "Mary", score: 90},

    {name: "Chris", score: 65}

];

// 1. Add 5 bonus marks
let bonusScores = students.map(function(student){

    return {
        name: student.name,
        score: student.score + 5
    };

});

console.log("Bonus Scores:", bonusScores);

// 2. Find students who passed
let passed = students.filter(function(student){

    return student.score >= 50;

});

console.log("Passed:", passed);

// 3. Find Mary
let mary = students.find(function(student){

    return student.name === "Mary";

});

console.log("Mary:", mary);

// 4. Calculate total score
let totalScore = students.reduce(function(total, student){

    return total + student.score;

}, 0);

console.log("Total Score:", totalScore);