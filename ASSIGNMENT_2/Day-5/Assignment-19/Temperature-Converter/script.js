/* ==========================================================
   PART 1: The Core Logic Functions (Reusable Math)
   These functions don't know anything about HTML or Buttons.
   They just take a number (parameter), calculate, and return.
   ========================================================== */

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}


/* ==========================================================
   PART 2: The UI Handler Functions
   These are triggered by the HTML buttons. They get the input,
   call the logic functions above, and update the screen.
   ========================================================== */

function handleCtoF() {
    // 1. Get user input
    const inputElement = document.getElementById("inputCelsius");
    const rawValue = inputElement.value;
    
    // Guard clause: Check if input is empty
    if (rawValue === "") {
        document.getElementById("result-display").innerText = "Please enter a number.";
        return;
    }

    // 2. Convert text to a number (like we learned in debugging!)
    const celsiusValue = parseFloat(rawValue);

    // 3. Call our custom function and pass the number as an argument
    const finalAnswer = celsiusToFahrenheit(celsiusValue);

    // 4. Output the result to the screen (rounded to 2 decimal places)
    document.getElementById("result-display").innerText = `${celsiusValue}°C = ${finalAnswer.toFixed(2)}°F`;
    
    // Clear the other input to avoid confusion
    document.getElementById("inputFahrenheit").value = "";
}

function handleFtoC() {
    // 1. Get user input
    const inputElement = document.getElementById("inputFahrenheit");
    const rawValue = inputElement.value;
    
    if (rawValue === "") {
        document.getElementById("result-display").innerText = "Please enter a number.";
        return;
    }

    // 2. Convert text to a number
    const fahrenheitValue = parseFloat(rawValue);

    // 3. Call our custom function and pass the number as an argument
    const finalAnswer = fahrenheitToCelsius(fahrenheitValue);

    // 4. Output the result to the screen (rounded to 2 decimal places)
    document.getElementById("result-display").innerText = `${fahrenheitValue}°F = ${finalAnswer.toFixed(2)}°C`;
    
    // Clear the other input to avoid confusion
    document.getElementById("inputCelsius").value = "";
}