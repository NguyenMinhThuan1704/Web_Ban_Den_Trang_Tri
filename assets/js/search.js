document.addEventListener('DOMContentLoaded', () => {
    const searchResultsContainer = document.querySelector('.new__product-item-wrapper');
  
    // Lấy kết quả tìm kiếm từ local storage
    const storedSearchResults = localStorage.getItem('searchResults');
  
    if (storedSearchResults) {
      const searchResults = JSON.parse(storedSearchResults);
  
      const htmlSearchResults = searchResults.map(result => {
        return `
                <div class="new__product-item col l-3 m-4 c-6">
                <div class="new__product-img-wrapper">
                    <a href="./index_product.html">
                        <img src="${result.img}" alt="" class="new__product-img">
                    </a>
                </div>

                <div class="sale-hot">
                    <span>${result.sale}</span>
                </div>

                <div class="product__title">
                    <div class="product__title-name">
                        <a href="./index_product.html">${result.title}</a>
                    </div>
                    <div class="product__title-price">
                        <ul class="price-list">
                            <li class="price-item">${result.giagiam}đ</li>
                            <li class="price-item">${result.gia}đ</li>
                        </ul>
                    </div>
                </div>

                <div class="item-title-add">
                    <a href="" class="item-title-link">Mua ngay</a>
                </div>
            </div>
        `;
      });
  
      searchResultsContainer.innerHTML = htmlSearchResults.join(" ");
  
      localStorage.removeItem('searchResults');
    }
  });
  