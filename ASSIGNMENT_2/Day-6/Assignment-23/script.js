/* ---------------------------------------------------
   Logic for Panel 1 (Settings)
--------------------------------------------------- */
function applySettings() {
    // 1. Define the system defaults
    const defaultSettings = {
        theme: "light",
        notifications: true,
        autoSave: true
    };

    // 2. Gather user preferences from the DOM
    const isDarkChecked = document.getElementById("darkMode").checked;
    const isEmailChecked = document.getElementById("emailNotifs").checked;

    // 3. Create an object from the user's choices
    const userSettings = {
        theme: isDarkChecked ? "dark" : "light",
        notifications: isEmailChecked
    };

    // 4. Pass both objects into our pure utility function
    const finalConfiguration = mergeSettings(defaultSettings, userSettings);

    // 5. Display the merged result in the HTML as a formatted string
    document.getElementById("settings-output").innerText = JSON.stringify(finalConfiguration, null, 2);
}

/* ---------------------------------------------------
   Logic for Panel 2 (Totals)
--------------------------------------------------- */
function processTotals() {
    // 1. Get the raw text from the input
    const rawInput = document.getElementById("priceList").value;

    // Guard Clause for empty input
    if (rawInput.trim() === "") {
        document.getElementById("total-output").innerText = "Please enter prices.";
        return;
    }

    // 2. Convert the comma-separated string into an array of strings
    const stringArray = rawInput.split(",");

    // 3. Convert the array of strings into an array of floating numbers
    const numberArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        // parseFloat converts " 15.5 " into 15.5
        numberArray.push(parseFloat(stringArray[i]));
    }

    // 4. Pass the array of numbers into our pure utility function
    const finalTotal = calculateTotal(numberArray);

    // 5. Display the result, formatted to 2 decimal places
    document.getElementById("total-output").innerText = `Total: $${finalTotal.toFixed(2)}`;
}