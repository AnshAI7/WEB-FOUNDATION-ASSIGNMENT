// --- UTILITY TO TEST ---
function formatKeyName(keyString) {
    const spaced = keyString.replace(/([A-Z])/g, ' $1').trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

// --- THE TEST RUNNER ---
async function runAllTests() {
    let passedCount = 0;
    const btn = document.getElementById("run-btn");
    btn.innerText = "Running Tests...";
    btn.disabled = true;

    // TEST 1: String Formatting
    const t1Expected = "Target Roles";
    const t1Result = formatKeyName("targetRoles");
    
    if (t1Result === t1Expected) {
        updateTestUI("test-1", "Pass");
        passedCount++;
    } else {
        updateTestUI("test-1", "Fail");
    }

    // TEST 2: Object.entries parsing
    const mockProfile = { name: "Ansh", role: "AI Student" };
    const parsedLength = Object.entries(mockProfile).length;
    
    if (parsedLength === 2) {
        updateTestUI("test-2", "Pass");
        passedCount++;
    } else {
        updateTestUI("test-2", "Fail");
    }

    // TEST 3: Async JSON Fetch (Needs Live Server)
    try {
        const response = await fetch("catalogue.json");
        const data = await response.json();
        
        // We know our catalogue has exactly 3 items
        if (data.length === 3) {
            updateTestUI("test-3", "Pass");
            passedCount++;
        } else {
            updateTestUI("test-3", "Fail");
        }
    } catch (error) {
        updateTestUI("test-3", "Fail");
        console.error("Test 3 Failed:", error);
    }

    // Final UI Update
    document.getElementById("summary").innerText = `${passedCount} / 3 Passed`;
    document.getElementById("summary").style.color = passedCount === 3 ? "#34d399" : "#fca5a5";
    btn.innerText = "Tests Completed";
}

// --- DOM HELPER ---
function updateTestUI(testId, status) {
    const card = document.getElementById(testId);
    const badge = card.querySelector(".test-status");

    if (status === "Pass") {
        card.style.borderLeftColor = "#10b981";
        badge.innerText = "✅ PASS";
        badge.className = "test-status pass";
    } else {
        card.style.borderLeftColor = "#ef4444";
        badge.innerText = "❌ FAIL";
        badge.className = "test-status fail";
    }
}