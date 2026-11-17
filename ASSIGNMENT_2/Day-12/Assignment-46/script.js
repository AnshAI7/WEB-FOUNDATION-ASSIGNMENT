// 1. DOM Elements
const appBody = document.getElementById("app-body");
const greetingText = document.getElementById("greeting-text");
const nameInput = document.getElementById("username");
const themeSelect = document.getElementById("theme-select");
const btnClear = document.getElementById("btn-clear");

// ==========================================
// 2. INITIALIZATION (Runs immediately on load)
// ==========================================
function loadSettings() {
    // Attempt to retrieve data from localStorage
    const savedName = localStorage.getItem("user_name");
    const savedTheme = localStorage.getItem("user_theme");

    // Apply Name if it exists
    if (savedName) {
        nameInput.value = savedName;
        greetingText.innerText = `Welcome back, ${savedName}!`;
    }

    // Apply Theme if it exists
    if (savedTheme) {
        themeSelect.value = savedTheme;
        if (savedTheme === "dark") {
            appBody.classList.add("theme-dark");
        }
    }
}

// Call the function when the script runs
loadSettings();

// ==========================================
// 3. EVENT LISTENERS (Saving data dynamically)
// ==========================================

// Save the name every time the user types a letter
nameInput.addEventListener("input", function(event) {
    const newName = event.target.value;
    
    // Update the UI
    if (newName.trim() === "") {
        greetingText.innerText = "Welcome, Guest!";
    } else {
        greetingText.innerText = `Welcome back, ${newName}!`;
    }

    // Save to localStorage
    localStorage.setItem("user_name", newName);
});

// Save the theme every time the dropdown changes
themeSelect.addEventListener("change", function(event) {
    const selectedTheme = event.target.value;

    // Update the UI
    if (selectedTheme === "dark") {
        appBody.classList.add("theme-dark");
    } else {
        appBody.classList.remove("theme-dark");
    }

    // Save to localStorage
    localStorage.setItem("user_theme", selectedTheme);
});

// ==========================================
// 4. RESET CAPABILITY
// ==========================================
btnClear.addEventListener("click", function() {
    // 1. Erase all memory
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_theme");
    // Alternatively: localStorage.clear(); (Wipes everything for this domain)

    // 2. Force the page to reload so it starts fresh
    window.location.reload();
});