function calculateTotal() {
    console.log("--- Debugging Session Started ---");

    // 1. Grab the raw values from the HTML inputs
    const rawApples = document.getElementById("applesInput").value;
    const rawOranges = document.getElementById("orangesInput").value;

    /* 
    ========================================================
    THE BUG:
    If we did this: let buggyTotal = rawApples + rawOranges;
    The browser thinks we are pushing two words together.
    10 + 5 becomes "105". 
    ========================================================
    */

    // Let's prove the bug exists by checking the data type!
    console.log("Type of rawApples is:", typeof rawApples, `(Value: "${rawApples}")`);
    console.log("Type of rawOranges is:", typeof rawOranges, `(Value: "${rawOranges}")`);

    // 2. THE FIX: Convert the string text into actual mathematical numbers
    const fixedApples = parseInt(rawApples);
    const fixedOranges = parseInt(rawOranges);

    // Let's prove the fix worked in the console
    console.log("After parseInt(), type is:", typeof fixedApples, `(Value: ${fixedApples})`);

    // 3. Perform the correct mathematical addition
    const correctTotal = fixedApples + fixedOranges;

    console.log("Correct Calculated Total:", correctTotal);
    console.log("--- Debugging Session Ended ---");

    // 4. Output the fixed result to the screen
    document.getElementById("final-output").innerText = `Total Boxes: ${correctTotal}`;
}