// 1. The Dataset (Array of Objects)
const products = [
    { id: 101, name: "Wireless Mouse", category: "Electronics", price: 25.99, inStock: true },
    { id: 102, name: "Mechanical Keyboard", category: "Electronics", price: 89.99, inStock: false },
    { id: 103, name: "Coffee Mug", category: "Kitchen", price: 12.50, inStock: true },
    { id: 104, name: "Desk Lamp", category: "Office", price: 34.00, inStock: true },
    { id: 105, name: "Ergonomic Chair", category: "Office", price: 199.99, inStock: false }
];

// Display the raw data as soon as the page loads
resetView();

// --- THE TRANSFORMATIONS ---

// Task 1: .map() - Extracting specific data
function extractNames() {
    // Map loops through the array and returns a NEW array based on what you return
    const productNames = products.map(function(product) {
        return product.name;
    });

    updateDisplay("Mapped: Product Names Only", productNames);
}

// Task 2: .filter() - Isolating specific records
function filterInStock() {
    // Filter loops through the array and keeps only items where the condition is true
    const inStockProducts = products.filter(function(product) {
        return product.inStock === true;
    });

    updateDisplay("Filtered: In-Stock Products", inStockProducts);
}

// Task 3: .reduce() - Calculating a grand total
function calculateTotalValue() {
    // Reduce takes a starting total (0) and adds each item's value to it
    const totalInventoryValue = products.reduce(function(currentTotal, product) {
        return currentTotal + product.price;
    }, 0); // 0 is the starting value for currentTotal

    updateDisplay("Reduced: Total Inventory Value", `$${totalInventoryValue.toFixed(2)}`);
}

// --- DOM Helper Functions ---

function resetView() {
    updateDisplay("Raw Dataset", products);
}

function updateDisplay(title, data) {
    document.getElementById("output-title").innerText = title;
    
    // JSON.stringify formats our arrays/objects beautifully for the HTML <pre> tag
    // The 'null, 4' adds 4 spaces of indentation to make it readable
    document.getElementById("data-display").innerText = JSON.stringify(data, null, 4);
}