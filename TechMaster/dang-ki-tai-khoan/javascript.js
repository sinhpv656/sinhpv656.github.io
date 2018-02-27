

$(document).ready(function () {
    var url = new URL(window.location.href);

    var searchParams = new URLSearchParams(url.search);

    $("#ten").html("Họ tên: " + searchParams.get("name"));
    $("#diachi").html("Địa chỉ: " + searchParams.get("diachi"));
    $("#sdt").html("Điện thoại: " + searchParams.get("dienthoai"));
    $("#email").html("Email: " + searchParams.get("email"));
    $("#pass").html("Mật khẩu: " + searchParams.get("password"));
    $("#ngaysinh").html("Ngày sinh: " + searchParams.get("ngaysinh"));
    $("#gioitinh").html("Giới tính: " + searchParams.get("gender"));
    $("#facebook").html("Facebook: " + searchParams.get("facebook"));    
});

