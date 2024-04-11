var cartIcons = document.querySelectorAll('.fa-solid.fa-cart-shopping');
// cartIcons.forEach(function (icon) {
//     icon.addEventListener('click', function (event) {
//         // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
//         event.preventDefault();

//         // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
//         var productContainer = icon.closest('.Cloudfee');
//         var productName = productContainer.querySelector('.des span').innerText;
//         var productPrice = productContainer.querySelector('.price span').innerText;

//         console.log('Đã thêm sản phẩm vào giỏ hàng:');
//         console.log('Tên sản phẩm:', productName);
//         console.log('Giá sản phẩm:', productPrice);
//     });
// });

// Lấy thẻ bảng giỏ hàng và biểu tượng giỏ hàng
var cartTable = document.getElementById('cart-table');
var cartIcon = document.getElementById('cart-icon');

// Thêm sự kiện "click" cho biểu tượng giỏ hàng
cartIcon.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
    event.preventDefault();

    // window.open("cart.html");

    if (cartTable) {
        if (cartTable.style.display === 'none') {
            cartTable.style.display = 'block';
        } else {
            cartTable.style.display = 'none';
        }
    } else {
        console.error("no table");
    }
});

// Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá
var tbody = document.querySelector('#cart-table tbody');
var totalPriceElement = document.querySelector('#total-price');

// Tạo một biến để lưu tổng giá
var totalPrice = 0;

// Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
cartIcons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
        var productContainer = icon.closest('.Cloudfee');
        var productName = productContainer.querySelector('.des span').innerText;
        var productPrice = parseFloat(productContainer.querySelector('.price span').innerText.replace('đ', '').replace('.', ''));

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var existingProductRow = tbody.querySelector('tr[data-product-name="' + productName + '"]');
        if (existingProductRow) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm
            var quantityElement = existingProductRow.querySelector('.quantity');
            var quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào bảng giỏ hàng
            var newRow = document.createElement('tr');
            newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
            newRow.innerHTML = `
                <td>${productName}</td>
                <td class="quantity">1</td>
                <td>${productPrice}đ</td>

            `;
            tbody.appendChild(newRow);
        }

        // Cập nhật tổng giá
        totalPrice += productPrice;
        totalPriceElement.textContent = 'Tổng giá: ' + totalPrice + 'đ';
    });
});
