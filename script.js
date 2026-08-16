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