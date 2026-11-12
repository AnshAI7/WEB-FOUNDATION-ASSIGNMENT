/* 
=========================================================
UTILITY 1: Merge Settings
Takes two objects. Uses the Spread Operator (...) to 
combine them. If properties clash, the second object 
overwrites the first one.
=========================================================
*/
function mergeSettings(defaultConfig, userConfig) {
    // The "..." expands the objects. User settings overwrite default settings.
    return { ...defaultConfig, ...userConfig };
}


/* 
=========================================================
UTILITY 2: Calculate Totals
Takes an array of numbers and loops through them to 
return the final sum.
=========================================================
*/
function calculateTotal(priceArray) {
    let sum = 0;
    for (let i = 0; i < priceArray.length; i++) {
        // Guard Clause to skip anything that isn't a valid number
        if (!isNaN(priceArray[i])) {
            sum += priceArray[i];
        }
    }
    return sum;
}