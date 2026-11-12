# Day 6 Practical Submission: JS Utilities & Architecture
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topics Covered:** Scope, Hoisting, Guard Clauses, and Pure Functions

## Part 1: Test Cases Documentation

The following test cases were executed to verify the integrity of the Validation Utility (Assignment 22) and the Merge/Calculate Utilities (Assignment 23).

### 1.1 Registration Validator (Guard Clauses)
| Test ID | Input Data (User, Age, Pass) | Expected Output (UI Alert) | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **VAL-01** | `("", "", "")` | "Username cannot be empty." | "Username cannot be empty." | ✅ PASS |
| **VAL-02** | `("An", 20, "pass1234")` | "Username must be at least 3 characters long." | "Username must be at least 3 characters long." | ✅ PASS |
| **VAL-03** | `("Ansh", 15, "pass1234")` | "You must be at least 18 years old..." | "You must be at least 18 years old..." | ✅ PASS |
| **VAL-04** | `("Ansh", 20, "pass1234")` | "Account successfully created!" (Success Class) | "Account successfully created!" | ✅ PASS |

### 1.2 Settings Merge & Total Calculator (Pure Functions)
| Test ID | Input Data | Expected Output | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **UTL-01** | `mergeSettings` with User: `{theme: "dark"}` | `{theme: "dark", notifications: true, autoSave: true}` | `{theme: "dark", notifications: true, autoSave: true}` | ✅ PASS |
| **UTL-02** | `calculateTotal` with Prices: `10, 20.5, 30` | `Total: $60.50` | `Total: $60.50` | ✅ PASS |
| **UTL-03** | `calculateTotal` with empty input `""` | "Please enter prices." (Guard Clause trigger) | "Please enter prices." | ✅ PASS |

---

## Part 2: Technical Reflection

**1. The Power of Guard Clauses**
Prior to this module, I relied heavily on nested `if/else if/else` statements for form validation, which often resulted in deeply indented, hard-to-read code (Arrow Code). Implementing **Guard Clauses** completely flattened the architecture of my `validator.js` file. By checking for failure states first and immediately returning out of the function, the main execution thread remains clean, and the "Happy Path" is securely placed at the very bottom of the function.

**2. Scope & Hoisting**
Building the prediction worksheet (Assignment 21) clarified the behavioral differences between `var`, `let`, and function declarations during the browser's compilation phase. Understanding that `var` declarations are hoisted (initialized as `undefined`) while `let` and `const` remain in the Temporal Dead Zone prevents unpredictable runtime errors. Furthermore, strictly utilizing block scope ensures variables do not leak globally across the application.

**3. Separation of Concerns (Pure Utilities)**
By abstracting mathematical logic and object manipulation (`mergeSettings`) into a standalone `utils.js` file, the core business logic was successfully decoupled from the DOM manipulation logic in `script.js`. These functions are now "pure"—they accept parameters and return values without causing side effects to the HTML interface. This architecture mimics professional component-based development, making the codebase highly modular, testable, and reusable.