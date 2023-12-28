document.addEventListener("DOMContentLoaded", function () {
    // Gọi hàm để hiển thị dữ liệu từ local storage
    HienThiDuLieuSanPham();
});

function HienThiDuLieuSanPham() {
    // Lấy dữ liệu từ local storage
    var duLieuSanPham = localStorage.getItem("sp");
    var SanPhamArray = duLieuSanPham ? JSON.parse(duLieuSanPham) : [];

    // Lấy thẻ tbody để điền dữ liệu
    var tbody = document.getElementById("tableBody");

    // Xóa nội dung cũ trong tbody
    tbody.innerHTML = "";

    // Điền dữ liệu từ mảng vào bảng
    for (var i = 0; i < SanPhamArray.length; i++) {
        var SanPham = SanPhamArray[i];

        // Tạo một hàng mới
        var newRow = tbody.insertRow();

        // Tạo các ô trong hàng
        var checkboxCell = newRow.insertCell(0);
        var maCell = newRow.insertCell(1);
        var tenLoaiCell = newRow.insertCell(2);
        var tenCell = newRow.insertCell(3);
        var anhDaiDienCell = newRow.insertCell(4);
        var giaCell = newRow.insertCell(5);
        var giaGiamCell = newRow.insertCell(6);
        var soLuongCell = newRow.insertCell(7);
        var thaoTacCell = newRow.insertCell(8);

        // Điền dữ liệu vào các ô
        checkboxCell.innerHTML = '<input type="checkbox">';
        maCell.innerHTML = SanPham.MaSanPham;
        tenLoaiCell.innerHTML = SanPham.TenLoaiSanPham;
        tenCell.innerHTML = SanPham.TenSanPham;

        var img = document.createElement("img");
        img.src = SanPham.AnhDaiDien;
        anhDaiDienCell.appendChild(img);

        giaCell.innerHTML = SanPham.Gia;
        giaGiamCell.innerHTML = SanPham.GiaGiam;
        soLuongCell.innerHTML = SanPham.SoLuong;
        thaoTacCell.innerHTML = '<i class="fas fa-edit" title="Sửa" onclick="ChinhSuaSanPham(' + SanPham.MaSanPham + ')"></i> ' +
                                '<i class="fas fa-trash-alt" title="Xóa" onclick="XoaSanPham(' + SanPham.MaSanPham + ')"></i>';
    }
}

function ThemSanPham() {
    // Lấy dữ liệu hiện tại từ local storage
    var duLieuHienTai = localStorage.getItem("sp");
    var SanPhamHienTai = duLieuHienTai ? JSON.parse(duLieuHienTai) : [];

    // Tạo mã sản phẩm mới
    var maSanPhamMoi = 1; // giá trị mặc định nếu không có dữ liệu
    if (SanPhamHienTai.length > 0) {
        // Tìm mã sản phẩm lớn nhất
        var maxMaSanPham = Math.max.apply(Math, SanPhamHienTai.map(function (item) {
            return item.MaSanPham;
        }));
        maSanPhamMoi = maxMaSanPham + 1;
    }

    // Lấy giá trị từ ô nhập liệu
    
    var tenLoaiSanPham = document.getElementById("TenLoaiSanPham").value;
    var tenSanPham = document.getElementById("TenSanPham").value;
    var gia = document.getElementById("Gia").value;
    var giaGiam = document.getElementById("GiaGiam").value;
    var soLuong = document.getElementById("SoLuong").value;

    // Kiểm tra sự tồn tại của sản phẩm
    var SanPhamDaTonTai = SanPhamHienTai.some(function (item) {
        return item.TenSanPham.toLowerCase() === tenSanPham.toLowerCase();
    });

    var anhDaiDien = document.getElementById("AnhDaiDien");
    var image = document.getElementById('viewimg');
    var newImagePath = "../assets/img/Product/Đèn chùm/" + anhDaiDien.value.split("\\").pop();
    image.src = newImagePath;

    if (SanPhamDaTonTai) {
        alert("Loại sản phẩm đã tồn tại!");
    } else {
        if (tenSanPham == null || tenSanPham == "") {
            alert("Tên sản phẩm không được để trống! Vui lòng nhập lại!");
        }
        else if (tenLoaiSanPham == null || tenLoaiSanPham == "") {
            alert("Loại sản phẩm không được để trống! Vui lòng nhập lại!");
        }
        else if (anhDaiDien == null || anhDaiDien == "") {
            alert("Ảnh đại diện không được để trống! Vui lòng nhập lại!");
        }
        else if (gia == null || gia == "") {
            alert("Giá sản phẩm không được để trống! Vui lòng nhập lại!");
        }
        else if (giaGiam == null || giaGiam == "") {
            alert("Giá giảm sản phẩm không được để trống! Vui lòng nhập lại!");
        }
        else if (soLuong == null || soLuong == "") {
            alert("Số lượng không được để trống! Vui lòng nhập lại!");
        }
        else {
            // Tạo một đối tượng để chứa dữ liệu
            var duLieuSanPham = {
                MaSanPham: maSanPhamMoi,
                TenLoaiSanPham: tenLoaiSanPham,
                TenSanPham: tenSanPham,
                AnhDaiDien: newImagePath,
                Gia: gia,
                GiaGiam: giaGiam,
                SoLuong: soLuong
            };

            // Thêm dữ liệu mới vào mảng hiện tại
            SanPhamHienTai.push(duLieuSanPham);

            // Lưu mảng đã cập nhật lại vào local storage
            localStorage.setItem("sp", JSON.stringify(SanPhamHienTai));
            alert("Thêm sản phẩm thành công!");
            location.reload();
        }
    }
}

