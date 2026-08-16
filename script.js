function filterProducts(category, button) {

    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    products.forEach(product => {

        const categories = product.dataset.category;

        if (category === "all" || categories.includes(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}
   
      function selectSize(button) {

    const productCard = button.closest(".product-card");

    const sizeButtons = productCard.querySelectorAll(".sizes button");

    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    productCard.dataset.selectedSize = button.textContent.trim();
}


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
