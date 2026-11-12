/* 
=========================================================
THE GUARD CLAUSE PATTERN
Notice how we DO NOT use deep "if / else if / else" trees.
We test for failures first, and immediately "return" out 
of the function. The final line is the "Happy Path".
=========================================================
*/

function validateUsername(username) {
    if (username === "") return "Username cannot be empty.";
    if (username.length < 3) return "Username must be at least 3 characters long.";
    if (username.includes(" ")) return "Username cannot contain spaces.";
    
    return "Valid"; // The Happy Path
}

function validateAge(ageValue) {
    if (ageValue === "") return "Age is required.";
    
    const age = parseInt(ageValue);
    
    if (isNaN(age)) return "Age must be a valid number.";
    if (age < 18) return "You must be at least 18 years old to register.";
    if (age > 120) return "Please enter a realistic age.";
    
    return "Valid";
}

function validatePassword(password) {
    if (password === "") return "Password cannot be empty.";
    if (password.length < 8) return "Password must be at least 8 characters long.";
    
    return "Valid";
}