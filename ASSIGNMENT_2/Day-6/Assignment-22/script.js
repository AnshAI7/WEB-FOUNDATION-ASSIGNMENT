// Grab the HTML elements
const form = document.getElementById("registrationForm");
const alertBox = document.getElementById("alert-box");

// Listen for the form submission
form.addEventListener("submit", function(event) {
    // 1. Prevent the browser from refreshing the page on submit
    event.preventDefault();

    // 2. Grab all the raw values from the inputs
    const userVal = document.getElementById("username").value;
    const ageVal = document.getElementById("age").value;
    const passVal = document.getElementById("password").value;

    // 3. Run them through our Guard Clause utilities
    const userCheck = validateUsername(userVal);
    const ageCheck = validateAge(ageVal);
    const passCheck = validatePassword(passVal);

    /* 
       4. Final UI Check using Guard Clauses as well!
       If any check did not return "Valid", we show the specific error and STOP.
    */
    if (userCheck !== "Valid") {
        showAlert(userCheck, "error");
        return; 
    }

    if (ageCheck !== "Valid") {
        showAlert(ageCheck, "error");
        return;
    }

    if (passCheck !== "Valid") {
        showAlert(passCheck, "error");
        return;
    }

    // 5. The Happy Path! If we made it down here, everything is perfect.
    showAlert("Account successfully created!", "success");
    form.reset(); // Clears the inputs
});

// Helper function to update the DOM
function showAlert(message, type) {
    alertBox.innerText = message;
    alertBox.className = `alert ${type}`; // Applies either the .error or .success CSS class
}