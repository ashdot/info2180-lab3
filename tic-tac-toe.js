
document.addEventListener("DOMContentLoaded", function() {

const squares = document.querySelectorAll("#board div");

for (const box of squares) {
    box.classList.add("square")
};

/* Another way to do it 
squares.forEach(square => {
    square.classList.add("square");
});*/


});


