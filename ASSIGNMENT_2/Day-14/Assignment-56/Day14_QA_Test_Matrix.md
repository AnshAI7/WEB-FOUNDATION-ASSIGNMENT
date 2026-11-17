# Day 14 Practical Submission: QA Test Matrix
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Project:** DevDash Release Candidate (v1.0)

## QA Testing Strategy
Testing was conducted manually using Google Chrome (Version 119+) and the VS Code Live Server extension to ensure proper CORS handling for the Fetch API.

### Test Environment
* **OS:** Windows 11
* **Browser:** Google Chrome
* **Local Server:** VS Code Live Server (Port 5500)
* **Storage Wipe:** `localStorage.clear()` executed prior to Test Run 1.

---

## The Test Matrix

| Test ID | Feature | Action / Steps to Reproduce | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Theme Toggle | Click "🌙 Dark Mode" button. | Body receives `theme-dark` class, button text changes to ☀️, `localStorage` updates to 'dark'. | Colors inverted, button updated, storage reads 'dark'. | ✅ Pass |
| **TC-02** | Theme Persistence | Refresh the browser while in Dark Mode. | Application boots directly into Dark Mode without flashing white. | Booted directly into Dark Mode. | ✅ Pass |
| **TC-03** | Username Save | Type "Ansh Mishra" into profile input. | `localStorage` key `devdash_user` updates on every keystroke. | Checked DevTools; memory updated instantly. | ✅ Pass |
| **TC-04** | SPA Routing | Click "📚 Resource Library" nav button. | Task view hides (`.hidden-view`), Resource view appears (`.active-view`), no page reload occurs. | View swapped instantly without HTTP reload. | ✅ Pass |
| **TC-05** | Resource Fetch | Navigate to Resource Library. | App fetches `resources.json` and injects 5 cards into the CSS Grid. | Grid populated with external JSON data successfully. | ✅ Pass |
| **TC-06** | Task Create | Type "Review ML Code" & press Enter. | Task appears in UI, input clears, array updates, `localStorage` updates, Total stat increases. | Task added to top of list, stats updated to Total: 1. | ✅ Pass |
| **TC-07** | Task Complete | Click checkbox on active task. | Text strikes through, Completed stat increases by 1. | Strikethrough applied, Stats updated correctly. | ✅ Pass |
| **TC-08** | Task Persistence | Close browser tab and reopen. | "Review ML Code" task is still listed and checked. | Task survived tab closure via `StorageHelper`. | ✅ Pass |
| **TC-09** | Task Delete | Click 🗑️ button on task. | Task removed from DOM, array, and `localStorage`. Stats decrease. | Task permanently deleted. | ✅ Pass |
| **TC-10** | Clear Completed | Click "Clear Completed" button. | Only checked tasks are removed; unchecked tasks remain. | Completed tasks wiped successfully. | ✅ Pass |

---

## QA Conclusion
The Release Candidate has passed all 10 core test cases successfully. Data persistence is perfectly synchronized between the UI State and the Web Storage API. The asynchronous fetch safely catches errors if Live Server is not running. 

**Status:** Ready for Final Revision.