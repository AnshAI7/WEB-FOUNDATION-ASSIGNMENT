// --- UTILITY FUNCTIONS (The String Cleaners) ---

function sanitizeName(rawName) {
    // 1. Remove spaces from the beginning and end
    const trimmed = rawName.trim();
    
    if (trimmed === "") return "";

    // 2. Make the entire string lowercase first (e.g., "aNsH" -> "ansh")
    const lowercased = trimmed.toLowerCase();

    // 3. Grab the first letter, make it uppercase, and attach the rest of the string
    // "a" becomes "A" + "nsh" = "Ansh"
    const finalName = lowercased.charAt(0).toUpperCase() + lowercased.slice(1);

    return finalName;
}

function sanitizeEmail(rawEmail) {
    // Emails should never have spaces and are conventionally stored in all lowercase
    // 1. Trim spaces
    // 2. Convert to lowercase
    return rawEmail.trim().toLowerCase();
}


// --- UI HANDLER ---

document.getElementById("profileForm").addEventListener("submit", function(event) {
    // Prevent page reload
    event.preventDefault();

    // Grab raw inputs
    const rawFirst = document.getElementById("fName").value;
    const rawLast = document.getElementById("lName").value;
    const rawEmail = document.getElementById("email").value;

    // Run them through our cleaning utilities
    const cleanFirst = sanitizeName(rawFirst);
    const cleanLast = sanitizeName(rawLast);
    const cleanEmail = sanitizeEmail(rawEmail);

    // Guard Clause: Prevent empty submissions
    if (cleanFirst === "" || cleanLast === "" || cleanEmail === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Output to the screen
    document.getElementById("out-name").innerText = `${cleanFirst} ${cleanLast}`;
    document.getElementById("out-email").innerText = cleanEmail;

    // Reveal the green success card
    document.getElementById("output-card").classList.remove("hidden");
});