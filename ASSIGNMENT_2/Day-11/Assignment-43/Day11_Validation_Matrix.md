# Day 11 Practical Submission: Validation Test Matrix
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topics Covered:** Single Page Application (SPA) routing, DOM creation, and Form Validation.

## Part 1: Dynamic Reading List (Assignment 41)

| Test ID | Feature | Scenario / User Action | Expected System Behavior | Status |
| :--- | :--- | :--- | :--- | :--- |
| **RL-01** | Form Submit | User types valid text and submits. | Page does not reload. New `<li>` is generated dynamically and appended to the list. Input clears. | ✅ PASS |
| **RL-02** | Guard Clause | User clicks submit with a completely empty input. | Form is intercepted. JS reveals `.error` class containing "Please enter a title." No empty element is added to the DOM. | ✅ PASS |
| **RL-03** | Data Sanitization | User submits text with leading/trailing spaces (e.g., `"   Book   "`). | JS `.trim()` removes whitespace before DOM injection. | ✅ PASS |
| **RL-04** | Node Deletion | User clicks "Remove" on the second item in a list of three. | JS targets the specific `parentElement` and executes `.remove()`. Items 1 and 3 remain unaffected. | ✅ PASS |

## Part 2: SPA Contact Form (Assignment 42)

| Test ID | Feature | Scenario / User Action | Expected System Behavior | Status |
| :--- | :--- | :--- | :--- | :--- |
| **CF-01** | HTML5 Validation | User attempts to submit without an email address. | Native browser validation halts submission and flags the `required` field. JS does not execute. | ✅ PASS |
| **CF-02** | View Routing (SPA) | User submits a fully valid form. | `event.preventDefault()` halts refresh. Form section gains `.hidden` class. Summary section removes `.hidden` class. | ✅ PASS |
| **CF-03** | Data Extraction | User submits specific text inside the `<textarea>`. | JS accurately captures `.value` and injects it into the summary via `.innerText`. | ✅ PASS |
| **CF-04** | Form Reset | User clicks "Send Another Message". | JS executes native `form.reset()` to clear all inputs, and UI state reverses back to default view. | ✅ PASS |

---

## Part 3: Technical Reflection

**1. Secure DOM Injection**
While building the Reading List, I utilized `document.createElement()` and `appendChild()` instead of injecting raw HTML strings via `innerHTML`. This is a critical security measure. If a malicious user typed `<script>stealCookies()</script>` into the input, `innerHTML` would execute it (Cross-Site Scripting). By creating native DOM nodes and using `.innerText`, the browser treats the input strictly as harmless text.

**2. State Machines & Single Page Applications (SPA)**
The Contact Form demonstrated the foundational architecture of React and modern web apps. Instead of navigating between `contact.html` and `success.html`, the entire experience happened on one page. By trapping the submit event with `event.preventDefault()` and manipulating CSS visibility classes, I created a seamless, uninterrupted user experience that feels like a native desktop application.