# Day 12 Practical Submission: Web Storage API Comparison
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topic:** Data Persistence (`localStorage` vs. `sessionStorage`)

## 1. Overview of the Web Storage API
Before the Web Storage API, web applications had to store data in Cookies, which were limited to 4KB and sent to the server with every HTTP request, slowing down the application. The modern Web Storage API provides two mechanisms—`localStorage` and `sessionStorage`—that allow browsers to store up to 5MB of data locally on the user's device without sending it to the server.

Both mechanisms share the exact same syntax and methods:
* `setItem(key, value)`
* `getItem(key)`
* `removeItem(key)`
* `clear()`

*Note: Both mechanisms can only store Strings. To store complex Arrays or Objects, the data must first be converted using `JSON.stringify()`.*

---

## 2. Core Differences: The Lifespan

The sole architectural difference between the two is **Data Volatility** (how long the data survives).

### Local Storage (`localStorage`)
* **Lifespan:** Permanent (Persistent).
* **Behavior:** Data stored here survives indefinitely. If the user closes the tab, closes the browser, or restarts their entire computer, the data will still be there when they return.
* **How it is cleared:** It is only erased if the developer writes `localStorage.clear()` in the code, or if the user manually goes into their browser settings and clears their cache/site data.
* **Best Use Cases:** 
  * Saving a user's Dark Mode / Light Mode theme preference.
  * Storing items in an E-commerce shopping cart so they don't disappear if the user accidentally closes the tab.
  * Saving a user's persistent login state.

### Session Storage (`sessionStorage`)
* **Lifespan:** Temporary (Session-based).
* **Behavior:** Data stored here is strictly tied to the specific browser tab. If the user refreshes the page, the data survives. However, the exact millisecond the user closes that specific tab or window, the data is permanently erased.
* **How it is cleared:** Automatically upon closing the tab, or programmatically via `sessionStorage.clear()`.
* **Best Use Cases:**
  * Saving a multi-step form (like a long checkout process) so data isn't lost on accidental refresh, but clears out once they leave.
  * Storing temporary filtering/sorting preferences on a data table.
  * Banking applications where data must be wiped immediately for security reasons when the session ends.

---

## 3. Technical Summary
As a web developer building Single Page Applications (SPAs), `localStorage` is the tool of choice for building offline-first applications (like persistent To-Do lists), whereas `sessionStorage` is a security and convenience tool for managing temporary state during a single visit.