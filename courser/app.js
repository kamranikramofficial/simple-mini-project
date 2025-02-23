var main = document.getElementById("main");
var cuor = document.getElementById("courser");
cuor.addEventListener("mousemove", function (dets) {
    cuor.style.left = dets.x + "px";
    cuor.style.top = dets.y + "px";
});
