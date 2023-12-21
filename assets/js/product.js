document.addEventListener("DOMContentLoaded", function() {
    // Lấy số lượng ban đầu từ trường nhập liệu
    var quantity = parseInt(document.querySelector(".product-quantity input.qty").value);
    var selectProduct = document.querySelector(".product-quantity input.qty");
    var tang =  document.querySelector(".quantity_up");
    var giam =  document.querySelector(".quantity_down");
  
    // Xử lý sự kiện khi nhấn nút giảm
    giam.addEventListener("click", function () {
      if (quantity > 0) {
        quantity -= 1;
      } else {
        quantity = 0;
      }
      selectProduct.value = quantity;
    });
  
    // Xử lý sự kiện khi nhấn nút tăng
    tang.addEventListener("click", function () {
      if (quantity < 100) {
        quantity += 1;
      } else {
        quantity = 100;
      }
      selectProduct.value = quantity;
    });

//-------------------GIỎ HÀNG--------------------

// tăng số lượng sản phẩm

  const quantityInput = document.getElementById("quantity");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  incrementButton.addEventListener("click", function () {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue >= 0) {
      quantityInput.value = currentValue + 1;
    }
  });

  decrementButton.addEventListener("click", function () {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1;
    }
  });

// chọn 1 trong 2 input
  const cashPayment = document.getElementById("cashPayment");
  const onlinePayment = document.getElementById("onlinePayment");

  cashPayment.addEventListener("change", function () {
    onlinePayment.checked = !cashPayment.checked;
  });

  onlinePayment.addEventListener("change", function () {
    cashPayment.checked = !onlinePayment.checked;
  });
});



