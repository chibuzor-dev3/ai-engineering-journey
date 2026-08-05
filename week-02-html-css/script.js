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

const projects = [

    {
    title: "Personal Portfolio",
    description: "Responsive portfolio website.",
    category: "HTML/CSS",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/chibuzor-dev3/portfolio"
},

    {
        title: "Dark Mode Portfolio",
        description: "Added a dark and light theme with Local Storage to remember the user's preference.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "Scroll To Top Button",
        description: "Built a floating button that smoothly scrolls users back to the top of the page.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "DOM Manipulation Practice",
        description: "Practiced selecting, modifying, creating, and removing HTML elements using JavaScript.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "Form Validation",
        description: "Built a contact form with JavaScript validation to check user input before submission.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "Higher-Order Array Methods",
        description: "Used map(), filter(), find(), and reduce() to manipulate arrays efficiently.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "ES6 JavaScript Practice",
        description: "Practiced arrow functions, template literals, destructuring, spread, and rest operators.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
        title: "Expense Tracker",
        description: "Tracks daily expenses with JavaScript.",
        category: "JavaScript",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/chibuzor-dev3/project"
    },

    {
    title: "Weather Dashboard",
    description: "Displays live weather information.",
    category: "API",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/chibuzor-dev3/project"
},

{
    title: "Currency Converter",
    description: "Converts currencies using an exchange rate API.",
    category: "API",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/chibuzor-dev3/project"
},

];

const container = document.getElementById("projects-container");

function displayProjects(projectList){

    container.innerHTML = "";

    projectList.forEach(project => {

        const card = document.createElement("div");

        card.classList.add("project-card");

       card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <span class="badge">${project.category}</span>

    <br><br>

    <button class="details-btn">
        View Details
    </button>
`;

const detailsButton = card.querySelector(".details-btn");

detailsButton.addEventListener("click", () => {

    document.getElementById("modalTitle").textContent = project.title;

    document.getElementById("modalDescription").textContent = project.description;

    document.getElementById("modalCategory").textContent = project.category;

    document.getElementById("modalTechnologies").textContent =
        project.technologies || "Not specified";

    document.getElementById("modalGithub").href =
        project.github || "#";

    document.getElementById("projectModal").style.display = "flex";

});

        container.appendChild(card);

    });

}

displayProjects(projects);

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function(){

        // Remove active class from every button
        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        // Highlight the clicked button
        this.classList.add("active");

        const category = this.dataset.category;

        if(category === "All"){

            displayProjects(projects);

        }else{

            const filteredProjects = projects.filter(project => project.category === category);

            displayProjects(filteredProjects);

        }

    });

});

const modal = document.getElementById("projectModal");

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});