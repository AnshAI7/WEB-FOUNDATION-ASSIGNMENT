// --- DOM Helper Functions ---
// These functions help us easily write to our HTML terminal screen

function printLine(text) {
    const screen = document.getElementById("output-screen");
    
    // If the screen just says "Ready to execute...", clear it first
    if (screen.innerHTML === "Ready to execute...") {
        screen.innerHTML = "";
    }
    
    // Append the new text followed by a line break
    screen.innerHTML += text + "<br>";
    
    // Auto-scroll to the bottom of the terminal
    screen.scrollTop = screen.scrollHeight;
}

function clearScreen() {
    document.getElementById("output-screen").innerHTML = "Ready to execute...";
}

// --- Loop Algorithm Tasks ---

// Task 1: Print numbers 1 through 10 using a FOR loop
function runTask1() {
    clearScreen();
    printLine("=== Executing Task 1 ===");
    printLine("Counting from 1 to 10...");
    
    for (let i = 1; i <= 10; i++) {
        printLine(`Number: ${i}`);
    }
    
    printLine("Task 1 Complete.");
}

// Task 2: Calculate the sum of 1 to 50 using a WHILE loop
function runTask2() {
    clearScreen();
    printLine("=== Executing Task 2 ===");
    printLine("Calculating sum of 1 through 50...");
    
    let sum = 0;
    let currentNumber = 1;
    
    while (currentNumber <= 50) {
        sum += currentNumber; // Add current number to total sum
        currentNumber++;      // Increment to prevent infinite loop
    }
    
    printLine(`Final Sum is: ${sum}`);
    printLine("Task 2 Complete.");
}

// Task 3: Generate a multiplication table using a FOR loop
function runTask3() {
    clearScreen();
    printLine("=== Executing Task 3 ===");
    printLine("Multiplication Table for 5:");
    
    const multiplier = 5;
    
    for (let i = 1; i <= 10; i++) {
        const result = multiplier * i;
        printLine(`${multiplier} x ${i} = ${result}`);
    }
    
    printLine("Task 3 Complete.");
}