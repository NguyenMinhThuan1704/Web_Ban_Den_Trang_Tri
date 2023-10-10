document.addEventListener("DOMContentLoaded", function() {
    var inputElement = document.querySelector('.pass');
    var placeholders = ["Bạn muốn tìm gì ...", "Đèn trang trí nội thất", "Đèn trang trí ngoại thất"];
    var currentIndex = 0;
    var animationTimeout;
  
    function typePlaceholder() {
      var placeholderText = placeholders[currentIndex];
      inputElement.setAttribute("placeholder", ""); // Xóa nội dung placeholder
  
      var length = placeholderText.length;
      var currentLength = 0;
  
      animationTimeout = setInterval(function() {
        if (currentLength <= length) {
          inputElement.setAttribute("placeholder", placeholderText.substring(0, currentLength));
          currentLength++;
        } else {
          clearInterval(animationTimeout);
          setTimeout(deletePlaceholder, 1000); // Sau khi hiển thị, đợi 1 giây trước khi xóa
        }
      }, 30); // Tốc độ viết
      currentIndex = (currentIndex + 1) % placeholders.length; // Đặt lại currentIndex khi nó đạt cuối mảng
    }
  
    function deletePlaceholder() {
      var placeholderText = inputElement.getAttribute("placeholder");
      var length = placeholderText.length;
      var currentLength = length;
  
      animationTimeout = setInterval(function() {
        if (currentLength >= 0) {
          inputElement.setAttribute("placeholder", placeholderText.substring(0, currentLength));
          currentLength--;
        } else {
          clearInterval(animationTimeout);
          setTimeout(typePlaceholder, 500); // Sau khi xóa, đợi 0.5 giây trước khi hiển thị tiếp
        }
      }, 20); // Tốc độ xóa
  
      currentIndex = (currentIndex + 1) % placeholders.length; // Đặt lại currentIndex khi nó đạt cuối mảng
    }
    // Gọi hàm typePlaceholder để bắt đầu hiển thị placeholder đầu tiên
    typePlaceholder();
  });
  

// Sử dụng sự kiện DOMContentLoaded để đảm bảo mã chạy sau khi trang tải hoàn toàn
document.addEventListener("DOMContentLoaded", function () {
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
  });