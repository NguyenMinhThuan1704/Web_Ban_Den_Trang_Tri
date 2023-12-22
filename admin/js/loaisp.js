document.addEventListener("DOMContentLoaded", function () {
    // Gọi hàm để hiển thị dữ liệu từ local storage
    HienThiDuLieuLoaiSanPham();
});

function HienThiDuLieuLoaiSanPham() {
    // Lấy dữ liệu từ local storage
    var duLieuLoaiSanPham = localStorage.getItem("loaisp");
    var loaiSanPhamArray = duLieuLoaiSanPham ? JSON.parse(duLieuLoaiSanPham) : [];

    // Lấy thẻ tbody để điền dữ liệu
    var tbody = document.getElementById("tableBody");

    // Xóa nội dung cũ trong tbody
    tbody.innerHTML = "";

    // Điền dữ liệu từ mảng vào bảng
    for (var i = 0; i < loaiSanPhamArray.length; i++) {
        var loaiSanPham = loaiSanPhamArray[i];

        // Tạo một hàng mới
        var newRow = tbody.insertRow();

        // Tạo các ô trong hàng
        var checkboxCell = newRow.insertCell(0);
        var maCell = newRow.insertCell(1);
        var tenCell = newRow.insertCell(2);
        var noiDungCell = newRow.insertCell(3);
        var thaoTacCell = newRow.insertCell(4);

        // Điền dữ liệu vào các ô
        checkboxCell.innerHTML = '<input type="checkbox">';
        maCell.innerHTML = loaiSanPham.MaLoaiSanPham;
        tenCell.innerHTML = loaiSanPham.TenLoaiSanPham;
        noiDungCell.innerHTML = loaiSanPham.NoiDung;
        thaoTacCell.innerHTML = '<i class="fas fa-edit" title="Sửa" onclick="ChinhSuaLoaiSanPham(' + loaiSanPham.MaLoaiSanPham + ')"></i> ' +
                                '<i class="fas fa-trash-alt" title="Xóa" onclick="XoaLoaiSanPham(' + loaiSanPham.MaLoaiSanPham + ')"></i>';
    }
}

function ThemLoaiSanPham() {
    // Lấy dữ liệu hiện tại từ local storage
    var duLieuHienTai = localStorage.getItem("loaisp");
    var loaiSanPhamHienTai = duLieuHienTai ? JSON.parse(duLieuHienTai) : [];

    // Tạo mã sản phẩm mới
    var maLoaiSanPhamMoi = 1; // giá trị mặc định nếu không có dữ liệu
    if (loaiSanPhamHienTai.length > 0) {
        // Tìm mã sản phẩm lớn nhất
        var maxMaLoaiSanPham = Math.max.apply(Math, loaiSanPhamHienTai.map(function (item) {
            return item.MaLoaiSanPham;
        }));
        maLoaiSanPhamMoi = maxMaLoaiSanPham + 1;
    }

    // Lấy giá trị từ ô nhập liệu
    var tenLoaiSanPham = document.getElementById("TenLoaiSanPham").value;
    var noiDung = document.getElementById("NoiDung").value;

    // Kiểm tra sự tồn tại của loại sản phẩm
    var loaiSanPhamDaTonTai = loaiSanPhamHienTai.some(function (item) {
        return item.TenLoaiSanPham.toLowerCase() === tenLoaiSanPham.toLowerCase();
    });

    if (loaiSanPhamDaTonTai) {
        alert("Loại sản phẩm đã tồn tại!");
    } else {
        if (tenLoaiSanPham == null || tenLoaiSanPham == "") {
            alert("Tên loại sản phẩm không được để trống! Vui lòng nhập lại!");
        }
        else if (noiDung == null || noiDung == "") {
            alert("Nội dung không được để trống! Vui lòng nhập lại!");
        }
        else {
            // Tạo một đối tượng để chứa dữ liệu
            var duLieuLoaiSanPham = {
                MaLoaiSanPham: maLoaiSanPhamMoi,
                TenLoaiSanPham: tenLoaiSanPham,
                NoiDung: noiDung
            };

            // Thêm dữ liệu mới vào mảng hiện tại
            loaiSanPhamHienTai.push(duLieuLoaiSanPham);

            // Lưu mảng đã cập nhật lại vào local storage
            localStorage.setItem("loaisp", JSON.stringify(loaiSanPhamHienTai));
            alert("Thêm loại sản phẩm thành công!");
            location.reload();
        }
    }
}

