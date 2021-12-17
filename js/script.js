const burger = document.querySelector(`.header__burger`);
burger.onclick = () => {
    let burgers = document.querySelectorAll('.header__burger, .header__menu, .main');
    document.querySelector(`body`).classList.toggle(`lock`);
    burgers.forEach(item => item.classList.toggle('active'));
}


jQuery(function ($) {
    $('body').on('click', '.header__item_dropdown', function () {
        $(this).toggleClass(`more`);
    });

});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".header__menu, .header-dropdown, .header").addClass("fixed");
    } else {
        $(".header__menu, .header-dropdown, .header").removeClass("fixed");
    }
});

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


// $(document).ready(function () {
//     $('.airlines__more').click(function (event) {
//         $('.airline').toggleClass('active');
//     });
// });

jQuery(function ($) {
    $('body').on('click', '.airlines__more', function () {
        $(this).addClass(`airlines__less`).removeClass(`airlines__more`);
        $(this).html('Приховати контакти <span class="icon-arrl"></span>').siblings('.airline').addClass('more');
    });
    $('body').on('click', '.airlines__less', function () {
        $(this).removeClass(`airlines__less`).addClass(`airlines__more`);
        $(this).html('Показати контакти <span class="icon-arrr"></span>').siblings('.airline').removeClass('more');
    });

});




// //todo More: Lead
// $('body').on('click', '.more-lead', function () {
//     emh($(this).siblings('.lead'));
//     $(this).html('Less...').addClass('less-lead').removeClass('more-lead');
// });

// //todo Less: Lead
// $('body').on('click', '.less-lead', function () {
//     reh($(this).siblings('.lead'));
//     $(this).html('More...').addClass('more-lead').removeClass('less-lead');
// });







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
    autoplay: true,
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


