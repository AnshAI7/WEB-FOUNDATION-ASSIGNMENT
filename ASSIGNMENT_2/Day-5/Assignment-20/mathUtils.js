/* 
==================================================
MATH UTILITY FILE (mathUtils.js)
Contains exactly 5 reusable mathematical functions.
No DOM manipulation (HTML updates) happens here!
==================================================
*/

// Function 1: Addition
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Subtraction
function subtractNumbers(a, b) {
    return a - b;
}

// Function 3: Multiplication
function multiplyNumbers(a, b) {
    return a * b;
}

// Function 4: Division (with safety check)
function divideNumbers(a, b) {
    // It is mathematically impossible to divide by zero, so we prevent it
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Function 5: Calculate Area of a Square
function calculateSquareArea(sideLength) {
    return sideLength * sideLength;
}