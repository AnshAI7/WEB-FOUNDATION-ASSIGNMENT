# Day 9 Practical Submission: The Document Object Model (DOM)
**Student:** Ansh Mishra  
**University:** Invertis University (BCA - AI, 3rd Semester)  
**Topics Covered:** DOM Selection Methods, HTMLCollections, NodeLists, and Tree Traversal.

## Part 1: DOM Selection Mapping

The following selection strategies were implemented and verified in the DOM Selection Challenge (Assignment 36).

| Selection Method | Return Type | Use Case Demonstrated | Status |
| :--- | :--- | :--- | :--- |
| `getElementById()` | Single Element | Targeted a unique `#boss-target` div. | ✅ PASS |
| `getElementsByClassName()` | HTMLCollection | Targeted multiple `.minion-target` divs. Required a `for` loop to iterate and apply styles. | ✅ PASS |
| `getElementsByTagName()` | HTMLCollection | Targeted all `<article>` tags globally across the document. | ✅ PASS |
| `querySelector()` | Single Element | Targeted the *first* instance of `.gold-coin`, proving its execution stops after one match. | ✅ PASS |
| `querySelectorAll()` | NodeList | Used complex CSS syntax (`.treasure-chest .gold-coin`) to target specific nested elements. | ✅ PASS |

## Part 2: DOM Traversal (Tree Relationships)

The following traversal logic was implemented in the Interactive Node Explorer (Assignment 35).

1. **Target Identification (`this`):** Successfully captured the exact node clicked using event propagation handling.
2. **Parent Nodes (`parentElement`):** Successfully traversed *up* the DOM tree to locate the immediate wrapper of the target node.
3. **Child Nodes (`children`):** Successfully traversed *down* the DOM tree, capturing all immediate descendants as an iterable HTMLCollection.
4. **Sibling Nodes:** Successfully calculated siblings by traversing up to the `parentElement`, accessing all of its `children`, and algorithmically excluding the original target node from the highlight array.

---

## Part 3: Technical Reflection

**1. HTMLCollections vs. Single Elements**
A critical learning point from this module was the difference between targeting an ID versus a Class. Because IDs are strictly unique, `getElementById` returns a singular, manipulatable object. However, `getElementsByClassName` returns an `HTMLCollection`. You cannot directly apply a style to an HTMLCollection (e.g., `minions.style.color = "red"` will fail). You must treat it like a JavaScript Array and use a `for` loop to apply the change to each individual item.

**2. The Power of querySelector**
While `getElementById` is fast, `querySelectorAll` is incredibly powerful because it accepts standard CSS syntax. This bridges the gap between CSS styling and JavaScript logic, allowing me to target elements based on complex parent-child relationships without having to assign unique IDs to every single element in my HTML document.