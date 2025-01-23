console.log("loaded 💖");

const chibiGirl = document.getElementById ("chibigirl");
const stage = document.querySelector ("body")
chibiGirl.onclick = function() {
chibiGirl.classList.toggle("move");
}

// sounds

stage.addEventListener("click", function(event) {
console.log(event.clientX + " : " + event.clientY);
//chibiGirl.style.transform = "translateX(" + event.clientX + "px) translateY("+ event.clientY+"px)";
//""''``
chibiGirl.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
})

//keyboard input
document.onkeydown = checkKeys;

function checkKeys(event){
    var style = window.getcomputedStyle(chibiGirl)
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;
    var coords;


 //left arrow
 if(event.keyCode == "37") {
    coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
    chibiGirl.style.transform = coords;
}
//right arrow
if(event.keyCode == "39") {
    coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
    frogMan.style.transform = coords;
}
//up arrow
if(event.keyCode == "38") {
    coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
    chibiGirl.style.transform = coords;
}
//down arrow
if(event.keyCode == "40") {
    coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
    chibiGirl.style.transform = coords;
}

}
function addMyObject(){
/* Custom Object */
let myObject = document.createElement("img");
myObject.src = "img/Star 1.svg";
myObject.style.width = "20px"
stage.append(myObject);

let w = window.innerWidth - 100;
let randoX = Math.floor ((Math.random() * w)+1);
let h = window.innerHeight - 58;
let randoY = Math.floor ((Math.random() * h)+1);

myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;
setTimeout (() => { myObject.remove(); addMyObject(); }, 67);
}

addMyObject()



