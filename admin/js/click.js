function openBTN() {
    document.getElementById("button-left").style.width = "250px";
}

function closeBTN() {
    document.getElementById("button-left").style.width = "0";
}

function LoadUser() {
    var u = JSON.parse(localStorage.getItem('user')) || [];

    $('#ten_nv').html(u.tennv);
    $('#manv').html(u.manv);
    $('#tennv').html(u.tennv);
    $('#emailnv').html(u.emailnv);
    $('#sdtnv').html(u.sdtnv);
    $('#quyen').html(u.quyen);
    // $('#mknv').html(x.mknv);
}

function TTTaiKhoan() {
    window.location.href = "./TTTaiKhoan.html";
}

function LogOut() {
    localStorage.setItem('user', null);
    window.location.href = "../login.html";
}

function TongQuan() {
    window.location.href = "./TongQuan.html";
}

function LoaiSanPham() {
    window.location.href = "./LoaiSanPham.html";
}

function SanPham() {
    window.location.href = "./SanPham.html";
}

function NhaCungCap() {
    window.location.href = "./NhaCungCap.html";
}

function KhachHang() {
    window.location.href = "./KhachHang.html";
}

function TaiKhoan() {
    window.location.href = "./TaiKhoan.html";
}

function HoaDonNhap() {
    window.location.href = "./HoaDonNhap.html";
}

function HoaDonBan() {
    window.location.href = "./HoaDonBan.html";
}

function TinTuc() {
    window.location.href = "./TinTuc.html";
}

function ThongKe() {
    window.location.href = "./ThongKe.html";
}