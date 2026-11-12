// Function attached to the button's onclick attribute in HTML
function calculateGrade() {
    // 1. Get the value typed into the input field
    const scoreInput = document.getElementById("scoreInput").value;
    const resultBox = document.getElementById("result-box");
    
    // 2. Convert the input from a String to a Float (number with decimals)
    const score = parseFloat(scoreInput);

    // 3. Validation Guard Clauses (Checking for bad inputs first)
    if (scoreInput === "" || isNaN(score)) {
        displayResult("Please enter a valid number.", "grade-error");
        return; // Stops the function from running further
    }

    if (score < 0 || score > 100) {
        displayResult("Score must be between 0 and 100.", "grade-error");
        return;
    }

    // 4. Conditional Logic (If / Else If / Else)
    let letterGrade = "";
    let styleClass = "grade-success"; // Default style for passing grades

    if (score >= 90) {
        letterGrade = "A";
    } else if (score >= 80) {
        letterGrade = "B";
    } else if (score >= 70) {
        letterGrade = "C";
    } else if (score >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
        styleClass = "grade-fail"; // Change style to red if they failed
    }

    // 5. Output the result to the user
    displayResult(`Your grade is: ${letterGrade}`, styleClass);
}

// Helper function to handle updating the DOM (Keeps our code clean)
function displayResult(message, cssClass) {
    const resultBox = document.getElementById("result-box");
    
    // Update the text
    resultBox.innerHTML = message;
    
    // Reset classes, then apply the new ones to make it visible
    resultBox.className = `result-visible ${cssClass}`;
}