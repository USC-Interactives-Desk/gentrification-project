/* script.js 
   Project: USC Annenberg Media Interactives Desk
   Author: Stefani Urmas
   Date: Fall 2017
*/

/*************************************************/
// PREVENTING SWIPE PAGE GESTURE ON SPECIFIC ELEMENTS

$(document).on('swipeleft swiperight', '.media', function(event) {
    event.stopPropagation();
    event.preventDefault();
});

$(document).on('swipeleft swiperight', '#related', function(event) {
    event.stopPropagation();
    event.preventDefault();
});


/*************************************************/
// START OF DOCUMENT READY

$(document).ready(function(){
    
 
    /*************************************************/
    // MOBILE BURGER MENU BUTTON
    
    $(".mobile-menu").slideUp();

    var mobileMenu = false
    
    $(".burger-menu").click(function(){
            
        $(this).toggleClass("java");
        
        if (mobileMenu == false) {
            $(".mobile-menu").slideDown();
            
            mobileMenu = true;
        } else {
            $(".mobile-menu").slideUp();
            mobileMenu = false;
        }
    });
    
    
    /*************************************************/
    // FEATURED IMAGE CAPTION BUTTON (DESKTOP)
    
    $(".featured-image-caption").slideUp();

    var featuredCaption = false
    
    $('.caption-button').click(function(){
            
        if (featuredCaption == false) {
            $(".header-texts").fadeOut(300);
            $(".featured-image-caption").slideDown();
            $("section").animate({top: "0px"});
            $(".image-curtain").fadeOut(300);
            $(".navdots-container").css({"opacity": "0"});
            $(".caption-button img").attr("src", "img/caption-close.svg");
            featuredCaption = true;
        } else {
            $(".header-texts").fadeIn(300);
            $(".image-curtain").fadeIn(300);
            $(".navdots-container").css({"opacity": "1"});
            $(".featured-image-caption").slideUp();
            $("section").animate({top: "-130px"});
            $(".caption-button img").attr("src", "img/caption-icon.svg");
            featuredCaption = false;
        }
    }); 
    
    /*************************************************/
    // SOCIAL MEDIA BUTTONS ON THE FRONT PAGE (DESKTOP)
    
    $('.icon-background-front').mouseenter(function(){
        
        var color = $(this).attr("brand-color");
        
        $(this).css({"background-color": color, "transform": "scale(1.08)"});
        
    });
    
    $('.icon-background-front').mouseleave(function(){
        
        $(this).css({"background-color": "", "transform": "scale(1.00)"});
        
    });
    
    // SOCIAL MEDIA BUTTONS ON ARTICLES (DESKTOP)
    
    $('.icon-background').mouseenter(function(){

        var color = $(this).attr("brand-color");
        
        $(this).css({"background-color": color, "transform": "scale(1.05)"});
        
    });
    
    $('.icon-background').mouseleave(function(){
        
        $(this).css({"background-color": "", "transform": "scale(1.00)"});
        
    });
    
    
    // SOCIAL MEDIA BUTTONS (MOBILE)
    
//    $(document).on('swipedown', '.content', function () {
//        $("#social-icons-mobile").css({"visibility": "hidden"});
//    });
//    
//    $(document).on('swipeup', '.content', function () {
//        $("#social-icons-mobile").css({"visibility": "visible"});
//    });
    
    
    /***************************/
    /* FRONT PAGE ARROW HOVERS */
    
    $(".gallery-cell-front").mouseenter(function(){
        var headlineArrow = $(this).attr("headlineArrow");
        var category = $(this).attr("category");
        
        if (category == "01") {
            $("#" + headlineArrow).css({"background-color": "#C50000", "transform": "scale(1.1)"});
        }
        if (category == "02") {
            $("#" + headlineArrow).css({"background-color": "#1B264C", "transform": "scale(1.1)"});
        }
        if (category == "03") {
            $("#" + headlineArrow).css({"background-color": "#2AAACB", "transform": "scale(1.1)"});
        }
    });
    
    $(".gallery-cell-front").mouseleave(function(){
        var headlineArrow = $(this).attr("headlineArrow");
        $("#" + headlineArrow).css({"background-color": "transparent", "transform": "scale(1)"});
    });
    
    
    /***************/
    // AUDIO BUTTONS
    
        $('.audio-textbox img').mouseenter(function(){
        
        var audioclip = $(this).attr("sound");
        var player = $(this).attr("player");
        var icon = $(this);
        var photo = $(this).attr("photo");
        
        console.log(audioclip);
        console.log(player);
        console.log(icon);
        
        //playing audio
        $(player).get(0).play();
        
        //enlargening the icon
        $(icon).css({"transform": "scale(1.05)"});
        
        //grayscale to colour
        $("#" + photo).css({"filter": "grayscale(0%)"})
        
    });
    
    $('.audio-textbox img').mouseleave(function(){
        
        var player = $(this).attr("player");
        var icon = $(this);
        var photo = $(this).attr("photo");
        
        console.log(player);
        console.log(icon);
        
        //pausing audio
        $(player).get(0).pause();
        
        //scaling the icon back to normal
        $(icon).css({"transform": "scale(1.0)"});
        
        //color to grayscale
        $("#" + photo).css({"filter": "grayscale(100%)"})
        
    });
    
    /**************************/
    // AUDIO PROGRESS BAR

    // AUDIO PROGRESS BAR SOUND 1
    
    window.onload = function(){

    var myAudio = document.getElementById('player'); // get audio data from <audio> tag in image-audio box
    console.log(myAudio)
    myAudio.addEventListener('progress', function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      for (var i = 0; i < myAudio.buffered.length; i++) {
            if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) < myAudio.currentTime) {
                document.getElementById("buffered-amount").style.width = (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    }
    });

    myAudio.addEventListener('timeupdate', function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      document.getElementById('progress-amount').style.width = ((myAudio.currentTime / duration)*100) + "%";
    }
    });

    // AUDIO PROGRESS BAR SOUND 2

    var myAudio2 = document.getElementById('player-02'); // get the audio data from the image-audio box
    console.log(myAudio2)
    myAudio2.addEventListener('progress2', function() {
    var duration2 =  myAudio2.duration;
    if (duration2 > 0) {
      for (var i = 0; i < myAudio2.buffered2.length; i++) {
            if (myAudio2.buffered2.start(myAudio2.buffered2.length - 1 - i) < myAudio2.currentTime) {
                document.getElementById("buffered-amount2").style.width = (myAudio2.buffered2.end(myAudio2.buffered2.length - 1 - i) / duration2) * 100 + "%";
                break;
            }
        }
    }
    });
        
    myAudio2.addEventListener('timeupdate', function() {
    var duration2 =  myAudio2.duration;
    if (duration2 > 0) {
      document.getElementById('progress-amount2').style.width = ((myAudio2.currentTime / duration2)*100) + "%";
    }
    });
    
    // AUDIO PROGRESS BAR SOUND 3
        
    var myAudio3 = document.getElementById('player-03'); // get the audio data from the image-audio box
    console.log(myAudio3)
    myAudio3.addEventListener('progress3', function() {
    var duration3 =  myAudio3.duration;
    if (duration3 > 0) {
      for (var i = 0; i < myAudio3.buffered3.length; i++) {
            if (myAudio3.buffered3.start(myAudio3.buffered3.length - 1 - i) < myAudio3.currentTime) {
                document.getElementById("buffered-amount3").style.width = (myAudio3.buffered3.end(myAudio3.buffered3.length - 1 - i) / duration3) * 100 + "%";
                break;
            }
        }
    }
    });
     
    myAudio3.addEventListener('timeupdate', function() {
    var duration3 =  myAudio3.duration;
    if (duration3 > 0) {
      document.getElementById('progress-amount3').style.width = ((myAudio3.currentTime / duration3)*100) + "%";
    }
    });
    
    // AUDIO PROGRESS BAR SOUND 4

    var myAudio4 = document.getElementById('player-04'); // get the audio data from the image-audio box
    console.log(myAudio4)
    myAudio4.addEventListener('progress4', function() {
    var duration4 =  myAudio4.duration;
    if (duration4 > 0) {
      for (var i = 0; i < myAudio4.buffered4.length; i++) {
            if (myAudio4.buffered4.start(myAudio4.buffered4.length - 1 - i) < myAudio4.currentTime) {
                document.getElementById("buffered-amount4").style.width = (myAudio4.buffered4.end(myAudio4.buffered4.length - 1 - i) / duration4) * 100 + "%";
                break;
            }
        }
    }
    });
    
     
    myAudio4.addEventListener('timeupdate', function() {
    var duration4 =  myAudio4.duration;
    if (duration4 > 0) {
      document.getElementById('progress-amount4').style.width = ((myAudio4.currentTime / duration4)*100) + "%";
    }
    });
    
    // AUDIO PROGRESS BAR SOUND 5

    var myAudio5 = document.getElementById('player-05'); // get the audio data from the image-audio box
    console.log(myAudio5)
    myAudio4.addEventListener('progress5', function() {
    var duration5 =  myAudio5.duration;
    if (duration5 > 0) {
      for (var i = 0; i < myAudio4.buffered5.length; i++) {
            if (myAudio5.buffered5.start(myAudio5.buffered5.length - 1 - i) < myAudio5.currentTime) {
                document.getElementById("buffered-amount5").style.width = (myAudio5.buffered5.end(myAudio5.buffered5.length - 1 - i) / duration5) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio5.addEventListener('timeupdate', function() {
    var duration5 =  myAudio5.duration;
    if (duration5 > 0) {
      document.getElementById('progress-amount5').style.width = ((myAudio5.currentTime / duration5)*100) + "%";
    }
    });  
        
    // AUDIO PROGRESS BAR SOUND 6

    var myAudio6 = document.getElementById('player-06'); // get the audio data from the image-audio box
    console.log(myAudio6)
    myAudio6.addEventListener('progress6', function() {
    var duration6 =  myAudio6.duration;
    if (duration6 > 0) {
      for (var i = 0; i < myAudio6.buffered6.length; i++) {
            if (myAudio6.buffered6.start(myAudio6.buffered6.length - 1 - i) < myAudio6.currentTime) {
                document.getElementById("buffered-amount6").style.width = (myAudio6.buffered6.end(myAudio6.buffered6.length - 1 - i) / duration6) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio6.addEventListener('timeupdate', function() {
    var duration6 =  myAudio6.duration;
    if (duration6 > 0) {
      document.getElementById('progress-amount6').style.width = ((myAudio6.currentTime / duration6)*100) + "%";
    }
    });   
    
        
    // AUDIO PROGRESS BAR SOUND 7

    var myAudio7 = document.getElementById('player-07'); // get the audio data from the image-audio box
    console.log(myAudio7)
    myAudio7.addEventListener('progress7', function() {
    var duration7 =  myAudio7.duration;
    if (duration7 > 0) {
      for (var i = 0; i < myAudio7.buffered7.length; i++) {
            if (myAudio7.buffered7.start(myAudio7.buffered7.length - 1 - i) < myAudio7.currentTime) {
                document.getElementById("buffered-amount7").style.width = (myAudio7.buffered7.end(myAudio7.buffered7.length - 1 - i) / duration7) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio7.addEventListener('timeupdate', function() {
    var duration7 =  myAudio7.duration;
    if (duration7 > 0) {
      document.getElementById('progress-amount7').style.width = ((myAudio7.currentTime / duration7)*100) + "%";
    }
    }); 
        
    // AUDIO PROGRESS BAR SOUND 8

    var myAudio8 = document.getElementById('player-08'); // get the audio data from the image-audio box
    console.log(myAudio8)
    myAudio8.addEventListener('progress8', function() {
    var duration8 =  myAudio8.duration;
    if (duration8 > 0) {
      for (var i = 0; i < myAudio8.buffered8.length; i++) {
            if (myAudio8.buffered8.start(myAudio8.buffered8.length - 1 - i) < myAudio8.currentTime) {
                document.getElementById("buffered-amount8").style.width = (myAudio8.buffered8.end(myAudio8.buffered8.length - 1 - i) / duration8) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio8.addEventListener('timeupdate', function() {
    var duration8 =  myAudio8.duration;
    if (duration8 > 0) {
      document.getElementById('progress-amount8').style.width = ((myAudio8.currentTime / duration8)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 9

    var myAudio9 = document.getElementById('player-09'); // get the audio data from the image-audio box
    console.log(myAudio9)
    myAudio9.addEventListener('progress9', function() {
    var duration9 =  myAudio9.duration;
    if (duration9 > 0) {
      for (var i = 0; i < myAudio9.buffered9.length; i++) {
            if (myAudio9.buffered9.start(myAudio9.buffered9.length - 1 - i) < myAudio9.currentTime) {
                document.getElementById("buffered-amount9").style.width = (myAudio9.buffered9.end(myAudio9.buffered9.length - 1 - i) / duration9) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio9.addEventListener('timeupdate', function() {
    var duration9 =  myAudio9.duration;
    if (duration9 > 0) {
      document.getElementById('progress-amount9').style.width = ((myAudio9.currentTime / duration9)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 10

    var myAudio10 = document.getElementById('player-10'); // get the audio data from the image-audio box
    console.log(myAudio10)
    myAudio10.addEventListener('progress10', function() {
    var duration10 =  myAudio10.duration;
    if (duration10 > 0) {
      for (var i = 0; i < myAudio10.buffered10.length; i++) {
            if (myAudio10.buffered10.start(myAudio10.buffered10.length - 1 - i) < myAudio10.currentTime) {
                document.getElementById("buffered-amount10").style.width = (myAudio10.buffered10.end(myAudio10.buffered10.length - 1 - i) / duration10) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio10.addEventListener('timeupdate', function() {
    var duration10 =  myAudio10.duration;
    if (duration10 > 0) {
      document.getElementById('progress-amount10').style.width = ((myAudio10.currentTime / duration10)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 11

    var myAudio11 = document.getElementById('player-11'); // get the audio data from the image-audio box
    console.log(myAudio11)
    myAudio11.addEventListener('progress11', function() {
    var duration11 =  myAudio11.duration;
    if (duration11 > 0) {
      for (var i = 0; i < myAudio11.buffered11.length; i++) {
            if (myAudio11.buffered11.start(myAudio11.buffered11.length - 1 - i) < myAudio11.currentTime) {
                document.getElementById("buffered-amount11").style.width = (myAudio11.buffered11.end(myAudio11.buffered11.length - 1 - i) / duration11) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio11.addEventListener('timeupdate', function() {
    var duration11 =  myAudio11.duration;
    if (duration11 > 0) {
      document.getElementById('progress-amount11').style.width = ((myAudio11.currentTime / duration11)*100) + "%";
    }
    }); 
        
    // AUDIO PROGRESS BAR SOUND 12

    var myAudio12 = document.getElementById('player-12'); // get the audio data from the image-audio box
    console.log(myAudio12)
    myAudio12.addEventListener('progress12', function() {
    var duration12 =  myAudio12.duration;
    if (duration12 > 0) {
      for (var i = 0; i < myAudio12.buffered12.length; i++) {
            if (myAudio12.buffered12.start(myAudio12.buffered12.length - 1 - i) < myAudio12.currentTime) {
                document.getElementById("buffered-amount12").style.width = (myAudio12.buffered12.end(myAudio12.buffered12.length - 1 - i) / duration12) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio12.addEventListener('timeupdate', function() {
    var duration12 =  myAudio12.duration;
    if (duration12 > 0) {
      document.getElementById('progress-amount12').style.width = ((myAudio12.currentTime / duration12)*100) + "%";
    }
    });  
        
    // AUDIO PROGRESS BAR SOUND 13

    var myAudio13 = document.getElementById('player-13'); // get the audio data from the image-audio box
    console.log(myAudio13)
    myAudio13.addEventListener('progress13', function() {
    var duration13 =  myAudio13.duration;
    if (duration13 > 0) {
      for (var i = 0; i < myAudio13.buffered13.length; i++) {
            if (myAudio13.buffered13.start(myAudio13.buffered13.length - 1 - i) < myAudio13.currentTime) {
                document.getElementById("buffered-amount13").style.width = (myAudio13.buffered13.end(myAudio13.buffered13.length - 1 - i) / duration13) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio13.addEventListener('timeupdate', function() {
    var duration13 =  myAudio13.duration;
    if (duration13 > 0) {
      document.getElementById('progress-amount13').style.width = ((myAudio13.currentTime / duration13)*100) + "%";
    }
    });  
        
        // AUDIO PROGRESS BAR SOUND 14

    var myAudio14 = document.getElementById('player-14'); // get the audio data from the image-audio box
    console.log(myAudio14)
    myAudio14.addEventListener('progress14', function() {
    var duration14 =  myAudio14.duration;
    if (duration14 > 0) {
      for (var i = 0; i < myAudio14.buffered14.length; i++) {
            if (myAudio14.buffered14.start(myAudio14.buffered14.length - 1 - i) < myAudio14.currentTime) {
                document.getElementById("buffered-amount14").style.width = (myAudio14.buffered14.end(myAudio14.buffered14.length - 1 - i) / duration14) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio14.addEventListener('timeupdate', function() {
    var duration14 =  myAudio14.duration;
    if (duration14 > 0) {
      document.getElementById('progress-amount14').style.width = ((myAudio14.currentTime / duration14)*100) + "%";
    }
    });    
        
    // AUDIO PROGRESS BAR SOUND 15

    var myAudio15 = document.getElementById('player-15'); // get the audio data from the image-audio box
    console.log(myAudio15)
    myAudio15.addEventListener('progress15', function() {
    var duration15 =  myAudio15.duration;
    if (duration15 > 0) {
      for (var i = 0; i < myAudio15.buffered15.length; i++) {
            if (myAudio15.buffered15.start(myAudio15.buffered15.length - 1 - i) < myAudio15.currentTime) {
                document.getElementById("buffered-amount15").style.width = (myAudio15.buffered15.end(myAudio15.buffered15.length - 1 - i) / duration15) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio15.addEventListener('timeupdate', function() {
    var duration15 =  myAudio15.duration;
    if (duration15 > 0) {
      document.getElementById('progress-amount15').style.width = ((myAudio15.currentTime / duration15)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 16

    var myAudio16 = document.getElementById('player-16'); // get the audio data from the image-audio box
    console.log(myAudio16)
    myAudio16.addEventListener('progress16', function() {
    var duration16 =  myAudio16.duration;
    if (duration16 > 0) {
      for (var i = 0; i < myAudio16.buffered16.length; i++) {
            if (myAudio16.buffered16.start(myAudio16.buffered16.length - 1 - i) < myAudio16.currentTime) {
                document.getElementById("buffered-amount16").style.width = (myAudio16.buffered16.end(myAudio16.buffered16.length - 1 - i) / duration16) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio16.addEventListener('timeupdate', function() {
    var duration16 =  myAudio16.duration;
    if (duration16 > 0) {
      document.getElementById('progress-amount16').style.width = ((myAudio16.currentTime / duration16)*100) + "%";
    }
    });  
        
        // AUDIO PROGRESS BAR SOUND 17

    var myAudio17 = document.getElementById('player-17'); // get the audio data from the image-audio box
    console.log(myAudio17)
    myAudio17.addEventListener('progress17', function() {
    var duration17 =  myAudio17.duration;
    if (duration17 > 0) {
      for (var i = 0; i < myAudio17.buffered17.length; i++) {
            if (myAudio17.buffered17.start(myAudio17.buffered17.length - 1 - i) < myAudio17.currentTime) {
                document.getElementById("buffered-amount17").style.width = (myAudio17.buffered17.end(myAudio17.buffered17.length - 1 - i) / duration17) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio17.addEventListener('timeupdate', function() {
    var duration17 =  myAudio17.duration;
    if (duration17 > 0) {
      document.getElementById('progress-amount17').style.width = ((myAudio17.currentTime / duration17)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 18

    var myAudio18 = document.getElementById('player-18'); // get the audio data from the image-audio box
    console.log(myAudio18)
    myAudio18.addEventListener('progress18', function() {
    var duration18 =  myAudio18.duration;
    if (duration18 > 0) {
      for (var i = 0; i < myAudio18.buffered18.length; i++) {
            if (myAudio18.buffered18.start(myAudio18.buffered18.length - 1 - i) < myAudio18.currentTime) {
                document.getElementById("buffered-amount18").style.width = (myAudio18.buffered18.end(myAudio18.buffered18.length - 1 - i) / duration18) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio18.addEventListener('timeupdate', function() {
    var duration18 =  myAudio18.duration;
    if (duration18 > 0) {
      document.getElementById('progress-amount18').style.width = ((myAudio18.currentTime / duration18)*100) + "%";
    }
    });
        
    // AUDIO PROGRESS BAR SOUND 19

    var myAudio19 = document.getElementById('player-19'); // get the audio data from the image-audio box
    console.log(myAudio19)
    myAudio19.addEventListener('progress19', function() {
    var duration19 =  myAudio19.duration;
    if (duration19 > 0) {
      for (var i = 0; i < myAudio19.buffered19.length; i++) {
            if (myAudio19.buffered19.start(myAudio19.buffered19.length - 1 - i) < myAudio19.currentTime) {
                document.getElementById("buffered-amount19").style.width = (myAudio19.buffered19.end(myAudio19.buffered19.length - 1 - i) / duration19) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio19.addEventListener('timeupdate', function() {
    var duration19 =  myAudio19.duration;
    if (duration19 > 0) {
      document.getElementById('progress-amount19').style.width = ((myAudio19.currentTime / duration19)*100) + "%";
    }
    });  
        
    // AUDIO PROGRESS BAR SOUND 20

    var myAudio20 = document.getElementById('player-20'); // get the audio data from the image-audio box
    console.log(myAudio20)
    myAudio20.addEventListener('progress20', function() {
    var duration20 =  myAudio20.duration;
    if (duration20 > 0) {
      for (var i = 0; i < myAudio20.buffered20.length; i++) {
            if (myAudio20.buffered20.start(myAudio20.buffered20.length - 1 - i) < myAudio20.currentTime) {
                document.getElementById("buffered-amount20").style.width = (myAudio20.buffered20.end(myAudio20.buffered20.length - 1 - i) / duration20) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio20.addEventListener('timeupdate', function() {
    var duration20 =  myAudio20.duration;
    if (duration20 > 0) {
      document.getElementById('progress-amount20').style.width = ((myAudio20.currentTime / duration20)*100) + "%";
    }
    });  
        
    // AUDIO PROGRESS BAR SOUND 21

    var myAudio21 = document.getElementById('player-21'); // get the audio data from the image-audio box
    console.log(myAudio21)
    myAudio21.addEventListener('progress21', function() {
    var duration21 =  myAudio21.duration;
    if (duration21 > 0) {
      for (var i = 0; i < myAudio21.buffered21.length; i++) {
            if (myAudio21.buffered21.start(myAudio21.buffered21.length - 1 - i) < myAudio21.currentTime) {
                document.getElementById("buffered-amount21").style.width = (myAudio21.buffered21.end(myAudio21.buffered21.length - 1 - i) / duration21) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio21.addEventListener('timeupdate', function() {
    var duration21 =  myAudio21.duration;
    if (duration21 > 0) {
      document.getElementById('progress-amount21').style.width = ((myAudio21.currentTime / duration21)*100) + "%";
    }
    });    
    
    // AUDIO PROGRESS BAR SOUND 22

    var myAudio22 = document.getElementById('player-22'); // get the audio data from the image-audio box
    console.log(myAudio22)
    myAudio22.addEventListener('progress22', function() {
    var duration22 =  myAudio22.duration;
    if (duration22 > 0) {
      for (var i = 0; i < myAudio22.buffered22.length; i++) {
            if (myAudio22.buffered22.start(myAudio22.buffered22.length - 1 - i) < myAudio22.currentTime) {
                document.getElementById("buffered-amount22").style.width = (myAudio22.buffered22.end(myAudio22.buffered22.length - 1 - i) / duration22) * 100 + "%";
                break;
            }
        }
    }
    });
    
    myAudio22.addEventListener('timeupdate', function() {
    var duration22 =  myAudio22.duration;
    if (duration22 > 0) {
      document.getElementById('progress-amount22').style.width = ((myAudio22.currentTime / duration22)*100) + "%";
    }
    });  
        
    }
    
    // AUDIO TEXT LAYER EFFECTS
    
    $(document).ready(function(){ 
        $(".text-layer").slideUp();
    });

    $(".audio-imagebox").mouseenter(function(){

        var layer = $(this).attr("imagebox");
        var photo = $(this).attr("photo");
        
        $("#" + layer).slideToggle();
        $("#" + photo).css({"filter": "grayscale(0%)"})
        
    });

    $(".audio-imagebox").mouseleave(function(){

        var layer = $(this).attr("imagebox");
        var photo = $(this).attr("photo");
        
        $("#" + layer).slideToggle();
        $("#" + photo).css({"filter": "grayscale(100%)"})
        
    });
    
    // AUDIO IMAGE ORDER ON MOBILE (SCREEN < 480 px)
    
        if ($(window).width() < 480) {
            $("#audio-imagebox-02").insertBefore("#audio-textbox-02");
            $("#audio-imagebox-03").insertAfter("#audio-textbox-03");
            $("#audio-imagebox-06").insertBefore("#audio-textbox-06");
            $("#audio-imagebox-07").insertAfter("#audio-textbox-07");
            $("#audio-imagebox-10").insertBefore("#audio-textbox-10");
            $("#audio-imagebox-11").insertAfter("#audio-textbox-11");
            $("#audio-imagebox-14").insertBefore("#audio-textbox-14");
            $("#audio-imagebox-15").insertAfter("#audio-textbox-15");
            $("#audio-imagebox-18").insertBefore("#audio-textbox-18");
            $("#audio-imagebox-19").insertAfter("#audio-textbox-19");
            $("#audio-imagebox-22").insertBefore("#audio-textbox-22");
        }  
    
    $(window).resize(function() {
        
        if ($(window).width() < 480) {
            $("#audio-imagebox-02").insertBefore("#audio-textbox-02");
            $("#audio-imagebox-03").insertAfter("#audio-textbox-03");
            $("#audio-imagebox-06").insertBefore("#audio-textbox-06");
            $("#audio-imagebox-07").insertAfter("#audio-textbox-07");
            $("#audio-imagebox-10").insertBefore("#audio-textbox-10");
            $("#audio-imagebox-11").insertAfter("#audio-textbox-11");
            $("#audio-imagebox-14").insertBefore("#audio-textbox-14");
            $("#audio-imagebox-15").insertAfter("#audio-textbox-15");
            $("#audio-imagebox-18").insertBefore("#audio-textbox-18");
            $("#audio-imagebox-19").insertAfter("#audio-textbox-19");
            $("#audio-imagebox-22").insertBefore("#audio-textbox-22");
        }  
    });
    
    
    /**************************/
    /* VERTICAL PHOTO GALLERY */
    
    /* SETTING WINDOW HEIGHT FOR GALLERY ELEMENTS */
    
    var windowHeight = $(window).height() + Number(100);
    var lastWindowHeight = windowHeight + Number(300);

    $("#parallax-photo").css({"height": windowHeight + "px"});
    
    $("#scrollbox").css({"height": windowHeight + "px"});
    
    $(".scrollbox-placeholder").css({"height": windowHeight + "px"});
    
    $(".text-box").css({"height": windowHeight + "px"});
    
    $("#text-box-05").css({"height": lastWindowHeight + "px"});
    
    
    
    /* MAKING GALLERY STICKY AND TEXT DIVS VISIBLE */
    
    $("#parallax-container").waypoint(function(direction){

        if (direction == "down") {
       
            $("#parallax-container").sticky({ topSpacing: 0 });
            
            $("#parallax-photo").css({"background-image": "url(../img/photo01.jpg)"});

            $("#vertical-dot-01").css({"background-color": "red"});
            
            $("#scrollbox").css({"visibility": "visible"});
            
            $("#scrollbox").css({"overflow": "scroll"});
            
            $("#vertical-navdots-container").fadeIn();

        }
            
        }, {offset: 0 

    });
    

    
    /* CHANGING IMAGES IN THE VERTICAL PHOTO GALLERY */
    
    $("#text-box-01").waypoint(function(direction){
        if (direction == "down") {
            $("#parallax-photo").css({"background-image": "url(../img/photo02.jpg)"});
            
            $("#vertical-dot-01").css({"background-color": "white"});
            $("#vertical-dot-02").css({"background-color": "red"});
        }
        }, {context: "#scrollbox", offset: -200
    });
    
    $("#text-box-02").waypoint(function(direction){
        if (direction == "down") {
            $("#parallax-photo").css({"background-image": "url(../img/photo03.jpg)"});
            
            $("#vertical-dot-02").css({"background-color": "white"});
            $("#vertical-dot-03").css({"background-color": "red"});
        }
        }, {context: "#scrollbox", offset: -200
    });
    
    $("#text-box-03").waypoint(function(direction){
        if (direction == "down") {
            $("#parallax-photo").css({"background-image": "url(../img/photo04.jpg)"});
            
            $("#vertical-dot-03").css({"background-color": "white"});
            $("#vertical-dot-04").css({"background-color": "red"});
        }
        }, {context: "#scrollbox", offset: -200
    });
    
    $("#text-box-04").waypoint(function(direction){
        if (direction == "down") {
            $("#parallax-photo").css({"background-image": "url(../img/photo05.jpg)"});
            
            $("#vertical-dot-04").css({"background-color": "white"});
            $("#vertical-dot-05").css({"background-color": "red"});
        }
        }, {context: "#scrollbox", offset: -200
    });
    
    
    /* RELEASING STICKY ELEMENT AND HIDING TEXT DIVS ON VERTICAL GALLERY*/
    
    $("#text-box-05").waypoint(function(direction){
        
        if (direction == "down") {
            $("#parallax-container").unstick();
                        
            $("#scrollbox").css({"visibility": "hidden"});
            $("#vertical-navdots-container").fadeOut(500);
            
            $("#vertical-dot-05").css({"background-color": "white"});
            
            $("#scrollbox").css({"visibility": "hidden"});
            
            $("#scrollbox").css({"overflow": "hidden"});
        }
        
        }, {context: "#scrollbox", offset: -300

    });
    
    /*****************************/
    /* FRONTPAGE PHOTO CAROUSELS */

    $('.frontpage-carousel-01').flickity({
        cellAlign: 'left',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
    }); 
    
        $('.frontpage-carousel-02').flickity({
        cellAlign: 'center',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
    }); 
    
        $('.frontpage-carousel-03').flickity({
        cellAlign: 'right',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
    }); 
    
    
    /**************************/
    /* CAROUSEL PHOTO GALLERY */

    $('.carousel-gallery').flickity({
        cellAlign: 'center',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: false,
        freeScrollFriction: 0.075,
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true,
        rightToLeft: false,
    }); 
    
    /* CAROUSEL PHOTO GALLERY TEXT LAYERS */

    
    $(document).ready(function(){ 
        $(".gallery-text-layer").slideUp();
    });

    $(".gallery-cell").mouseenter(function(){
        var captionlayer = $(this).attr("caption");
        $("#" + captionlayer).slideToggle();
    });
    
    $(".gallery-cell").mouseleave(function(){
        var captionlayer = $(this).attr("caption");
        $("#" + captionlayer).slideToggle();
    });
    

    /****************************/
    /* RELATED ARTICLE CAROUSEL */

    $('.carousel-left').flickity({
        cellAlign: 'left',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
        initialIndex: 1,
    });
    
    $('.carousel-center').flickity({
        cellAlign: 'left',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
        initialIndex: 10,
    }); 
    
    $('.carousel-right').flickity({
        cellAlign: 'left',
        contain: true,
        setGallerySize: true,
        resize: true,
        percentPosition: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: false,
        initialIndex: 18,
    }); 
    
    /* Hover effects for related article images */
    
    $(".related-pho-img").mouseenter(function(){
        
    var relatedCategory = $(this).attr("cat");
        
        if (relatedCategory == "cat-01") {
            $(this).children("img").css({"filter": "grayscale(0%)", "border": "2px solid #C50000", "transform": "scale(1.02)"});
            $(this).children("p").css({"color": "#777"});
            $(this).children("h4").css({"color": "rgb(100,100,100)"});
        } 
        
        if (relatedCategory == "cat-02") {
            $(this).children("img").css({"filter": "grayscale(0%)", "border": "2px solid #0B1538", "transform": "scale(1.02)"});
            $(this).children("p").css({"color": "#777"});
            $(this).children("h4").css({"color": "rgb(100,100,100)"});
        } 
        
        if (relatedCategory == "cat-03") {
            $(this).children("img").css({"filter": "grayscale(0%)", "border": "2px solid #2097B5", "transform": "scale(1.02)"});
            $(this).children("p").css({"color": "#777"});
            $(this).children("h4").css({"color": "rgb(100,100,100)"});
        } 
        
    });
    
    $(".related-pho-img").mouseleave(function(){
        
        $(this).children("img").css({"filter": "grayscale(100%)", "border": "2px solid #ddd", "transform": "scale(1)"});
        $(this).children("p").css({"color": "white"});
        $("p .related-active").css({"color": "ddd"});
        $(this).children("h4").css({"color": "#999"});
    });
    
   
    
    
}); /* END OF DOCUMENT READY */


/*******************************************************/
/* SETTING WINDOW HEIGHT FOR VERTICAL GALLERY ELEMENTS */

$(window).resize(function(){ 

    var windowHeight = $(window).height();
    var lastWindowHeight = windowHeight + Number(300);

    $("#parallax-photo").css({"height": windowHeight + "px"});
    
    $("#scrollbox").css({"height": windowHeight + "px"});
    
    $(".scrollbox-placeholder").css({"height": windowHeight + "px"});
    
    $(".text-box").css({"height": windowHeight + "px"});
    
    $("#text-box-05").css({"height": lastWindowHeight + "px"});
    
}); /* END OF WINDOW RESIZE */


/*****************************************/
/* RESIZING THE RELATED ARTICLE CAROUSEL */

$(document).on('pageshow', function(){ 
    window.dispatchEvent (new
    Event('resize'));
});




