$(function() {
	/*console.log('chay chua ha cac ban ');



		//hàm tính vị trí 1 phần tử
	console.log('tinh thu vi tri bang ham .offset().top');
	console.log($('.chapter1').offset().top);

*/

// $(''); phím tắt: selector;

	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault(); 
		// khong chuyen ra ngoai trang web
		/* Act on the event */


		// $('body').animate({scrollTop:900},1000);
		//cuộn xuống vị trí 900 so vs top , 1000: tốc độ 1s, 400: tốc độ 0,4s
		// thủ công vcc

		$('body,html').animate({	scrollTop: $('.chapter1').offset().top},1400,"easeOutCubic");



	});
	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body,html').animate({	scrollTop: $('.chapter2').offset().top},1400,"easeOutBounce");
	});

$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body,html').animate({	scrollTop: $('.chapter3').offset().top},1400,"easeOutExpo");
		//giống như ô tô đến chỗ đỗ phanh từ từ
	});



$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body,html').animate({	scrollTop: $('.chapter4').offset().top},1400,"easeInOutBack");
	});


// viet cho nut backtotop
$('.nutlentren').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body,html').animate({	scrollTop: 0},400,"easeInOutElastic");
	});

// $('.menutren ul li:nth-child(4) a').on('click', function(event) {
// 		event.preventDefault();

// 		$('body,html').animate({	scrollTop: $('.chapter4').offset().top},1400,"easeOutCubic");
// 	});

});