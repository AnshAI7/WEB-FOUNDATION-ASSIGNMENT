// Helper Function to clear the board before running a new selector
function clearHighlights() {
    // querySelectorAll is the most powerful tool. It grabs EVERYTHING matching the class.
    const highlightedElements = document.querySelectorAll('.highlight');
    
    // We must loop through NodeLists to edit them
    for (let i = 0; i < highlightedElements.length; i++) {
        highlightedElements[i].classList.remove('highlight');
    }
}

// 1. SELECT BY ID
function selectById() {
    clearHighlights();
    // Returns a SINGLE element (IDs must be unique)
    const boss = document.getElementById('boss-target');
    boss.classList.add('highlight');
}

// 2. SELECT BY CLASS NAME
function selectByClass() {
    clearHighlights();
    // Returns an HTMLCollection (Array-like list) of elements
    const minions = document.getElementsByClassName('minion-target');
    
    // Because it's a list, we MUST use a loop to add the class to each one
    for (let i = 0; i < minions.length; i++) {
        minions[i].classList.add('highlight');
    }
}

// 3. SELECT BY TAG NAME
function selectByTag() {
    clearHighlights();
    // Returns an HTMLCollection of all <article> tags
    const articles = document.getElementsByTagName('article');
    
    for (let i = 0; i < articles.length; i++) {
        articles[i].classList.add('highlight');
    }
}

// 4. QUERY SELECTOR (Single)
function selectQuerySingle() {
    clearHighlights();
    // querySelector accepts CSS rules. It stops and returns ONLY the FIRST match it finds.
    // This finds the first .gold-coin inside the whole document.
    const firstCoin = document.querySelector('.gold-coin');
    firstCoin.classList.add('highlight');
}

// 5. QUERY SELECTOR ALL (Complex)
function selectQueryAll() {
    clearHighlights();
    // querySelectorAll accepts complex CSS rules and returns a NodeList of ALL matches.
    // Rule: Find elements with class "gold-coin" ONLY if they are inside a "treasure-chest".
    const safeCoins = document.querySelectorAll('.treasure-chest .gold-coin');
    
    for (let i = 0; i < safeCoins.length; i++) {
        safeCoins[i].classList.add('highlight');
    }
}