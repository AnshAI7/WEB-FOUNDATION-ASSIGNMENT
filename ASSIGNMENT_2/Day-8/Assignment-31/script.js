/* =========================================================
   THE SHOPPING CART OBJECT
   This object stores its own data (items) AND has its own 
   functions (methods) to interact with that data.
========================================================= */

const shoppingCart = {
    // 1. Object Properties (State)
    items: [],
    taxRate: 0.08, // 8% tax

    // 2. Object Method: Add Item
    addItem: function(name, price, quantity) {
        // Validation Guard Clauses
        if (quantity <= 0) {
            return { success: false, message: "Quantity must be at least 1." };
        }
        if (price < 0) {
            return { success: false, message: "Price cannot be negative." };
        }
        if (name.trim() === "") {
            return { success: false, message: "Product name is required." };
        }

        // We use 'this' to refer to the object's own properties
        this.items.push({ 
            name: name, 
            price: price, 
            quantity: quantity 
        });

        return { success: true, message: "Item added." };
    },

    // 3. Object Method: Calculate Subtotal
    getSubtotal: function() {
        let total = 0;
        // Loop through the items array inside this object
        for (let i = 0; i < this.items.length; i++) {
            total += (this.items[i].price * this.items[i].quantity);
        }
        return total;
    },

    // 4. Object Method: Calculate Grand Total
    getGrandTotal: function() {
        // A method calling another method using 'this'
        const subtotal = this.getSubtotal();
        const taxAmount = subtotal * this.taxRate;
        return subtotal + taxAmount;
    }
};


/* =========================================================
   UI HANDLER (Connects DOM to Object)
========================================================= */

function handleAddToCart() {
    // 1. Get raw values
    const nameVal = document.getElementById("prod-name").value;
    const priceVal = parseFloat(document.getElementById("prod-price").value);
    const qtyVal = parseInt(document.getElementById("prod-qty").value);

    // 2. Pass values into the object's method
    const result = shoppingCart.addItem(nameVal, priceVal, qtyVal);

    // 3. Handle validation results
    const errorBox = document.getElementById("error-msg");
    if (result.success === false) {
        errorBox.innerText = result.message;
        errorBox.classList.remove("hidden");
        return; // Stop execution if validation failed
    }

    // 4. If successful, hide errors and update UI
    errorBox.classList.add("hidden");
    renderCart();
}

function renderCart() {
    const listElement = document.getElementById("cart-list");
    listElement.innerHTML = ""; // Clear current list

    // Render items list
    for (let i = 0; i < shoppingCart.items.length; i++) {
        const item = shoppingCart.items[i];
        const lineTotal = item.price * item.quantity;
        
        listElement.innerHTML += `
            <li>
                <span>${item.quantity}x ${item.name}</span>
                <strong>$${lineTotal.toFixed(2)}</strong>
            </li>
        `;
    }

    // Render totals by calling the object's calculation methods
    const subtotal = shoppingCart.getSubtotal();
    const tax = subtotal * shoppingCart.taxRate;
    const grand = shoppingCart.getGrandTotal();

    document.getElementById("subtotal-display").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax-display").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("grand-display").innerText = `$${grand.toFixed(2)}`;
}