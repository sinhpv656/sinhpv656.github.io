$(function() {
	//xu ly viec click thay doi mau 
	$('.tdkhoi').click(function(event) {
		$(this).toggleClass('xanh');

		// khi click vao , cho noidung hien ra
		$(this).next().slideToggle(900,"easeInOutExpo");

		// su dung ham animate de chuyen noidung len 
		$('body,html').animate({scrollTop: $(this).offset().top},900,"easeInOutExpo")
	});

	// code cho phan phong to anh 
	$('.vaicaianh a').fancybox({openEffect:'elastic'}); 
	//{openEffect:'elastic'} có or ko : thêm hiệu ứng co dãn ảnh khi nhấn vào ảnh


	// xư lý co dan nội dung accordion
	$('.ndkhoi').slideUp();

});