function NhapMoi() {
    document.getElementById("TenLoaiSanPham").value = "";
    document.getElementById("NoiDung").value = "";
}

function ChinhSuaLoaiSanPham(maLoaiSanPham) {
    // Lấy dữ liệu từ local storage
    var duLieuLoaiSanPham = localStorage.getItem("loaisp");
    var loaiSanPhamArray = duLieuLoaiSanPham ? JSON.parse(duLieuLoaiSanPham) : [];

    // Tìm loại sản phẩm cần chỉnh sửa
    var loaiSanPhamCanChinhSua = loaiSanPhamArray.find(function (item) {
        return item.MaLoaiSanPham === maLoaiSanPham;
    });

    if (loaiSanPhamCanChinhSua) {
        // Điền dữ liệu vào các ô input
        document.getElementById("MaLoaiSanPham").value = loaiSanPhamCanChinhSua.MaLoaiSanPham;
        document.getElementById("TenLoaiSanPham").value = loaiSanPhamCanChinhSua.TenLoaiSanPham;
        document.getElementById("NoiDung").value = loaiSanPhamCanChinhSua.NoiDung;
    }
}

function CapNhat() {
    var xacNhan = confirm("Bạn có chắc muốn cập nhật thông tin loại sản phẩm?");

    if (xacNhan) {
        // Lấy giá trị từ ô input
        var maLoaiSanPham = document.getElementById("MaLoaiSanPham").value;
        var tenLoaiSanPham = document.getElementById("TenLoaiSanPham").value;
        var noiDung = document.getElementById("NoiDung").value;

        // Lấy dữ liệu từ local storage
        var duLieuLoaiSanPham = localStorage.getItem("loaisp");
        var loaiSanPhamArray = duLieuLoaiSanPham ? JSON.parse(duLieuLoaiSanPham) : [];

        // Tìm loại sản phẩm cần cập nhật
        var loaiSanPhamCanCapNhat = loaiSanPhamArray.find(function (item) {
            return item.MaLoaiSanPham === parseInt(maLoaiSanPham);
        });

        if (loaiSanPhamCanCapNhat) {
            // Cập nhật thông tin loại sản phẩm
            loaiSanPhamCanCapNhat.TenLoaiSanPham = tenLoaiSanPham;
            loaiSanPhamCanCapNhat.NoiDung = noiDung;

            // Lưu mảng đã cập nhật lại vào local storage
            localStorage.setItem("loaisp", JSON.stringify(loaiSanPhamArray));

            // Hiển thị lại dữ liệu sau khi cập nhật
            HienThiDuLieuLoaiSanPham();
            alert("Cập nhật thông tin thành công!");
            location.reload();
        }
    }
}

function XoaLoaiSanPham(maLoaiSanPham) {
    var xacNhan = confirm("Bạn có chắc muốn xóa loại sản phẩm?");
    
    if (xacNhan) {
        var duLieuLoaiSanPham = localStorage.getItem("loaisp");
        var loaiSanPhamArray = duLieuLoaiSanPham ? JSON.parse(duLieuLoaiSanPham) : [];

        // Lọc ra loại sản phẩm cần xóa
        var loaiSanPhamCanXoa = loaiSanPhamArray.find(function(item) {
            return item.MaLoaiSanPham === maLoaiSanPham;
        });

        // Kiểm tra nếu loại sản phẩm tồn tại, thì xóa nó
        if (loaiSanPhamCanXoa) {
            loaiSanPhamArray = loaiSanPhamArray.filter(function(item) {
                return item.MaLoaiSanPham !== maLoaiSanPham;
            });

            // Lưu lại mảng đã cập nhật vào local storage
            localStorage.setItem("loaisp", JSON.stringify(loaiSanPhamArray));

            alert("Xóa loại sản phẩm thành công!")

            // Hiển thị lại dữ liệu sau khi xóa
            HienThiDuLieuLoaiSanPham();
        }
    }
}