function NhapMoi() {
    document.getElementById("TenLoaiSanPham").value = "";
    document.getElementById("TenSanPham").value = "";
    document.getElementById("Gia").value = "";
    document.getElementById("GiaGiam").value = "";
    document.getElementById("SoLuong").value = "";
}

function ChinhSuaSanPham(maSanPham) {
    // Lấy dữ liệu từ local storage
    var duLieuSanPham = localStorage.getItem("sp");
    var SanPhamArray = duLieuSanPham ? JSON.parse(duLieuSanPham) : [];

    // Tìm sản phẩm cần chỉnh sửa
    var SanPhamCanChinhSua = SanPhamArray.find(function (item) {
        return item.MaSanPham === maSanPham;
    });

    if (SanPhamCanChinhSua) {
        document.getElementById("MaSP").value = SanPhamCanChinhSua.MaSanPham;
        document.getElementById("TenLoaiSanPham").value = SanPhamCanChinhSua.TenLoaiSanPham;
        document.getElementById("TenSanPham").value = SanPhamCanChinhSua.TenSanPham;
        document.getElementById("Gia").value = SanPhamCanChinhSua.Gia;
        document.getElementById("GiaGiam").value = SanPhamCanChinhSua.GiaGiam;
        document.getElementById("SoLuong").value = SanPhamCanChinhSua.SoLuong;

        var viewimg = document.getElementById("viewimg");
        viewimg.src = SanPhamCanChinhSua.AnhDaiDien;
    }
}

function CapNhat() {
    var xacNhan = confirm("Bạn có chắc muốn cập nhật thông tin sản phẩm?");

    if (xacNhan) {
        var maSanPham = document.getElementById("MaSP").value;
        var tenLoaiSanPham = document.getElementById("TenLoaiSanPham").value;
        var tenSanPham = document.getElementById("TenSanPham").value;
        var gia = document.getElementById("Gia").value;
        var giaGiam = document.getElementById("GiaGiam").value;
        var soLuong = document.getElementById("SoLuong").value;

        var anhDaiDien = document.getElementById("AnhDaiDien");
        var image = document.getElementById('viewimg');
        var newImagePath = "../assets/img/Product/Đèn chùm/" + anhDaiDien.value.split("\\").pop();
        image.src = newImagePath;

        // Lấy dữ liệu từ local storage
        var duLieuSanPham = localStorage.getItem("sp");
        var SanPhamArray = duLieuSanPham ? JSON.parse(duLieuSanPham) : [];

        // Tìm sản phẩm cần cập nhật
        var SanPhamCanCapNhat = SanPhamArray.find(function (item) {
            return item.MaSanPham === parseInt(maSanPham);
        });

        if (SanPhamCanCapNhat) {
            // Cập nhật thông tin sản phẩm
            SanPhamCanCapNhat.TenLoaiSanPham = tenLoaiSanPham;
            SanPhamCanCapNhat.TenSanPham = tenSanPham;
            SanPhamCanCapNhat.Gia = gia;
            SanPhamCanCapNhat.GiaGiam = giaGiam;
            SanPhamCanCapNhat.SoLuong = soLuong;
            SanPhamCanCapNhat.AnhDaiDien = newImagePath;

            // Lưu mảng đã cập nhật lại vào local storage
            localStorage.setItem("sp", JSON.stringify(SanPhamArray));

            // Hiển thị lại dữ liệu sau khi cập nhật
            HienThiDuLieuSanPham();
            alert("Cập nhật thông tin thành công!");
            location.reload();
        }
    }
}

function XoaSanPham(maSanPham) {
    var xacNhan = confirm("Bạn có chắc muốn xóa sản phẩm?");
    
    if (xacNhan) {
        var duLieuSanPham = localStorage.getItem("sp");
        var SanPhamArray = duLieuSanPham ? JSON.parse(duLieuSanPham) : [];

        // Lọc ra sản phẩm cần xóa
        var loaiSanPhamCanXoa = SanPhamArray.find(function(item) {
            return item.MaSanPham === maSanPham;
        });

        // Kiểm tra nếu sản phẩm tồn tại, thì xóa nó
        if (loaiSanPhamCanXoa) {
            SanPhamArray = SanPhamArray.filter(function(item) {
                return item.MaSanPham !== maSanPham;
            });

            // Lưu lại mảng đã cập nhật vào local storage
            localStorage.setItem("sp", JSON.stringify(SanPhamArray));

            alert("Xóa sản phẩm thành công!")

            // Hiển thị lại dữ liệu sau khi xóa
            HienThiDuLieuLoaiSanPham();
        }
    }

    location.reload();
}

function loadFile(event) {
    var image = document.getElementById('viewimg');
    image.src = URL.createObjectURL(event.target.files[0]);
}