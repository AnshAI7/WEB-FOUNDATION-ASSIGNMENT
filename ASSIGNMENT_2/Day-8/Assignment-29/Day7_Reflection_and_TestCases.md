# Day 7 Practical Submission: Arrays & Strings
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topics Covered:** Array Methods (`push`, `splice`, `map`, `filter`, `reduce`) and String Manipulation (`trim`, `toLowerCase`, `split`, `join`).

## Part 1: Test Cases Documentation

The following test cases were executed to verify the integrity of the Data Transformation utilities (Assignment 26) and Text-Cleaning utility (Assignment 27).

### 1.1 Data Transformer (Map, Filter, Reduce)
| Test ID | Method Used | Input Data | Expected Output | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ARR-01** | `.map()` | Full Product Array | Array of 5 String Names | `["Wireless Mouse", "Mechanical Keyboard", ...]` | ✅ PASS |
| **ARR-02** | `.filter()`| Full Product Array | Array of 3 Objects (`inStock: true`) | `[{id: 101...}, {id: 103...}, {id: 104...}]` | ✅ PASS |
| **ARR-03** | `.reduce()`| Full Product Array | Single Float Value | `$362.47` | ✅ PASS |

### 1.2 Text-Cleaning Utility (String Methods)
| Test ID | Method Used | Raw Input Data | Expected Sanitized Output | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **STR-01** | `.trim()`, `.charAt()` | `"   aNsH  "` | `"Ansh"` | `"Ansh"` | ✅ PASS |
| **STR-02** | `.trim()`, `.toLowerCase()` | `" mIShrA "` | `"Mishra"` | `"Mishra"` | ✅ PASS |
| **STR-03** | `.trim()`, `.toLowerCase()` | `"   Ansh87374@GMAIL.com   "` | `"ansh87374@gmail.com"` | `"ansh87374@gmail.com"` | ✅ PASS |

---

## Part 2: Technical Reflection

**1. The Synergy of Strings and Arrays**
Throughout this module, I realized that Strings and Arrays are fundamentally connected. Solving the algorithmic problems (Assignment 28) demonstrated that complex string manipulations (like reversing a word or removing duplicates) are best handled by converting the string to an array using `.split()`, applying powerful array methods like `.reverse()` or `.filter()`, and then reconstructing the string using `.join()`. 

**2. Data Immutability with Advanced Methods**
When transforming the product dataset (Assignment 26), I utilized `.map()`, `.filter()`, and `.reduce()`. A critical takeaway is that these higher-order methods are "non-destructive"—they return a brand new array or value without mutating (destroying) the original dataset. This is a crucial concept for modern frameworks like React, ensuring data integrity across the application lifecycle.

**3. Frontend Data Sanitization**
Building the form text-cleaner (Assignment 27) reinforced the golden rule of backend database management: "Never trust user input." By chaining string methods like `.trim().toLowerCase()` on the frontend, I can ensure that erratic user inputs (accidental spaces, caps lock) are sanitized into a uniform standard before they ever reach a database, preventing critical bugs like duplicate accounts or failed login attempts.