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


        var home = parseInt($('#home').position().top, 10),
            about = parseInt($('#about').position().top, 10),
            gallary = parseInt($('#gallary').position().top, 10),
            contactus = parseInt($('#contactus').position().top, 10);
        contactus = contactus - 200;
        console.log(home, about, gallary, contactus);
        $('#nav-home').addClass('active');
        $('#nav-about').removeClass('active');
        $('#nav-gallary').removeClass('active');
        $('#nav-contactus').removeClass('active');
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            console.log(scroll);
            $('#nav-home').removeClass('active');
            $('#nav-about').removeClass('active');
            $('#nav-gallary').removeClass('active');
            $('#nav-contactus').removeClass('active');
            if (scroll >= home && scroll < about) {
                $('#nav-home').addClass('active');
            } else if (scroll >= about && scroll < gallary) {
                $('#nav-about').addClass('active');
            } else if (scroll >= gallary && scroll < contactus) {
                $('#nav-gallary').addClass('active');
            } else if (scroll >= contactus) {
                $('#nav-contactus').addClass('active');
            }
        });

    })(jQuery);
});