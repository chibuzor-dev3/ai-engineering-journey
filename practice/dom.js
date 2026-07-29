let title = document.getElementById("title");

console.log(title);

title.textContent = "Hi, i'm Chibuzor!";

title.style.color = "green";

let button = document.getElementById("btn");

button.addEventListener("click", function () {
    title.textContent = "Future AI Engineer 🚀";
});