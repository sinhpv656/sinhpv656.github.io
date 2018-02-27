$(document).ready(function () {
    var html = $('.wrap').html();
    
    
        $('.wrap2').append(html);
    $(html).appendTo('.wrap2');
        $('.wrap2').html("<a href='#'>Liên kết</a> nội dung mới !!! <b> In đậm</b> ");
    
   // var arr = new Array(1.jpg,2.jpg,3.jpg,4.jpg,5.jpg,6.jpg,7.jpg,8.jpg,9.jpg,10.jpg);
    
  /* // for(var i=0;i<arr.length;i++){
        $('.wrap2').append(html);
        alert(html);
      //  $('#f1').html("<img src='img/arr[i]'>");
  //  }*/

   /* $('#btn').click(function(){
        $('.wrap').append(html);
    });
            <img id="imge" src="img/1%20(1).jpg">

    
     $('#div1').html("<a href='#'>Liên kết</a> nội dung mới !!! <b> In đậm</b> ");
    */
    
    /*<div class="content">
            <div class="grid">
                <div class="card">
                    <div class="back">
                        <img src="img/back.jpg">
                    </div>
                    <div class="font" id='f1'>
                        <img id="imge" src="img/1%20(1).jpg">
                    </div>
                </div>
            </div>
        </div>*/
});
