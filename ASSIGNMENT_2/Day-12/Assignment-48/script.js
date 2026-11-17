// The Data: Explanations for every step of the lifecycle
const lifecycleSteps = [
    {
        title: "1. LOAD (Hydration)",
        desc: "The app opens. JavaScript immediately reads the JSON string from localStorage and parses it into a living JS Array.",
        activeNode: "node-load",
        activeArrow: "arrow-1"
    },
    {
        title: "2. RENDER (State to UI)",
        desc: "A render function clears the screen, loops through the JS Array, and draws HTML for every item. The DOM is a reflection of state.",
        activeNode: "node-render",
        activeArrow: "arrow-2" // Note: we skip highlighting State directly here for flow simplicity, but both arrow 1 and 2 represent this flow.
    },
    {
        title: "3. UPDATE (User Action)",
        desc: "The user clicks a button. The Event Listener fires. It does NOT touch the HTML. Instead, it mutates the JS Array.",
        activeNode: "node-update",
        activeArrow: "arrow-3"
    },
    {
        title: "4. SAVE (Persistence)",
        desc: "Immediately after the Array is mutated, the new Array is stringified and saved back into localStorage.",
        activeNode: "node-load", // Back to storage
        activeArrow: "arrow-1"
    }
];

let currentStep = -1;

const btnNext = document.getElementById("btn-next");
const stepTitle = document.getElementById("step-title");
const stepDesc = document.getElementById("step-desc");

function clearHighlights() {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('is-active'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('arrow-active'));
    
    // We always keep the State array highlighted because it is the central brain
    document.getElementById("node-state").classList.add("is-active");
}

btnNext.addEventListener("click", function() {
    currentStep++;
    
    // Loop back to the beginning if we hit the end
    if (currentStep >= lifecycleSteps.length) {
        currentStep = 0; 
    }

    const stepData = lifecycleSteps[currentStep];

    // Update Text
    stepTitle.innerText = stepData.title;
    stepDesc.innerText = stepData.desc;
    btnNext.innerText = "Next Step ➔";

    // Update UI Glows
    clearHighlights();
    document.getElementById(stepData.activeNode).classList.add("is-active");
    if (stepData.activeArrow) {
        document.getElementById(stepData.activeArrow).classList.add("arrow-active");
    }
});

// Initialize State Node as active by default
document.getElementById("node-state").classList.add("is-active");