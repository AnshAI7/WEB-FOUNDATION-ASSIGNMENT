// ==========================================
// 1. UTILITY FUNCTIONS (Storage Helper)
// ==========================================
const StorageHelper = {
    save: function(key, data) { localStorage.setItem(key, JSON.stringify(data)); },
    get: function(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
};

// ==========================================
// 2. STATE MANAGEMENT 
// ==========================================
let tasks = StorageHelper.get('devdash_tasks') || [];
let currentTheme = localStorage.getItem('devdash_theme') || 'light';
let userName = localStorage.getItem('devdash_user') || '';

// ==========================================
// 3. DOM ELEMENT SELECTORS
// ==========================================
const body = document.getElementById('app-body');
const themeToggle = document.getElementById('theme-toggle');
const nameInput = document.getElementById('user-name');
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view-panel');

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');
const emptyTasks = document.getElementById('empty-tasks');
const statTotal = document.getElementById('stat-total');
const statCompleted = document.getElementById('stat-completed');
const btnClearCompleted = document.getElementById('btn-clear-completed');

const resourceGrid = document.getElementById('resource-grid');

// ==========================================
// 4. SYSTEM BOOT SEQUENCE
// ==========================================
function initApp() {
    if (userName) nameInput.value = userName;
    if (currentTheme === 'dark') {
        body.classList.add('theme-dark');
        themeToggle.innerText = '☀️ Light Mode';
    }
    
    // Boot the core engines
    renderTasks();
    fetchResources();
}

// ==========================================
// 5. SETTINGS & SPA ROUTING
// ==========================================
nameInput.addEventListener('input', e => localStorage.setItem('devdash_user', e.target.value));

themeToggle.addEventListener('click', () => {
    body.classList.toggle('theme-dark');
    const isDark = body.classList.contains('theme-dark');
    localStorage.setItem('devdash_theme', isDark ? 'dark' : 'light');
    themeToggle.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        navBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        views.forEach(view => {
            view.classList.remove('active-view');
            view.classList.add('hidden-view');
        });
        
        const targetId = e.currentTarget.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden-view');
        document.getElementById(targetId).classList.add('active-view');
    });
});

// ==========================================
// 6. TASK MASTER LOGIC (CRUD Engine)
// ==========================================
// CREATE
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    // Add to front of array
    tasks.unshift({ id: Date.now(), title: text, completed: false });
    taskInput.value = '';
    updateTasks();
});

// UPDATE
function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    updateTasks();
}

// DELETE (Single)
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    updateTasks();
}

// DELETE (Clear Completed)
btnClearCompleted.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    updateTasks();
});

// MASTER UPDATE & RENDER
function updateTasks() {
    StorageHelper.save('devdash_tasks', tasks);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = ''; // Wipe UI
    
    // Update Stats
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    statTotal.innerText = `Total: ${total}`;
    statCompleted.innerText = `Completed: ${completed}`;

    // Handle Empty State
    if (total === 0) {
        emptyTasks.classList.remove('hidden-view');
        taskList.classList.add('hidden-view');
        return;
    } 

    emptyTasks.classList.add('hidden-view');
    taskList.classList.remove('hidden-view');
    
    // Draw Tasks Securely
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="task-text">${task.title}</span>
            <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
        `;
        taskList.appendChild(li);
    });
}

// ==========================================
// 7. RESOURCE LIBRARY (Fetch API & Dynamic Filters)
// ==========================================
let globalResources = []; // Store fetched data in memory

async function fetchResources() {
    try {
        const response = await fetch('resources.json');
        if (!response.ok) throw new Error("Network response was not ok");
        
        globalResources = await response.json();
        
        // 1. Generate the filter buttons
        renderResourceFilters();
        // 2. Render all cards by default
        renderResourceCards('All');

    } catch (error) {
        console.error("Fetch Error:", error);
        resourceGrid.innerHTML = `<div class="empty-state">⚠️ Failed to load resources. Ensure Live Server is running.</div>`;
    }
}

// ALGORITHM 2 IMPLEMENTED: Extract Unique Categories
function renderResourceFilters() {
    const filterContainer = document.getElementById('category-filters');
    
    // Extract categories, remove duplicates using Set, and add 'All' to the front
    const uniqueCategories = ['All', ...new Set(globalResources.map(res => res.category))];
    
    filterContainer.innerHTML = ''; // Clear container
    
    uniqueCategories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${category === 'All' ? 'active' : ''}`;
        btn.innerText = category;
        
        // Add click listener to filter the grid
        btn.addEventListener('click', (e) => {
            // Update active styling
            document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Re-render the cards based on the clicked category
            renderResourceCards(category);
        });
        
        filterContainer.appendChild(btn);
    });
}

// ALGORITHM 1 IMPLEMENTED: Filtering Arrays
function renderResourceCards(selectedCategory) {
    resourceGrid.innerHTML = ''; 
    
    // Filter logic: If 'All', use whole array. Otherwise, filter by category match.
    const filteredResources = selectedCategory === 'All' 
        ? globalResources 
        : globalResources.filter(res => res.category === selectedCategory);
    
    filteredResources.forEach(res => {
        resourceGrid.innerHTML += `
            <div class="resource-card">
                <span class="res-type">${res.type}</span>
                <h3 class="res-title">${res.title}</h3>
                <p class="res-category">Topic: ${res.category}</p>
                <a href="${res.url}" class="res-link" target="_blank">Access Resource ➔</a>
            </div>
        `;
    });
}
// Execute Boot
initApp();