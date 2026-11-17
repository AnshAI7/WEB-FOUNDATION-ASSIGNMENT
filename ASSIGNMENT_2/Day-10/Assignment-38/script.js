// ==========================================
// 1. SELECT DOM ELEMENTS
// ==========================================
const followBtn = document.getElementById("follow-btn");
const detailsToggleBtn = document.getElementById("details-toggle");
const hiddenDetails = document.getElementById("hidden-details");
const themeBtn = document.getElementById("theme-btn");
const appWrapper = document.getElementById("app-wrapper");


// ==========================================
// 2. ATTACH EVENT LISTENERS
// ==========================================

// --- FEATURE A: Follow Button Toggle ---
followBtn.addEventListener("click", function() {
    // 1. Toggle the CSS class
    followBtn.classList.toggle("is-following");

    // 2. Check if the class is currently active to update text & accessibility
    const isFollowing = followBtn.classList.contains("is-following");
    
    if (isFollowing) {
        followBtn.innerText = "✓ Following";
        followBtn.setAttribute("aria-pressed", "true");
    } else {
        followBtn.innerText = "+ Follow";
        followBtn.setAttribute("aria-pressed", "false");
    }
});


// --- FEATURE B: Expand/Collapse Details ---
detailsToggleBtn.addEventListener("click", function() {
    // 1. Toggle the visibility class on the paragraph
    hiddenDetails.classList.toggle("is-expanded");

    // 2. Update the button text & accessibility attributes
    const isExpanded = hiddenDetails.classList.contains("is-expanded");

    if (isExpanded) {
        detailsToggleBtn.innerText = "Hide Background Details ▲";
        detailsToggleBtn.setAttribute("aria-expanded", "true");
    } else {
        detailsToggleBtn.innerText = "Show Background Details ▼";
        detailsToggleBtn.setAttribute("aria-expanded", "false");
    }
});


// --- FEATURE C: Dark Mode Toggle ---
themeBtn.addEventListener("click", function() {
    // 1. Toggle the dark theme class on the main wrapper
    appWrapper.classList.toggle("theme-dark");

    // 2. Update the button UI
    const isDark = appWrapper.classList.contains("theme-dark");

    if (isDark) {
        themeBtn.innerText = "☀️ Light Mode";
        themeBtn.setAttribute("aria-pressed", "true");
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
        themeBtn.setAttribute("aria-pressed", "false");
    }
});