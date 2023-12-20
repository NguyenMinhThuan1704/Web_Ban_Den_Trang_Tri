function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ẩn tất cả các nội dung tab
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa hiệu ứng active cho tất cả các nút tab
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị nội dung tab hiện tại và thêm hiệu ứng active cho nút tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
