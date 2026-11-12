// Helper Function to format camelCase keys (e.g., "fullName" -> "Full Name")
function formatKeyName(keyString) {
    const spaced = keyString.replace(/([A-Z])/g, ' $1').trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

// The Profile Generator
function buildProfile() {
    // 1. Build the JavaScript Object dynamically from the user's input
    const developerProfile = {
        fullName: document.getElementById("in-name").value,
        education: document.getElementById("in-edu").value,
        institution: document.getElementById("in-inst").value,
        targetRoles: document.getElementById("in-roles").value,
        coreSkills: document.getElementById("in-skills").value
    };

    // 2. Display the generated raw data on the screen
    document.getElementById("raw-data").innerText = JSON.stringify(developerProfile, null, 4);

    // 3. Clear existing list on the card
    const listElement = document.getElementById("dynamic-list");
    listElement.innerHTML = ""; 

    // 4. Use Object.entries() to loop through the dynamically created object
    const profileEntries = Object.entries(developerProfile);

    for (let i = 0; i < profileEntries.length; i++) {
        const currentKey = profileEntries[i][0];
        const currentValue = profileEntries[i][1];

        // Format the key to look nice
        const formattedLabel = formatKeyName(currentKey);

        // Inject into HTML
        listElement.innerHTML += `
            <li>
                <span class="prop-label">${formattedLabel}</span>
                <span class="prop-value">${currentValue || "Not provided"}</span>
            </li>
        `;
    }

    // 5. Reveal the card
    document.getElementById("profile-card").classList.remove("hidden");
}