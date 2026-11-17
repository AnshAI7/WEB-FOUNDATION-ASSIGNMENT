// 1. The Data Payload (An Array of Objects)
const projectData = [
    {
        id: 1,
        title: "Iris Flower Classification",
        category: "Machine Learning",
        description: "Predictive classification model utilizing Python, Streamlit, and Random Forest algorithms.",
        icon: "🌸",
        linkText: "View Model"
    },
    {
        id: 2,
        title: "E-Commerce Analytics Engine",
        category: "Data Science",
        description: "Sales and customer metric structuring utilizing Pandas, NumPy, and Matplotlib over a 10,000+ row dataset.",
        icon: "📊",
        linkText: "View Analysis"
    },
    {
        id: 3,
        title: "FluentEdge AI Agent",
        category: "Automation",
        description: "Automated multimodal agent integrated with Playwright and LLM APIs to handle interactive web coursework.",
        icon: "🤖",
        linkText: "View Architecture"
    }
];

// 2. The Reusable Rendering Function
function renderProjectCards(dataArray, targetElementId) {
    const container = document.getElementById(targetElementId);
    
    // Clear out anything currently inside the container to prevent duplicates
    container.innerHTML = "";

    // We will build one massive string of HTML in this variable
    let generatedHTML = "";

    // Iterate through the array
    for (let i = 0; i < dataArray.length; i++) {
        const project = dataArray[i];

        // Use Template Literals (``) to inject the object properties directly into the HTML structure
        generatedHTML += `
            <article class="project-card">
                <div class="card-icon">${project.icon}</div>
                <span class="card-category">${project.category}</span>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.description}</p>
                <button class="card-btn" onclick="alert('Navigating to: ${project.title}')">
                    ${project.linkText}
                </button>
            </article>
        `;
    }

    // Finally, inject the massive HTML string into the actual DOM
    container.innerHTML = generatedHTML;
}

// 3. Execute the function as soon as the file loads
renderProjectCards(projectData, "portfolio-grid");