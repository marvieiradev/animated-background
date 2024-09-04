let el = document.getElementById("image");

var degrees = 10;
var interval = 100;
var currentRotation = 0;

setInterval(() => {
    var randomRotation = Math.floor(Math.random() * degrees) - degrees / 2;
    currentRotation += randomRotation;
    el.style.transform = `rotate(${currentRotation}deg)`;
}, interval);