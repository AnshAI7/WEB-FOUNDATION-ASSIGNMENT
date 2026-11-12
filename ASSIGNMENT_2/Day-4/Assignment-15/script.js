// 1. Storing data using different JavaScript Data Types

// STRING (Text)
const studentName = "Ansh Mishra";
const university = "Invertis University";

// NUMBER (Integers or Decimals)
let currentSemester = 3;
let gpa = 3.8;

// BOOLEAN (True or False)
const isCurrentlyEnrolled = true;

// ARRAY (A list of multiple items)
const technicalSkills = ["HTML", "CSS", "JavaScript", "Python", "Java"];

// OBJECT (A collection of key-value pairs)
const contactInfo = {
    email: "ansh87374@gmail.com",
    phone: "+91-6395400297",
    location: "Bareilly, UP"
};

// 2. Logging the variables to the Developer Console
console.log("--- Raw Student Data ---");
console.log("Name (String):", studentName);
console.log("Semester (Number):", currentSemester);
console.log("Enrolled? (Boolean):", isCurrentlyEnrolled);
console.log("Skills (Array):", technicalSkills);
console.log("Contact (Object):", contactInfo);
console.log("------------------------");

// 3. Displaying the Data on the HTML Page
// Find the div we created in HTML
const container = document.getElementById("profile-container");

// Determine status text based on the boolean variable
const enrollmentStatus = isCurrentlyEnrolled 
    ? '<span class="status-active">Active</span>' 
    : '<span class="status-inactive">Inactive</span>';

// Create a chunk of HTML using Template Literals (backticks)
const htmlOutput = `
    <div class="student-card">
        <h2>${studentName}'s Profile</h2>
        <ul>
            <li><strong>University:</strong> ${university}</li>
            <li><strong>Semester:</strong> ${currentSemester}</li>
            <li><strong>GPA:</strong> ${gpa}</li>
            <li><strong>Status:</strong> ${enrollmentStatus}</li>
            <li><strong>Top Skills:</strong> ${technicalSkills.join(", ")}</li>
            <li><strong>Email:</strong> ${contactInfo.email}</li>
        </ul>
    </div>
`;

// Inject the HTML string into the container
container.innerHTML = htmlOutput;