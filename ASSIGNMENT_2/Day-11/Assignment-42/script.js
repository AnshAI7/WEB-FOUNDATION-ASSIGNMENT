// 1. Select the Major Views
const formView = document.getElementById("form-view");
const summaryView = document.getElementById("summary-view");
const contactForm = document.getElementById("contact-form");

// 2. Form Submission Logic
contactForm.addEventListener("submit", function(event) {
    // CRITICAL: Stop the page from reloading
    event.preventDefault();

    // Grab the values typed by the user
    const nameVal = document.getElementById("fullName").value;
    const emailVal = document.getElementById("emailAddr").value;
    const subjectVal = document.getElementById("subject").value;
    const messageVal = document.getElementById("message").value;

    // Inject those values into the empty summary spans
    document.getElementById("out-name").innerText = nameVal;
    document.getElementById("out-email").innerText = emailVal;
    document.getElementById("out-subject").innerText = subjectVal;
    document.getElementById("out-message").innerText = messageVal;

    // Toggle the views: Hide the form, Show the summary
    formView.classList.add("hidden");
    summaryView.classList.remove("hidden");
});

// 3. Reset Logic (Allowing the user to send another message)
document.getElementById("btn-reset").addEventListener("click", function() {
    // Reset the actual form fields back to blank
    contactForm.reset();

    // Swap the views back
    summaryView.classList.add("hidden");
    formView.classList.remove("hidden");
});