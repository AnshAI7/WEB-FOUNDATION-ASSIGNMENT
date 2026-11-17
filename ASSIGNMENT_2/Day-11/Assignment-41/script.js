// 1. Select the necessary DOM elements
const form = document.getElementById("add-item-form");
const inputField = document.getElementById("item-input");
const readingList = document.getElementById("reading-list");
const errorMsg = document.getElementById("error-msg");

// 2. Listen for the Form Submit Event
form.addEventListener("submit", function(event) {
    // CRITICAL: Prevent the browser from refreshing the page on submit
    event.preventDefault();

    // Grab the text the user typed and remove accidental outer spaces
    const itemText = inputField.value.trim();

    // 3. Validation (Guard Clause)
    if (itemText === "") {
        errorMsg.classList.remove("hidden");
        return; // Stop execution
    }
    
    // Hide error message if validation passes
    errorMsg.classList.add("hidden");

    // 4. Create the new HTML elements from scratch
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");

    const textSpan = document.createElement("span");
    textSpan.classList.add("item-text");
    textSpan.innerText = itemText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-delete");
    deleteBtn.innerText = "Remove";

    // 5. Add functionality to the Delete Button
    deleteBtn.addEventListener("click", function() {
        // When clicked, remove the specific <li> from the DOM entirely
        newListItem.remove();
    });

    // 6. Assemble the pieces
    // Put the text and the button inside the <li>
    newListItem.appendChild(textSpan);
    newListItem.appendChild(deleteBtn);

    // Put the fully assembled <li> inside the <ul> on the page
    readingList.appendChild(newListItem);

    // 7. Clear the input field for the next entry
    inputField.value = "";
});