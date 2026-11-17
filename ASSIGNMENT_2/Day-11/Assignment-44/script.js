// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
// The array holding all our data objects
let tasks = []; 
// Tracks the current view: 'all', 'active', or 'completed'
let currentFilter = 'all'; 

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

// ==========================================
// 2. CORE CRUD FUNCTIONS
// ==========================================

// CREATE
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    // Create a new task object
    const newTask = {
        id: Date.now(), // Generates a unique ID based on the timestamp
        text: text,
        completed: false
    };

    tasks.push(newTask); // Update State
    taskInput.value = ''; // Clear input
    renderTasks(); // Update UI
});

// UPDATE (Complete/Incomplete)
function toggleTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed; // Flip the boolean
            break;
        }
    }
    renderTasks();
}

// UPDATE (Edit Text)
function editTask(id) {
    // Find the task
    let taskToEdit = null;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            taskToEdit = tasks[i];
            break;
        }
    }

    if (taskToEdit) {
        // Use a prompt to get the new text
        const newText = prompt("Edit your task:", taskToEdit.text);
        if (newText !== null && newText.trim() !== "") {
            taskToEdit.text = newText.trim();
            renderTasks();
        }
    }
}

// DELETE
function deleteTask(id) {
    // .filter() creates a new array without the deleted ID
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// ==========================================
// 3. FILTER LOGIC
// ==========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. Update UI active class
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // 2. Update state and re-render
        currentFilter = this.getAttribute('data-filter');
        renderTasks();
    });
});

// ==========================================
// 4. RENDER ENGINE
// ==========================================
function renderTasks() {
    // 1. Clear the current HTML list
    taskList.innerHTML = '';

    // 2. Apply the current filter to the array
    let filteredTasks = [];
    if (currentFilter === 'all') {
        filteredTasks = tasks;
    } else if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => task.completed === false);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed === true);
    }

    // 3. Handle Empty State
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    // 4. Build the HTML for the filtered tasks
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        // Build the inner HTML securely
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="task-text">${task.text}</span>
            <button class="action-btn btn-edit" onclick="editTask(${task.id})">Edit</button>
            <button class="action-btn btn-delete" onclick="deleteTask(${task.id})">Delete</button>
        `;
        
        taskList.appendChild(li);
    });
}