document.addEventListener('DOMContentLoaded', function () {
    // Lấy phần tử input và các biểu tượng tăng/giảm
    var quantityInput = document.getElementById('quantity');
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', function () {
        quantityInput.value = parseInt(quantityInput.value, 10) + 1;
    });

    decrementButton.addEventListener('click', function () {
        quantityInput.value = Math.max(parseInt(quantityInput.value, 10) - 1, 1);
    });
});