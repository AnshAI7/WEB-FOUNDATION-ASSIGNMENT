// Function to reveal the answers when the user clicks the button
function revealAnswer(questionNumber) {
    // Dynamically target the specific answer box using the passed number
    const answerBox = document.getElementById(`answer-${questionNumber}`);
    
    // Toggle the "hidden" class to show the explanation
    answerBox.classList.remove("hidden");
    
    // Optional: We can change the button text to show it was clicked
    const button = answerBox.previousElementSibling;
    button.innerText = "Explanation Revealed";
    button.style.backgroundColor = "#e2e8f0";
    button.style.color = "#64748b";
    button.style.cursor = "default";
}