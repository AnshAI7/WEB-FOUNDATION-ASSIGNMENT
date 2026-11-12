// This function is triggered by the HTML button
function runMathTests() {
    
    // 1. We test our 5 utility functions by passing hardcoded numbers to them
    const sumResult = addNumbers(45, 15);               // Expected: 60
    const subResult = subtractNumbers(100, 42);         // Expected: 58
    const multiResult = multiplyNumbers(12, 12);        // Expected: 144
    const divResult = divideNumbers(150, 5);            // Expected: 30
    const areaResult = calculateSquareArea(8);          // Expected: 64

    // 2. We grab the UL container from the HTML
    const resultsList = document.getElementById("results-list");

    // 3. We inject the results into the UL using Template Literals
    resultsList.innerHTML = `
        <li>
            <strong>1. Addition (45 + 15):</strong> 
            <span class="result-value">${sumResult}</span>
        </li>
        <li>
            <strong>2. Subtraction (100 - 42):</strong> 
            <span class="result-value">${subResult}</span>
        </li>
        <li>
            <strong>3. Multiplication (12 x 12):</strong> 
            <span class="result-value">${multiResult}</span>
        </li>
        <li>
            <strong>4. Division (150 ÷ 5):</strong> 
            <span class="result-value">${divResult}</span>
        </li>
        <li>
            <strong>5. Square Area (Side = 8):</strong> 
            <span class="result-value">${areaResult}</span>
        </li>
    `;

    // 4. Reveal the list on the screen
    resultsList.className = "results-visible";
}