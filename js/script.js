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
    // SOCIAL MEDIA BUTTONS ON THE FRONT PAGE (DESKTOP)
    
    $('.icon-background-front').mouseenter(function(){
        console.log("mouse in the house");
        
        var color = $(this).attr("brand-color");
        
        $(this).css({"background-color": color, "transform": "scale(1.08)"});
        
    });
    
    $('.icon-background-front').mouseleave(function(){
        console.log("mouse in the house");
        
        $(this).css({"background-color": "", "transform": "scale(1.00)"});
        
    });
    
    // SOCIAL MEDIA BUTTONS ON ARTICLES (DESKTOP)
    
    $('.icon-background').mouseenter(function(){
        console.log("mouse in the house");
        
        var color = $(this).attr("brand-color");
        
        $(this).css({"background-color": color, "transform": "scale(1.05)"});
        
    });
    
    $('.icon-background').mouseleave(function(){
        console.log("mouse in the house");
        
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
        }  
    
    $(window).resize(function() {
        
        if ($(window).width() < 480) {
           $("#audio-imagebox-02").insertBefore("#audio-textbox-02");
            $("#audio-imagebox-03").insertAfter("#audio-textbox-03"); 
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

    $('.carousel').flickity({
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


