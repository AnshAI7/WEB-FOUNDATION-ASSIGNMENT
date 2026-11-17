// ==========================================
// 1. STORAGE HELPER MODULE
// ==========================================
const StorageHelper = {
    save: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    get: function(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
// HYDRATION: Load from memory OR start fresh
let tasks = StorageHelper.get('qa_todo_db') || [];
let currentFilter = 'all';

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');
const storageDump = document.getElementById('storage-dump');

// ==========================================
// 3. CORE CRUD FUNCTIONS
// ==========================================
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ id: Date.now(), text: text, completed: false });
    taskInput.value = '';
    
    updateApp(); // Centralized update
});

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    updateApp();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateApp();
}

// ==========================================
// 4. FILTER LOGIC
// ==========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter');
        updateApp();
    });
});

// ==========================================
// 5. THE MASTER UPDATE CYCLE
// ==========================================
// This single function runs the Save-Render loop for BOTH UI panels
function updateApp() {
    // A. SAVE TO MEMORY
    StorageHelper.save('qa_todo_db', tasks);
    
    // B. RENDER QA TERMINAL
    storageDump.innerText = JSON.stringify(tasks, null, 4);

    // C. RENDER TO-DO UI
    taskList.innerHTML = '';
    
    let filteredTasks = tasks;
    if (currentFilter === 'active') filteredTasks = tasks.filter(t => !t.completed);
    if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <span class="task-text">${task.text}</span>
                <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

// ==========================================
// 6. QA DATABASE WIPER
// ==========================================
document.getElementById('btn-wipe').addEventListener('click', function() {
    localStorage.removeItem('qa_todo_db');
    tasks = [];
    updateApp();
});

// 7. INITIAL BOOT
updateApp();