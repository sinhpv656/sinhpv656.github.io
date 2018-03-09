 $(function(){
 	$(window).scroll(function(){
 		if($('html,body').scrollTop()>400){

 		$('.logo').addClass('maucam')
 		$('.navbar').addClass('nentrang')
 		.removeClass('navbar-dark')
 		.addClass('navbar-light')

 		}else{

 		$('.logo').removeClass('maucam')
 		$('.navbar').removeClass('nentrang')
 		.addClass('navbar-dark')
 		.removeClass('navbar-light')
 		}
 	})
})  
 