let title = document.getElementById("title");

let input = document.getElementById("nameInput");

let button = document.getElementById("btn");

button.addEventListener("click", function () {
 
    let name = input.value;

    title.textContent = "Welcome, " + name + "!";

    input.value = "";

});

let styleButton = document.getElementById("styleBtn");

styleButton.addEventListener("click", function () {

    title.style.color = "black";

    title.style.backgroundColor = "green";

    title.style.padding = "20px";

    title.style.borderRadius = "10px";

    title.style.fontsize = "50px";

    title.style.fontstyle = "italic";

    title.style.fontweight = "bold";

});

let resetButton = document.getElementById("resetBtn");

resetButton.addEventListener("click", function () {

    title.style.color = "black";

    title.style.backgrondColor = "";

    title.style.padding = "0px";

    title.style.borderRadius = "0px";

    title.style.fontsize = "32px";

    title.style.fontstyle = "normal";

    title.style.fontweight = "normal";

});

let secret = document.getElementById("secret");

let hideButton = document.getElementById("hideBtn");

let showButton = document.getElementById("showBtn");

let toggleButton = document.getElementById("toggleBtn");

hideButton.addEventListener("click", function () {

    secret.style.display = "none";

});

showButton.addEventListener("click", function () {

    secret.style.display = "block";

});

toggleButton.addEventListener("click", function () {

    if (secret.style.display === "none") {

        secret.style.display = "block";

    } else {

        secret.style.display = "none";

    }

});

let createButton = document.getElementById("createBtn");

createButton.addEventListener("click", function () {

    let newParagraph = document.createElement("p");

    newParagraph.textContent = "🚀 I am becoming an AI Software Engineer!";

    document.body.appendChild(newParagraph);

    newParagraph.style.color = "green";

    newParagraph.style.frontWeight = "bold";

    newParagraph.style.backgroundColor = "yellow";

    newParagraph.style.padding = "10px";

    newParagraph.style.borderRadius = "8px";

    newParagraph.style.fontsize = "24px";

});