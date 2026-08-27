function filterProducts(category, button) {

    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    products.forEach(product => {

        const categories = product.dataset.category || "";

        if (category === "all" || categories.includes(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


// ==============================
// SIZE SELECTION
// ==============================

function selectSize(button) {

    const productCard = button.closest(".product-card");

    const sizeButtons = productCard.querySelectorAll(".sizes button");

    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    productCard.dataset.selectedSize = button.textContent.trim();
}


// ==============================
// WHATSAPP ORDER
// ==============================

function orderProduct(button) {

    const productCard = button.closest(".product-card");

    const selectedSize = productCard.dataset.selectedSize;

    const product = button.dataset.product;
    const price = button.dataset.price;

    if (!selectedSize) {

        alert("Please select your size first.");

        return;
    }

    const message =
        "Hello HaroonX Fashion!%0A%0A" +
        "I want to place an order.%0A%0A" +
        "Product: " + product + "%0A" +
        "Price: " + price + "%0A" +
        "Size: " + selectedSize;

    const whatsappURL =
        "https://wa.me/923295544103?text=" + message;

    window.open(whatsappURL, "_blank");
}


// ==============================
// PROFESSIONAL PRODUCT DETAILS
// ==============================

function showProductDetails(button) {

   const productCard = button.closest(".product-card, .best-seller-card");
    const product = button.dataset.product;
    const price = button.dataset.price;
    const description = button.dataset.description;

    const imageElement = productCard.querySelector(".product-image img");

    const image = imageElement ? imageElement.src : "";

    // Remove old popup if already open
    const oldModal = document.querySelector(".product-modal");

    if (oldModal) {
        oldModal.remove();
    }

    // Create modal
    const modal = document.createElement("div");

    modal.className = "product-modal";

    modal.innerHTML = `

        <div class="product-modal-content">

            <button class="modal-close" onclick="closeProductModal()">
                &times;
            </button>

            <div class="modal-image">

                <img src="${image}" alt="${product}">

            </div>

            <div class="modal-info">

                <p class="modal-category">
                    HAROONX FASHION
                </p>

                <h2>
                    ${product}
                </h2>

                <p class="modal-description">
                    ${description}
                </p>

                <div class="modal-price">
                    ${price}
                </div>

                <div class="modal-sizes">

                    <span>Select Size:</span>

                    <div class="modal-size-buttons">

                        <button onclick="selectModalSize(this, 'S')">S</button>
                        <button onclick="selectModalSize(this, 'M')">M</button>
                        <button onclick="selectModalSize(this, 'L')">L</button>
                        <button onclick="selectModalSize(this, 'XL')">XL</button>
                        <button onclick="selectModalSize(this, 'XXL')">XXL</button>

                    </div>

                </div>

                <button
                    class="modal-order-btn"
                    onclick="orderFromModal()">

                    <i class="fa-brands fa-whatsapp"></i>
                    Order on WhatsApp

                </button>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    // Store current product information
    modal.dataset.product = product;
    modal.dataset.price = price;

    // Open animation
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);

}


// ==============================
// MODAL SIZE
// ==============================

function selectModalSize(button, size) {

    const buttons = document.querySelectorAll(".modal-size-buttons button");

    buttons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    const modal = document.querySelector(".product-modal");

    modal.dataset.selectedSize = size;
}


// ==============================
// MODAL WHATSAPP ORDER
// ==============================

function orderFromModal() {

    const modal = document.querySelector(".product-modal");

    const selectedSize = modal.dataset.selectedSize;

    const product = modal.dataset.product;

    const price = modal.dataset.price;

    if (!selectedSize) {

        alert("Please select your size first.");

        return;
    }

    const message =
        "Hello HaroonX Fashion!%0A%0A" +
        "I want to place an order.%0A%0A" +
        "Product: " + product + "%0A" +
        "Price: " + price + "%0A" +
        "Size: " + selectedSize;

    const whatsappURL =
        "https://wa.me/923295544103?text=" + message;

    window.open(whatsappURL, "_blank");

}


// ==============================
// CLOSE MODAL
// ==============================

function closeProductModal() {

    const modal = document.querySelector(".product-modal");

    if (modal) {

        modal.classList.remove("show");

        setTimeout(function() {
            modal.remove();
        }, 300);

    }

}


// Close when clicking outside popup
document.addEventListener("click", function(event) {

    const modal = document.querySelector(".product-modal");

    if (
        modal &&
        event.target === modal
    ) {
        closeProductModal();
    }

});


// Close popup with ESC key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProductModal();
    }

});

function subscribeNewsletter(event) {

    event.preventDefault();

    const email = document
        .getElementById("newsletter-email")
        .value;

    alert(
        "Thank you for subscribing! 🎉\n\n" +
        "We will send fashion updates to:\n" +
        email
    );

    document.getElementById("newsletter-email").value = "";
}

   // =========================
// MOBILE HAMBURGER MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Menu link par click karne ke baad menu close
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
