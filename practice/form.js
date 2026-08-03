let input = document.getElementById("nameInput");

let button = document.getElementById("submitBtn");

let message = document.getElementById("message");

button.addEventListener("click", function(){

  let name = input.value.trim();

    if(name === ""){

    message.textContent = "Please enter your name.";

    message.style.color = "red";

} else if (name.length < 3) {

    message.textContent = "Name must be at least 3 characters long.";

    message.style.color = "red";

}else{

    message.textContent = "Welcome, " + name + "!";

    message.style.color = "green";

    input.value = "";

}

});
