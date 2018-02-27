    $('#form-register').on('submit', function () {
        var isValid = true;
        //kiểm tra tên
        if ($('#hoten').val().trim() == '') {
            $('#hoten').next('span').html('<i class="fa fa-exclamation-circle"></i>' + ' Tên của bạn là gì? (không chứa số)');
            isValid = false;
        } else {
            $('#hoten').next('span').text('');
        }
        //kiểm tra emali
        if ($('#em').val().match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/) == null) {
            $('#em').next('span').html('<i class="fa fa-exclamation-circle"></i>' + ' Nhập chính xác email của bạn. </br>ex: abc@gmail.com, abc@yahoo.com');
            isValid = false;
        } else {
            $('#em').next('span').text('');
        }
        //kiểm tra địa chỉ
        if ($('#dc').val().trim() == '') {

            $('#dc').next('span').text('Địa chỉ không được để trống');
            isValid = false;
        } else {
            $('#dc').next('span').text('');
        }
        //kiểm tra số điện thoại
        if ($('#sdt').val().match(/[0](\d{9})|([0](\d{2})( |-)((\d{3}))( |-)(\d{4}))|[0](\d{2})( |-)(\d{7}) /) == null) {

            $('#sdt').next('span').html('<i class="fa fa-exclamation-circle"></i>' + ' Nhập chính xác số di động của bạn.</br> ex: 01649723264, 086897193...');
            isValid = false;
        } else {
            $('#sdt').next('span').text('');
        }


        //kiểm tra mật khẩu


        if ($('#mk').val().trim() == '' || $('#mk').val().length < 6) {
            $('#mk').next('span').html('<i class="fa fa-exclamation-circle"></i>' + ' Nhập mật khẩu tối thiểu 6 ký tự là số, chữ cái và dấu chấm câu.');
            isValid = false;
            //console.log('mật khẩu'+isValid);
        } else {
            $('#mk').next('span').text('');
        }

        //kiểm tra nhập lại mật khẩu
        if ($('#mk1').val() != $('#mk').val()) {

            $('#mk1').next('span').text('Mật khẩu nhập lại không khớp');
            isValid = false;
        } else {
            $('#mk1').next('span').text('');
        }
        // console.log(isValid);
        return isValid;
    });
