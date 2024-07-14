// Variables
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const countLabel = document.getElementById("myCount");
let count = 0;

// Increase Function
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

// Decrease Function
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

// Reset Function
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}