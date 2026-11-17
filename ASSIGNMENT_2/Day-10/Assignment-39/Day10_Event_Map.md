# Day 10 Practical Submission: Event Listeners & State Classes
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topics Covered:** DOM Event Listeners, State Management (`classList`), and ARIA Accessibility.

## Part 1: Interaction Event Map

The following Event Map documents the interactive architecture of the Developer Profile application (Assignment 38). All event listeners utilize the `click` event and manage UI state dynamically without page reloads.

| Target Node ID | Event Type | State Class Toggled | ARIA Attribute Updated | UI Result |
| :--- | :--- | :--- | :--- | :--- |
| `#follow-btn` | `click` | `.is-following` | `aria-pressed` (true/false) | Button inverts to grey, text changes to "✓ Following". |
| `#details-toggle` | `click` | `.is-expanded` (on `#hidden-details`) | `aria-expanded` (true/false) | Paragraph fades into view (`display: block`), button text changes to "Hide". |
| `#theme-btn` | `click` | `.theme-dark` (on `#app-wrapper`) | `aria-pressed` (true/false) | Global color palette inverts to dark mode, text changes to "☀️ Light Mode". |

## Part 2: Technical Reflection

**1. Separation of Concerns (JS vs. CSS)**
In this module, I implemented the industry-standard practice of separating logic from styling. Instead of using JavaScript to manually change inline styles (e.g., `button.style.backgroundColor = 'grey'`), I used JavaScript solely to toggle a semantic state class (`classList.toggle('is-following')`). The CSS file remains completely responsible for how that state visually looks. This makes the codebase vastly easier to maintain and debug.

**2. State-Driven UI & Accessibility**
I learned that visual changes are not enough for a professional web application. When a state changes (like a menu expanding or a theme swapping), screen readers for visually impaired users need to know. By coupling my `classList.toggle()` logic with `setAttribute('aria-expanded', 'true')`, I ensured that the application's interactive state is broadcasted properly to accessibility tools, making the UI fully WCAG compliant.