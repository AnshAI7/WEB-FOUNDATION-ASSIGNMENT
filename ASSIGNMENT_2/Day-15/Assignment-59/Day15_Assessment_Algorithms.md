# Day 15 Final Assessment: Algorithmic Logic & Dry Runs
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Focus:** Data Manipulation, Array Methods, and QA Tracing

---

## Algorithm 1: Priority Task Filtering
**Problem Statement:** Given an array of task objects, write a function that returns an array of only the *incomplete* tasks, sorted by priority (1 being highest priority, 3 being lowest).

### 1. The JavaScript Solution
```javascript
function getPendingPriorityTasks(tasksArray) {
    return tasksArray
        .filter(task => task.completed === false)
        .sort((a, b) => a.priority - b.priority);
}