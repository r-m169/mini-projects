document.addEventListener("DOMContentLoaded", function () {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const quantityInput = document.getElementById("quantity");
    let quantity = 1;
    
    // Increment button click event
    incrementButton.addEventListener("click", function () {
        if (quantity < 9) {
            quantity++;
            quantityInput.value = quantity;
        }
    });

    // Decrement button click event
    decrementButton.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });
});
