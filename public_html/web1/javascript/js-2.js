console.log ("JS 2 in action")

// Step 1 - selecting  the element
const MyShape = document.getElementById ("pentagon");

// Step 2 - adding a click event
// myShape.addEventListener("click", function() {
myShape.addEventListener("click", () => {
    // MyShape.style.borderColor= "blue transparent";
    MyShape.classList.toggle("change-me");
})