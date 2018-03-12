$(function() {
	$(window).scroll(function(event) {
		/* console.log(' Ban vua cuon chuot den vi tri ');
		 console.log($('body').scrollTop());*/

		 var vitri = $('body,html').scrollTop(); 
		 if(vitri >= 400) {
		 	// console.log("Tada ! xu ly giao dien menu di ");
		 	 $('#exCollapsingNavbar2').addClass('bienhinh');
		 }
		 else 
		 {
		 	$('#exCollapsingNavbar2').removeClass('bienhinh');

		 }
	});;
});