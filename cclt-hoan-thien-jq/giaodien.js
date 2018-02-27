$(document).ready(function () {
    $("#tm").click(function () {
        /*
                $('#wrap').css('width', '584px');
                $('#wrap').css('height', '350px');

                $('#hienThi').css('margin', '30px 10px 15px 10px');
                $('#hienThi').css('width', '550px');
                
                $('.phim').css('float', 'left');*/

        $("#wrap").toggleClass("w2");
        $("#hienThi").toggleClass("ht");
        $(".phim").toggleClass("phim1");
        $(".pt").toggleClass("pt1");
        $(".cls").toggleClass("cls1");
        $(".th").toggleClass("th1");
    });
});
