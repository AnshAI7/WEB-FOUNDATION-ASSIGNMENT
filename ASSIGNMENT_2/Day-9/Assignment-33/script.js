// We use 'async' because fetching a file takes time (it doesn't happen instantly)
async function fetchCatalogue() {
    const outputBox = document.getElementById("json-output");
    const statusBadge = document.getElementById("status-badge");

    try {
        // 1. Initiate the network request for the file
        outputBox.innerText = "Loading data...";
        const response = await fetch("catalogue.json");

        // 2. Check if the file was found successfully
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 3. Parse the JSON text into a real JavaScript Array of Objects
        const data = await response.json();

        // 4. Update the UI to show success
        statusBadge.innerText = "Valid JSON Loaded";
        statusBadge.className = "badge success";
        
        // 5. Display the parsed data on screen
        outputBox.innerText = JSON.stringify(data, null, 4);

    } catch (error) {
        // 6. Handle any errors (like file not found, or invalid JSON syntax)
        statusBadge.innerText = "Validation Failed";
        statusBadge.className = "badge error";
        outputBox.innerText = `Error: ${error.message}\n\nPlease check your console or ensure you are running a local server.`;
        console.error("Fetch error:", error);
    }
}