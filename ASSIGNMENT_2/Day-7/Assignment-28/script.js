// --- PROBLEM 1: Reverse a String ---
function solveReverse() {
    const rawInput = document.getElementById("p1-input").value;
    
    if (rawInput === "") return;

    // 1. split('') turns "Ansh" into ["A", "n", "s", "h"]
    // 2. reverse() turns it into ["h", "s", "n", "A"]
    // 3. join('') turns it back into "hsnA"
    const reversedString = rawInput.split("").reverse().join("");
    
    document.getElementById("p1-output").innerText = reversedString;
}

// --- PROBLEM 2: Find Longest Word ---
function solveLongest() {
    const sentence = document.getElementById("p2-input").value;
    
    if (sentence === "") return;

    // Split the sentence by spaces to get an array of words
    const wordsArray = sentence.split(" ");
    let longestWord = "";

    // Loop through the array
    for (let i = 0; i < wordsArray.length; i++) {
        // If the current word is longer than our saved longestWord, update it
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }

    document.getElementById("p2-output").innerText = longestWord;
}

// --- PROBLEM 3: Remove Duplicates ---
function solveDuplicates() {
    const rawInput = document.getElementById("p3-input").value;
    
    if (rawInput === "") return;

    // Split the comma-separated string into an array, and trim spaces from each item
    const rawArray = rawInput.split(",").map(function(item) {
        return item.trim();
    });

    // Use filter and indexOf to keep only the first instance of every item
    const uniqueArray = rawArray.filter(function(item, index) {
        // indexOf always returns the position of the FIRST time it sees an item.
        // If the current index matches the first-seen index, it's unique.
        return rawArray.indexOf(item) === index;
    });

    // Join the clean array back into a readable string
    document.getElementById("p3-output").innerText = uniqueArray.join(", ");
}