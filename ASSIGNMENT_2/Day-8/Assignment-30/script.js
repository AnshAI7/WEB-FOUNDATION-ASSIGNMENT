// 1. Create the Complex Product Object
const product = {
    id: "TECH-4K-900",
    name: "ProVision Ultra 4K Designer Monitor",
    brand: "VisionTech",
    price: 499.99,
    description: "Experience unparalleled color accuracy and crisp resolutions with the ProVision Ultra. Designed specifically for software engineers and digital artists.",
    inStock: true,
    
    // NESTED OBJECT: Grouping related properties together
    specifications: {
        screenSize: "27 inches",
        resolution: "3840 x 2160",
        refreshRate: "144Hz",
        panelType: "IPS",
        ports: "2x HDMI, 1x DisplayPort, 1x USB-C"
    },
    
    // NESTED ARRAY OF OBJECTS: A list of complex items
    reviews: [
        { user: "Alice M.", rating: 5, text: "Absolutely stunning clarity. Perfect for VS Code!" },
        { user: "David K.", rating: 4, text: "Great monitor, but the stand takes up too much desk space." }
    ]
};

// 2. Render Function (Injecting Object Data into HTML)
function renderProduct() {
    // Basic Primitive Data
    document.getElementById("prod-brand").innerText = product.brand;
    document.getElementById("prod-name").innerText = product.name;
    document.getElementById("prod-price").innerText = `$${product.price.toFixed(2)}`;
    document.getElementById("prod-desc").innerText = product.description;

    // Handling Booleans (Stock Status)
    const stockEl = document.getElementById("prod-stock");
    if (product.inStock) {
        stockEl.innerText = "In Stock";
        stockEl.className = "stock-status in-stock";
    } else {
        stockEl.innerText = "Out of Stock";
        stockEl.className = "stock-status out-of-stock";
    }

    // Accessing Nested Object (Dot Notation)
    const specsList = document.getElementById("prod-specs");
    specsList.innerHTML = `
        <li><strong>Size:</strong> ${product.specifications.screenSize}</li>
        <li><strong>Resolution:</strong> ${product.specifications.resolution}</li>
        <li><strong>Refresh Rate:</strong> ${product.specifications.refreshRate}</li>
        <li><strong>Panel:</strong> ${product.specifications.panelType}</li>
    `;

    // Iterating over a Nested Array of Objects
    const reviewsList = document.getElementById("prod-reviews");
    let reviewsHTML = "";
    
    for (let i = 0; i < product.reviews.length; i++) {
        const currentReview = product.reviews[i];
        reviewsHTML += `
            <div class="review-card">
                <div class="review-header">
                    <span class="reviewer">${currentReview.user}</span>
                    <span class="rating">${currentReview.rating} / 5 ⭐</span>
                </div>
                <p class="review-text">${currentReview.text}</p>
            </div>
        `;
    }
    
    reviewsList.innerHTML = reviewsHTML;
}

// 3. Execute the function when the script loads
renderProduct();