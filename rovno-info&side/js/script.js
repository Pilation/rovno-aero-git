
$('.header-slider').slick({
    arrows: true,
    dots: true,
    // draggable: true,
    draggable: false,
    respondTo: 'window',
    // adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    // easing: 'linear',

    infinite: true,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 4500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: false,

    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,

    // centerMode: true,
    // centerMode: false,
    // variableWidth: true,
    // fade: false,
    fade: true,
    touchMove: true,
    focusOnSelect: true,
    appendDots: $(".header-slider__dots"),
    appendArrows: $(".header-slider__arrows")
    // responsive: [
    //     {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 850,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             centerMode: false,
    //             variableWidth: false,

    //         }
    //     },
    //     {
    //         breakpoint: 550,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: false,
    //             variableWidth: false,

    //         }
    //     }

    // ],
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu,.header__buttons,.header-above__menu,.main').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // $('.period-products__green').click(function (event) {
    //     $('.period-products__green img').toggleClass('fullscreen');
    // });
    // $('.fresh-blood__card').click(function (event) {
    //     $('.fresh-blood__card').toggleClass('fullscreen');
    // });
    // $('.fresh-blood__picture').click(function (event) {
    //     $('.fresh-blood__picture').toggleClass('fullscreen');
    // });
    // $('.quiz').click(function (event) {
    //     $('.quiz').toggleClass('fullscreen');
    // });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 80) {
        //clearHeader, not clearheader - caps H
        $(".header__menu").addClass("fixed");
    } else {
        $(".header__menu").removeClass("fixed");
    }
}); //missing );

var btn = $('.go-top-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

