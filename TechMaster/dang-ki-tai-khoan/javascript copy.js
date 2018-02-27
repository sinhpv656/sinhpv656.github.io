

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

/*
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
*/