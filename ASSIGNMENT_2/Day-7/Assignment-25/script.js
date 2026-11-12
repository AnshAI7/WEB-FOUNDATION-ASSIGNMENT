// 1. The Core Data Structure (The Array)
let shoppingList = [];

// 2. String Utility Function
// Cleans user input: removes spaces and capitalizes the first letter
function formatString(rawText) {
    // .trim() removes spaces at the start and end
    const cleanText = rawText.trim(); 
    
    if (cleanText === "") return "";

    // Make the first letter uppercase, and the rest lowercase
    return cleanText.charAt(0).toUpperCase() + cleanText.slice(1).toLowerCase();
}

// 3. Add Item Logic
function handleAddItem() {
    const inputField = document.getElementById("itemInput");
    const formattedItem = formatString(inputField.value);

    // Guard Clause: Don't add empty items
    if (formattedItem === "") {
        alert("Please type an item name.");
        return;
    }

    // Guard Clause: Prevent duplicates
    if (shoppingList.includes(formattedItem)) {
        alert("This item is already on your list!");
        return;
    }

    // ARRAY METHOD: Add to the end of the array
    shoppingList.push(formattedItem);
    
    inputField.value = ""; // Clear the input box
    updateUI();
}

// 4. Remove Item Logic
function handleRemoveItem() {
    const inputField = document.getElementById("itemInput");
    const formattedItem = formatString(inputField.value);

    if (formattedItem === "") {
        alert("Please type the name of the item you want to remove.");
        return;
    }

    // ARRAY METHOD: Find the index of the item
    const itemIndex = shoppingList.indexOf(formattedItem);

    // indexOf returns -1 if the item does not exist in the array
    if (itemIndex === -1) {
        alert("Item not found in the list.");
        return;
    }

    // ARRAY METHOD: Remove 1 item at the specific index
    shoppingList.splice(itemIndex, 1);
    
    inputField.value = "";
    updateUI();
}

// 5. Update the DOM and Console
function updateUI() {
    // Fulfill the "console-based" requirement by logging the raw array
    console.log("Current Array State:", shoppingList);

    const listElement = document.getElementById("shopping-list-display");
    const countElement = document.getElementById("item-count");
    
    // Clear the current HTML list
    listElement.innerHTML = "";

    // Check if empty
    if (shoppingList.length === 0) {
        listElement.innerHTML = '<li class="empty-msg">Your list is currently empty.</li>';
        countElement.innerText = "0";
        return;
    }

    // ARRAY METHOD: Loop through the array to build the HTML list
    for (let i = 0; i < shoppingList.length; i++) {
        listElement.innerHTML += `<li>${shoppingList[i]}</li>`;
    }

    // Update the counter
    countElement.innerText = shoppingList.length;
}