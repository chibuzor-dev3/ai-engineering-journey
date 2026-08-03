let nameInput = document.getElementById("nameInput");

let ageInput = document.getElementById("ageInput");

let button = document.getElementById("registerBtn");

let message = document.getElementById("message");

button.addEventListener("click", function () {

    let name = nameInput.value.trim();

    let age = Number(ageInput.value);

    if (name === "") {

        message.textContent = "Please enter your name.";

        message.classList.remove("success");

        message.classList.add("error");

    } else if (name.length < 3) {

        message.textContent = "Name must be at least 3 characters.";

        message.classList.remove("success");

        message.classList.add("error");

    } else if (ageInput.value === "") {

        message.textContent = "Please enter your age.";

        message.classList.remove("success");

        message.classList.add("error");

    } else if (age < 18) {

        message.textContent = "You must be at least 18 years old to register.";

        message.classList.remove("success");

        message.classList.add("error");

    } else {

        message.textContent = "Registration successful. Welcome, " + name + "!";

        message.classList.remove("error");

        message.classList.add("success");

        nameInput.value = "";

        ageInput.value = "";

    }

});