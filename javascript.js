$(document).ready(function () {
    $('body').scrollspy({
        target: ".navbar",
        offset: 1000
    });
    $("#myNavbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    
    
     $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
    
    (function ($) {

        //Function to animate slider captions 
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $Carousel = $('#myCarousel'),
            $firstAnimatingElems = $Carousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $Carousel.carousel();

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $Carousel.carousel('pause');


        //Other slides to be animated on carousel slide event 
        $Carousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
        $('#myCarousel').carousel({
            interval: 3000,
            pause: "false"
        });
        
        $(window).scroll(function(){
            $(".slideanim").each(function(){
                var posit = $(this).offset().top;
                var winTop = $(window).scrollTop();
                if (posit < winTop + 1000) {
                    $(this).addClass("slide");
                }
            });
        });
        
        $(window).scroll(function(){
            $(".navbar").each(function(){
                var posit = $(this).offset().top;
                if (posit > 0) {
                    $(".heading").addClass("zoomout");
                    $(".heading").fadeOut(1000);
                    $(".navi").addClass("trans_navup");
                    $(".heading").removeClass("zoomin");
                    $(".navi").removeClass("trans_navdown");
                }
            });
        });
        
        $(window).scroll(function(){
            $(".navbar").each(function(){
                var posit = $(this).offset().top;
                if (posit == 0) {
                    $(".heading").addClass("zoomin");
                    $(".heading").fadeIn(1000);
                    $(".navi").addClass("trans_navdown");
                    $(".heading").removeClass("zoomout");
                    $(".navi").removeClass("trans_navup");
                }
            });
        });
        
    })(jQuery);
});