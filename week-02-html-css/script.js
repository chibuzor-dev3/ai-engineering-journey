console.log("Welcome to JavaScript!");
let name = "Chibuzor";
console.log(name);

let lastName = "Orah";
console.log(lastName);

let age = 24;
console.log(age);

let isLearning = true;
console.log(isLearning);

let university = "University of Abuja";
let goal = "AI Engineer";
console.log(`I'm studying at ${university} and my goal is to become an ${goal}.`); 

let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const button = document.getElementById("theme-toggle");

// Check if dark mode was previously saved
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
} else {
    button.textContent = "🌙";
}

// Toggle between dark and light mode
button.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        button.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        button.textContent = "🌙";

    }

});

// Scroll to Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

// Scroll smoothly to the top
scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 200);

        }

    });

});

hiddenSections.forEach(section => {

    observer.observe(section);

});