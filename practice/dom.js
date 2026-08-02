let paragraphs = document.querySelectorAll(".text");

let redButton = document.querySelector("#redBtn");
let blueButton = document.querySelector("#blueBtn");
let resetButton = document.querySelector("#resetBtn");

// Turn all paragraphs red
redButton.addEventListener("click", function () {

    paragraphs.forEach(function (paragraph) {

        paragraph.style.color = "red";
        paragraph.style.fontWeight = "bold";
        paragraph.style.fontSize = "24px";

    });

});

// Turn all paragraphs blue
blueButton.addEventListener("click", function () {

    paragraphs.forEach(function (paragraph) {

        paragraph.style.color = "blue";
        paragraph.style.fontWeight = "bold";
        paragraph.style.fontSize = "24px";

    });

});

// Reset all paragraphs
resetButton.addEventListener("click", function () {

    paragraphs.forEach(function (paragraph) {

        paragraph.style.color = "black";
        paragraph.style.fontWeight = "normal";
        paragraph.style.fontSize = "16px";

    });

});