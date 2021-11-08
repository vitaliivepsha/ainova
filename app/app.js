// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
    require('./assets/templates/layouts/bacome-a-partner.html');
    require('./assets/templates/layouts/discover.html');
    require('./assets/templates/layouts/events.html');
    require('./assets/templates/layouts/event.html');
    require('./assets/templates/layouts/member.html');
}

// Depends
var $ = require('jquery');
require('bootstrap-sass');

// Modules
var Forms = require('_modules/forms');
var Slider = require('_modules/slider');
var Popup = require('_modules/popup');
var Fancy_select = require('_modules/fancyselect');
var Jscrollpane = require('_modules/jscrollpane');
var LightGallery = require('_modules/lightgallery');
var Jslider = require('_modules/jslider');
var Fancybox = require('_modules/fancybox');

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
    new Forms();
    new Popup();
    new Fancy_select();
    new Jscrollpane();
    new LightGallery();
    new Slider();
    new Jslider();
    new Fancybox();

    // fixed header
    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 100) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
        scrollPrev = scrolled;
    });

    // custom slider navigation

    $('.custom-nav__slider').each(function () {
        var $slider = $(this);

        $slider.closest('.custom-nav__slider-wrapper').find('.slider-next').click(function () {
            $slider.slick('slickNext');
        });

        $slider.closest('.custom-nav__slider-wrapper').find('.slider-prev').click(function () {
            $slider.slick('slickPrev');
        });
    });

    // login menu


    // $('.header-login').click(function () {
    //     $('body').toggleClass('login-menu__show');
    // });

    // $(document).click(function () {
    //     $('body').removeClass('login-menu__show');
    // });

    $('.header-login').click(function () {
        $('body').toggleClass('login-menu__show').removeClass('menu-opened');
        $('.mobile-menu__btn').removeClass('active');
    });

    $(document).click(function () {
        $('body').removeClass('login-menu__show').removeClass('menu-opened');
        $('.mobile-menu__btn').removeClass('active');
    });


    $(document).on('click', '.header-login__menu', function (e) {
        e.stopPropagation();
    });


    // $(document).on('click', '.header-login', function (e) {
    //     e.stopPropagation();
    // });

    $(document).on('click', '.header-login', function (e) {
        e.stopPropagation();
    });

    // mobile menu

    var touch = $('.mobile-menu__btn');

    var toggles = document.querySelectorAll('.mobile-menu__btn');

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
        });
    }

    $(touch).click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-opened').removeClass('login-menu__show');
        return false;
    });

    $(document).on('click', '.mobile-menu__btn', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.mobile-menu__wrapper', function (e) {
        e.stopPropagation();
    });
});

// video
// $('.video__inner').click(function () {
//     $('.video__inner svg').css('display', 'none');
//     $('.video__inner img').css('display', 'none');
// })


// faq
if ($(".acc")) {
    $(".acc .acc__content").css("display", "none");
    $(".acc .acc__title").click(function () {
        $(this).toggleClass("active").next().slideToggle();
        $(".acc .acc__title").not(this).removeClass("active").next().slideUp();
    });
}

$('.phone').mask('+38(999)-99-99-999');
