
// Part 1: JavaScript Basics (Variables, Conditionals)


// Variable declarations
let userName = "Jack "; 
let userAge = 25;
let canVote = userAge >= 18; 

// Using a conditional to log a message to the console
if (canVote) {
    console.log(`${userName}, you are ${userAge} years old and are eligible to vote.`);
} else {
    console.log(`${userName}, you are not old enough to vote.`);
}


// Part 2: JavaScript Functions 


// Function 1 calculates the area of a rectangle
function calculateRectangleArea(length, width) {
    // Check if inputs are valid numbers
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
        console.log("Error: Both length and width must be positive numbers.");
        return null;
    }
    return length * width;
}

// Function 2 Toggles the visibility of a DOM element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
        console.log(`Toggled visibility for element with ID: ${elementId}`);
    } else {
        console.log(`Error: Element with ID '${elementId}' not found.`);
    }
}

// Usage of calculateRectangleArea
let area = calculateRectangleArea(10, 5);
console.log(`The area of a 10x5 rectangle is: ${area}`);


// Part 3: JavaScript Loops 


// Loop 1: A `for` loop to create a countdown with a delay
const countdownOutput = document.getElementById('countdown-output');
const countdownValue = 5;

// The loop now uses a timeout to create a delay
for (let i = countdownValue; i >= 0; i--) {
    // We use a closure with an Immediately Invoked Function Expression (IIFE)
    // to capture the value of `i` for each iteration.
    setTimeout(() => {
        let newParagraph = document.createElement('p');
        newParagraph.textContent = `Countdown: ${i}...`;
        countdownOutput.appendChild(newParagraph);
        // This is a simple append, but you could also clear the previous content
        // to show a single, updating number.
    }, (countdownValue - i) * 1000); 
}

// Loop 2 :A forEach loop to iterate over an array
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const itemList = document.getElementById('item-list');

fruits.forEach(fruit => {
    let listItem = document.createElement('li');
    listItem.textContent = fruit;
    itemList.appendChild(listItem);
});


// Part 4: Mastering the DOM .


//  DOM 1: Selecting elements
const ageInput = document.getElementById('user-age');
const checkAgeBtn = document.getElementById('check-age-btn');
const ageOutput = document.getElementById('age-output');

// DOM 2: Responding to a click event and updating text
checkAgeBtn.addEventListener('click', () => {
    let inputAge = parseInt(ageInput.value); 

    // Conditional logic based on user age input 
    if (inputAge >= 18) {
        ageOutput.textContent = "✅ You are old enough to vote!";
        ageOutput.style.color = "green";
    } else {
        ageOutput.textContent = "❌ Sorry, you are not old enough to vote.";
        ageOutput.style.color = "red";
    }
});

//  DOM 3 : Toggling classes and changing text on click
const domBtn = document.getElementById('dom-btn');
const domText = document.getElementById('dom-text');
const colorBox = document.getElementById('color-box');

domBtn.addEventListener('click', () => {
    // A. Change text content
    domText.textContent = "The DOM is now manipulated!";

    // B. Toggle a CSS class
    colorBox.classList.toggle('highlight');

    //C. Log the action to the console
    console.log("DOM manipulated: Text changed and class toggled.");
});