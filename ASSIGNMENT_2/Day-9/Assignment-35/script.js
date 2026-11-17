// Grab all elements inside the mock document that have the 'inspectable' class
const allNodes = document.querySelectorAll('.inspectable');

// Add a click listener to every single inspectable element
allNodes.forEach(function(node) {
    node.addEventListener('click', function(event) {
        // Stop the click from bubbling up to the parent elements
        event.stopPropagation();
        
        // 1. Clear all old highlights before applying new ones
        resetInspector();

        // 2. Identify the Target (the exact element that was clicked)
        const targetNode = this;
        targetNode.classList.add('is-target');
        updateLabel('label-target', targetNode.tagName);

        // 3. Identify the Parent (.parentElement)
        const parentNode = targetNode.parentElement;
        // Don't highlight the body or the outer container if we click too high up
        if (parentNode && parentNode.classList.contains('inspectable')) {
            parentNode.classList.add('is-parent');
            updateLabel('label-parent', parentNode.tagName);
        }

        // 4. Identify the Children (.children returns an HTMLCollection)
        const childNodes = targetNode.children;
        let childTags = [];
        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].classList.contains('inspectable')) {
                childNodes[i].classList.add('is-child');
                childTags.push(childNodes[i].tagName);
            }
        }
        updateLabel('label-children', childTags.length > 0 ? childTags.join(', ') : "None");

        // 5. Identify the Siblings
        // Siblings are children of the SAME parent, excluding the target itself
        if (parentNode) {
            const allSiblings = parentNode.children;
            let siblingTags = [];
            
            for (let i = 0; i < allSiblings.length; i++) {
                const currentSibling = allSiblings[i];
                // If it is NOT the target node, it is a sibling
                if (currentSibling !== targetNode && currentSibling.classList.contains('inspectable')) {
                    currentSibling.classList.add('is-sibling');
                    siblingTags.push(currentSibling.tagName);
                }
            }
            updateLabel('label-siblings', siblingTags.length > 0 ? siblingTags.join(', ') : "None");
        }
    });
});

// Helper function to update the text in the legend panel
function updateLabel(elementId, text) {
    document.getElementById(elementId).innerText = `<${text.toLowerCase()}>`;
    if (text === "None") {
        document.getElementById(elementId).innerText = "None";
    }
}

// Clears all CSS highlight classes and resets the legend text
function resetInspector() {
    allNodes.forEach(function(node) {
        node.classList.remove('is-target', 'is-parent', 'is-child', 'is-sibling');
    });

    document.getElementById('label-target').innerText = "None selected";
    document.getElementById('label-parent').innerText = "None selected";
    document.getElementById('label-siblings').innerText = "None selected";
    document.getElementById('label-children').innerText = "None selected";
}