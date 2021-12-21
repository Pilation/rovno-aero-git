
//todo Header Starts 

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

//todo Header Ends


//todo Hover-Slider starts

const sidehovers = document.querySelectorAll(`.hover-link`);
const testbox = document.querySelector(`.hover-box`);

sidehovers.forEach(function (item) {
    item.onmouseover = () => {
        sidehovers.forEach(item => item.classList.add(`off`));
        item.classList.remove(`off`);
    }
});

testbox.onmouseout = () => {
    sidehovers.forEach(item => item.classList.remove(`off`));
}



if (window.screen.width < 1024) {
    document.querySelector(`.switch-container`).classList.replace(`hover-box`, `slider-box`);
    document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`hover-link`, `slider-link`));
}
if (window.screen.width > 1024) {
    document.querySelector(`.switch-container`).classList.replace(`slider-box`, `hover-box`);
    document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`slider-link`, `hover-link`));
}

// let actualDocWidth;
// window.onresize = () => {
//     actualDocWidth = window.screen.width;
//     if (actualDocWidth < 1024) {
//         document.querySelector(`.switch-container`).classList.replace(`hover-box`, `slider-box`);
//         document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`hover-link`, `slider-link`));
//     }
//     if (actualDocWidth > 1024) {
//         console.log(actualDocWidth)
//         document.querySelector(`.switch-container`).classList.replace(`slider-box`, `hover-box`);
//         document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`slider-link`, `hover-link`));
//     }
// }

//todo Hover-Slider ends


//todo Go-Top Button starts

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

//todo Go-Top Button ends

//todo See More menu starts 

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

//todo See More menu ends



//todo Sliders starts 

$('.slider-box').slick({
    arrows: false,
    dots: true,
    draggable: true,
    respondTo: 'window',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    touchMove: true,
    focusOnSelect: true,
});




$('.header-slider').slick({
    arrows: true,
    dots: true,
    draggable: false,
    respondTo: 'window',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,

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

    fade: true,
    touchMove: true,
    focusOnSelect: true,
    appendDots: $(".header-slider__dots"),
    appendArrows: $(".header-slider__arrows")
});

//todo Sliders ends
