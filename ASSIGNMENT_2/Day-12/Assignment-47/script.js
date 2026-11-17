// ==========================================
// 1. THE REUSABLE HELPER MODULE
// ==========================================
const StorageHelper = {
    
    // Save: Automatically converts Objects/Arrays to Strings
    save: function(key, data) {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
            return true;
        } catch (error) {
            console.error("StorageHelper Save Error:", error);
            return false;
        }
    },

    // Get: Automatically parses Strings back into Objects/Arrays
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            if (item === null) return null; // Key doesn't exist
            return JSON.parse(item);
        } catch (error) {
            console.error("StorageHelper Get Error:", error);
            return null;
        }
    },

    // Remove a single item
    remove: function(key) {
        localStorage.removeItem(key);
    },

    // Clear the entire storage
    clear: function() {
        localStorage.clear();
    }
};

// ==========================================
// 2. MOCK DATA TO TEST
// ==========================================
const mockUserProfile = {
    username: "Ansh Mishra",
    role: "AI Engineer",
    preferences: {
        theme: "dark",
        notifications: true
    },
    skills: ["JavaScript", "Python", "Java", "React"]
};

// ==========================================
// 3. UI EVENT LISTENERS
// ==========================================
const outputScreen = document.getElementById("output-screen");

// SAVE BTN
document.getElementById("btn-save").addEventListener("click", function() {
    // Notice how clean this is! We pass the raw JS Object directly.
    StorageHelper.save("app_user_data", mockUserProfile);
    outputScreen.innerText = "// Object successfully stringified and saved to localStorage!";
    outputScreen.style.color = "#38bdf8"; // Blue
});

// LOAD BTN
document.getElementById("btn-load").addEventListener("click", function() {
    // Get the data back. StorageHelper automatically parses it into a real object.
    const retrievedData = StorageHelper.get("app_user_data");

    if (retrievedData) {
        // We can interact with it like a real object now:
        const user = retrievedData.username;
        const topSkill = retrievedData.skills[0];

        // Format for display
        outputScreen.innerText = `Data Parsed Successfully!\n\nUser: ${user}\nTop Skill: ${topSkill}\n\nFull Object Dump:\n` + JSON.stringify(retrievedData, null, 4);
        outputScreen.style.color = "#a7f3d0"; // Green
    } else {
        outputScreen.innerText = "// No data found in localStorage. Please save first.";
        outputScreen.style.color = "#ef4444"; // Red
    }
});

// CLEAR BTN
document.getElementById("btn-clear").addEventListener("click", function() {
    StorageHelper.remove("app_user_data");
    outputScreen.innerText = "// Storage cleared. Try loading data now (it should fail).";
    outputScreen.style.color = "#ef4444"; // Red
});