// Get references to the container and the button
const container = document.getElementById('container');
const addCircleBtn = document.getElementById('addCircleBtn');

// Function to add a circle to the container
function addCircle() {
    // Create a new div element for the circle
    const circle = document.createElement('div');
    circle.classList.add('col'); // Add the 'col' class to the circle
    circle.style.backgroundColor = generateRandomHex(6); // Set a random background color
    container.appendChild(circle); // Append the circle to the container
}

// Add an event listener to the button
addCircleBtn.addEventListener('click', addCircle);

// Function to generate a random hexadecimal color
function generateRandomHex(length) {
    let result = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandom(){
    const arr = document.getElementsByClassName("col");
    arr.forEach((item)=>{
        item.backgroundColor = generateRandomHex();
    });
}