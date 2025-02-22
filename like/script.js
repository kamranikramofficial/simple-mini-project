const box = document.querySelector("#box");
const heart = document.querySelector("i");

box.addEventListener("dblclick", function() {
    heart.classList.add("active");
    
    setTimeout(function() {
        heart.classList.remove("active");
    }, 1000);
});