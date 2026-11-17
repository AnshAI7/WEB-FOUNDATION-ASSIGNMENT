# Day 14 Practical Submission: Bug Log & Resolution
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Project:** DevDash Release Candidate (v1.0)

---

## Issue Ticket: DEV-001
**Title:** Resource Grid fails to load and throws CORS error when file is opened directly.  
**Date Logged:** 14 Nov 2026  
**Severity:** High (Breaks core UI component)  
**Environment:** Chrome 119+, Windows 11 (file:// protocol)

### 1. The Issue (Symptoms)
When a user double-clicks `index.html` from their file explorer to open the DevDash application, the "Resource Library" tab remains completely blank. Opening the Chrome Developer Tools (F12) reveals a red error in the console: 
`Fetch API cannot load file:///.../resources.json. URL scheme "file" is not supported.`

### 2. The Root Cause
Modern web browsers enforce strict security policies (CORS). They intentionally block JavaScript's `fetch()` API from reading local hard drive files via the `file://` protocol to prevent malicious scripts from stealing personal data. The `fetch()` command only works over the `http://` or `https://` protocols (which requires a local web server).

### 3. The Applied Fix
We cannot change browser security policies, but we *can* fix how our application handles the error so the UI doesn't just silently break. I wrapped the `fetch()` logic in a `try/catch` block. If the fetch fails, the `catch` block catches the error and injects a helpful error message directly into the HTML to guide the user.

**Code Change Applied in `script.js`:**
```javascript
async function fetchResources() {
    try {
        const response = await fetch('resources.json');
        if (!response.ok) throw new Error("Network response was not ok");
        // ... (data parsing and rendering logic) ...
    } catch (error) {
        console.error("Fetch Error:", error);
        // FIX: Inject helpful UI state instead of leaving it blank
        resourceGrid.innerHTML = `
            <div class="empty-state">
                ⚠️ Failed to load resources. 
                <br>Security block: You must run this app via <strong>VS Code Live Server</strong>, not via file://.
            </div>
        `;
    }
}