$(function() {

    // MENTIONS LEGALES

    $('.open-mentions').click(function(e) {
       $('.mentions').fadeIn();
       e.preventDefault();
    });

    $('.close-mentions').click(function() {
        $('.mentions').fadeOut();
    });

    // GAME

    $('.open-game').click(function() {
        $('.slogan').fadeOut(function() {
            $('.settings').fadeIn();
        });
    });

    $('.close-game').click(function() {
        $('.settings').fadeOut(function() {
            $('.slogan').fadeIn();
        });
    });

    // SCROLL PAGE

    $('.go-down').click(function(e) {
        positionAboutUs = $('.about-us').offset().top;
        $("html, body").animate({scrollTop : positionAboutUs }, 500);
        e.preventDefault();
    });

    $('.go-contact').click(function(e) {
        positionAboutUs = $('.contact').offset().top;
        $("html, body").animate({scrollTop : positionAboutUs }, 500);
        e.preventDefault();
    });

    // SLIDER

    $('.slider-mobile').slick({
        arrows : false,
        dots : true
      }
    );

    $('.part-left-slider').slick(
      {
        arrows : false,
        dots : false,
        touchMove : false,
        swipe : false
      }
    );

    $('.part-right-slider').slick(
      {
        arrows : false,
        dots : false,
        touchMove : false,
        swipe : false
      }
    );

    $('.next').click(function() {
        $(".part-left-slider").slick('slickNext');
        $(".part-right-slider").slick('slickNext');
    });

    $('.prev').click(function() {
        $(".part-left-slider").slick('slickPrev');
        $(".part-right-slider").slick('slickPrev');
    });

    // ANIMATION POISSONS

    var canvas = document.getElementById("canvas");

    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    
        var fishFlocking = new FishFlocking();
        fishFlocking.setup(
            canvas,
            document.getElementById("poisson"),
            document.getElementById("poisson_super")
        );
        fishFlocking.go();
    
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
        document.getElementsByClassName("fish-option").forEach(function(element) {
            element.oninput = function() {
                fishFlocking.eval(element.id + " = " + this.value);
                if (element.id === 'POPULATION') {
                    fishFlocking.eval('setupPopulation()');
                }
            };
        });
    }
});

// ANIMATIONS ELEMENTS

AOS.init({
    once : true
});
