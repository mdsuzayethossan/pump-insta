$(function(){
    "use strict";
    //back to top
    var btn = $('.back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
    
    btn.on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0" },  5000);
    });
    //navbar
    var navbar = $('.navbar');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
        navbar.addClass('position-fixed');
        } else {
        navbar.removeClass('position-fixed');
        }
    });
    // venobox
    new VenoBox({
        selector: ".my-play"
    });
    //offcanvas
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //testimonials
    $('.rating-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
      ]
      });
});