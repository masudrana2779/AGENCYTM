$(function () {
    "use strict";

    function scrollTopFixed(htOp) {
        var windowTop = $(window).scrollTop();
        if (windowTop > 0) {
            htOp.addClass('fixedMenu');
        } else {
            htOp.removeClass('fixedMenu');
        }
    }
    var htOp = $('.header');
    scrollTopFixed(htOp);
    $(window).scroll(function () {
        scrollTopFixed(htOp);
    });

    function go_to_top() {
        $('.nav_menu a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 72
                }, 1500);
            }
        });
    }
    go_to_top();

    /*---------LIGHT-BOX js-----------*/

    function lightBoxImages() {
        var selectorG = '.lightbox';
        if ($(selectorG).length) {
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick: false,
                button: true,
                activity: true,
                overlay: true,
                arrows: true,
                preloadNext: true,
            });
        }
    }
    lightBoxImages();


    function portfolio_slider() {
        var portfolio_slider = $('.portfolio_slider');
        if (portfolio_slider.length) {
            $(portfolio_slider).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '190px',
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '100px',
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '70px',
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '0',
                        }
                    }
                  ]
            });
        }
    }
    portfolio_slider();

    function customar_review_slider() {
        var customar_review_slider = $('.customar_review_slider');
        if (customar_review_slider.length) {
            $(customar_review_slider).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            dots: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            dots: false,
                        }
                    }
                  ]
            });
        }
    }
    customar_review_slider();

    function our_team_slider() {
        var our_team_slider = $('.our_team_slider');
        if (our_team_slider.length) {
            $(our_team_slider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            dots: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            dots: false,
                        }
                    }
                  ]
            });
        }
    }
    our_team_slider();

    function wowInit() {
        new WOW().init();
    }
    wowInit();

});
