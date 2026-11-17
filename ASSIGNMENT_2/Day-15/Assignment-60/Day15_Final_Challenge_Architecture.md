# Day 15 Practical Submission: Final Challenge Architecture
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Feature:** Dynamic Category Filtering

## Feature Overview
The final working challenge implements a dynamic filtering system for the Resource Library. Instead of hard-coding filter buttons into the HTML, the JavaScript engine parses the `resources.json` database, automatically identifies every unique category, and builds the UI dynamically.

## Architectural Explanation
1. **Data Ingestion:** The `fetch()` API grabs the JSON file and stores it in a global array called `globalResources`. This prevents the application from making a new network request every time the user clicks a filter.
2. **Dynamic UI Generation:** We utilize the ES6 `Set` object to instantly strip out duplicate categories from the JSON data. We then iterate over this unique list using `document.createElement()` to inject buttons into the DOM.
3. **State-Driven Filtering:** When a category button is clicked, an event listener intercepts the click, identifies the target string, and passes it to `renderResourceCards()`.
4. **Array Manipulation:** The `renderResourceCards()` function uses the `.filter()` array method to create a temporary subset of resources that match the clicked category, clears the current CSS Grid, and redraws only the matching cards.

This perfectly demonstrates the core principle of Modern Single Page Applications: **Data dictates the UI.**