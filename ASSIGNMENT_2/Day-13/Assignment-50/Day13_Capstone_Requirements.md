# Day 13 Practical Submission: Capstone Project Requirements
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Project Title:** DevDash - Developer Productivity Workspace  

## 1. Project Overview
DevDash is a browser-based, offline-first productivity dashboard designed specifically for software engineers. It acts as a centralized workspace combining task management, personalized UI settings, and a dynamic resource library. The application operates entirely client-side, utilizing the Web Storage API for database persistence and vanilla JavaScript for state management.

## 2. Core Technical Features
To demonstrate comprehensive frontend capabilities acquired over the last 12 days, the application will implement:
* **State-Driven Rendering:** UI updates will be strictly managed by a central JavaScript Array acting as the application state, eliminating manual DOM node manipulation.
* **Web Storage Abstraction:** A custom `StorageHelper` module will automatically serialize and parse JSON data to and from `localStorage`.
* **Asynchronous Data Fetching:** The Fetch API will be used to request and parse an external `resources.json` file, dynamically generating an interactive grid of developer tools and articles.
* **CSS Grid & Flexbox Architecture:** A responsive, multi-pane layout that adapts to different screen sizes seamlessly.
* **SPA Routing:** Toggleable CSS state classes (`.hidden`) to navigate between the "Tasks" view and the "Library" view without triggering page reloads.

## 3. User Requirements (User Stories)

### 3.1 Personalization & Settings
* **UR-01:** As a user, I must be able to input my display name and have it persist on the dashboard greeting.
* **UR-02:** As a user, I must be able to toggle between Light and Dark themes, and the application must remember this preference upon refresh.

### 3.2 Task Management (CRUD)
* **UR-03:** As a user, I must be able to type a new task into a form and press Enter to instantly add it to my active task list.
* **UR-04:** As a user, I must be able to check a box to mark a task as completed, striking through the text.
* **UR-05:** As a user, I must be able to click a delete button to permanently remove a task from the board.
* **UR-06:** As a user, I expect my entire task list to survive a browser tab closure and restore automatically when I return.

### 3.3 Resource Library
* **UR-07:** As a user, I must be able to click a navigation tab to view a library of programming resources, dynamically loaded from a backend JSON file.

## 4. UI Layout Architecture (Wireframe)
The Single Page Application will utilize a responsive CSS Grid split-pane layout to separate navigation from the active workspace.

+---------------------------------------------------------+
|  [Header] DevDash 👨‍💻               [🌙 Theme Toggle]  |
+---------------------------------------------------------+
|                                                         |
|  [Navigation]  (•) Active Tasks    ( ) Resource Library |
|                                                         |
+---------------------------+-----------------------------+
| TASK MASTER PANEL         |  STATISTICS & INFO          |
|                           |                             |
|  [ Input: New Task... ]   |  Total Tasks: 3             |
|  [+ Add Task]             |  Completed: 1               |
|                           |                             |
|  [ ] Design Data Schema   |  [Clear Completed Tasks]    |
|  [x] Write PRD            |                             |
|  [ ] Build HTML Layout    |                             |
+---------------------------+-----------------------------+

## 5. State Management & Data Schemas
The application will rely on two primary data structures to sync the UI with local memory.

### 5.1 Task Object Schema
Saved persistently in `localStorage` under the key `devdash_tasks`.
```json
{
  "id": 1699901234567,
  "title": "Build HTML Layout",
  "completed": false,
  "createdAt": "2026-11-14T13:00:00Z"
}

{
  "id": "res_01",
  "title": "Python Machine Learning Roadmap",
  "category": "AI/Data Science",
  "url": "[https://example.com/ml-roadmap](https://example.com/ml-roadmap)",
  "type": "Article"
}