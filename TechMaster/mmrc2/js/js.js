var current = null;
var isPlaying = false;
var count = 0;
var remainringTime = 30;
$(function () {
    //var html = $('.wrap').html();
    var arr = new Array('1', '2', '3', '4', '5');

    // $('.imge').attr('src',img/arr[3]);
    //  alert(arr[0]);

    //nhan doi mang de tao ra cac cap bai
    arr = arr.concat(arr);
    //dao vi tri cac quan bai
    arr = shuffle(arr);


    for (var i = 0; i < arr.length; i++) {
        //$('.wrap').append(html);
        // document.getElementsByClassName("imge").src ='img/'+arr[i];
        var html = '';
        html = html + '<div class="content"><div class="grid"><div class="card c1" data-name="' + arr[i] + '" onclick="flip(this)"><div class="front"><img src="img/' + arr[i] + '.jpg"></div><div class="back"><img class="imge" src="img/back.jpg"></div></div></div></div>'
        //alert(html);
        $('.wrap').append(html);



    }
    var run = setInterval(function () {
        remainringTime--;
        console.log(remainringTime);
        //het thoi gian
        if (remainringTime == 0) {
            //ket thuc tro choi
            clearInterval(run);
            alert('you are lose');
        }
    }, 1000);

});


function flip(card) {

    var x = document.getElementById("audiot");

    function playAudiot() {
        x.play();
    }
    var y = document.getElementById("audiof");

    function playAudiof() {
        y.play();
    }
    
    
    
    $(card).toggleClass('flipped');
    $(card).css('pointer-events', 'none');
    if (!current) {
        current = $(card);

    } else {
        if (current.attr('data-name') != $(card).attr('data-name')) {

            //khac nhau
            setTimeout(function () {

                $('.card').toggleClass('c2');
                playAudiof(card);
                // console.log('khac nhau');
                current.toggleClass('flipped');
                $(card).toggleClass('flipped');

                $(current).css('pointer-events', 'auto');
                $(card).css('pointer-events', 'auto');

                current = null;
            }, 500);
            $('.card').toggleClass('c2');

        } else {
            //giong nhau
            setTimeout(function () {

                playAudiot(card);
                $(card).css('opacity', '0');
                current.css('opacity', '0');
                current = null;
                count++;
                if (count == 5) {
                    alert('you win');
                }

            }, 500);
        }

    }
}

function shuffle(arr) {
    var currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}


/*

// Không cho bấm vào element $('.card')
$('.card').css('pointer-events', 'none');

// Cho phép bấm vào element $('.card')
$('.card').css('pointer-events', 'auto');


*/
