let body = document.body;

let paragraph = document.getElementById("paragraph");

let darkButton = document.getElementById("darkBtn");

let lightButton = document.getElementById("lightBtn");

let toggleButton = document.getElementById("toggleBtn");

darkButton.addEventListener("click", function(){
    
    body.classList.add("dark");

    paragraph.classList.add("highlight");

});

lightButton.addEventListener("click", function(){

    body.classList.remove("dark");
    
    paragraph.classList.remove("highlight");

});

toggleButton.addEventListener("click", function(){

    body.classList.toggle("dark");

    paragraph.classList.toggle("highlight");

});