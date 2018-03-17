 $(function(){
 	// dinh nghĩa một dòng thời gian
 	cd1 = new TimelineMax(); 

 	cd1
 	.to($('.nut1'),1,{x:-300})
 	.to($('.nut1'),1,{y:300})
 	.to($('.nut1'),1,{x:0},"+=1")
 	.to($('.nut1'),1,{rotationX:360})
 	.to($('.nut1'),1,{rotationX:0,y:0})

//code cho cac nut
	$('.nutstop').click(function(event) {
		 cd1.stop();
	})
	//code cho nut chay 
	$('.nutplay').click(function(event) {
		 cd1.play();
	})
//code cho dao nguoc 
	$('.nutdaonguoc').click(function(event) {
		 cd1.reverse();
	})

})  
 