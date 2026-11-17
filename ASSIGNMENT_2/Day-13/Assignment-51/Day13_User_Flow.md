# Day 13 Practical Submission: DevDash User Flow & Routing
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Project:** DevDash - Developer Productivity Workspace  

## 1. System Boot (Hydration Flow)
This flow dictates what happens the millisecond the user opens `index.html`.

1. **User Action:** Opens application in the browser.
2. **System Check:** `StorageHelper` checks `localStorage` for `devdash_tasks` and `devdash_theme`.
3. **Condition A (New User):** If no data exists, initialize empty state `[]` and default to `light` mode.
4. **Condition B (Returning User):** If data exists, parse JSON into the JS state array and apply the `theme-dark` class to the body.
5. **Final Render:** Call `renderTasks()` to draw the UI matching the memory.

---

## 2. Interaction Flow: Task Management (CRUD)
This flow maps the journey of adding and completing a task.

1. **User Action:** Types "Review Data Structures" into the input and clicks "+ Add Task".
2. **Event Interception:** `event.preventDefault()` stops the page from reloading.
3. **State Mutation:** JS creates a new object `{ id: 123, text: "...", completed: false }` and pushes it to the `tasks` array.
4. **Persistence:** JS automatically calls `StorageHelper.save()` to overwrite `localStorage` with the new array.
5. **Re-Render:** `renderTasks()` clears the HTML list and redraws all items.
6. **User Action (Complete):** User clicks the checkbox.
7. **State Mutation:** JS finds the task by ID, changes `completed: true`, saves to storage, and re-renders with a strikethrough CSS class.

---

## 3. Interaction Flow: View Routing (SPA Navigation)
This flow maps how the user switches from the To-Do list to the Resource Library without changing web pages.

1. **User Action:** Clicks the "📚 Resource Library" button on the sidebar.
2. **UI Update 1:** The `active` class is removed from the Task button and added to the Library button to highlight it.
3. **UI Update 2:** The `<section id="view-tasks">` receives the `.hidden-view` CSS class (making it disappear).
4. **UI Update 3:** The `<section id="view-resources">` has the `.hidden-view` class removed (making it appear).
5. **Data Fetch:** If the resources have not been loaded yet, trigger the async `fetchResources()` function to grab data from `resources.json` and build the grid.