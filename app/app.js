// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
    require('./assets/templates/layouts/bacome-a-partner.html');
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

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
    scrollPrev = scrolled;
  });

  // custom slider navigation

  $('.custom-nav__slider').each(function() {
    var $slider = $(this);

    $slider.closest('.custom-nav__slider-wrapper').find('.slider-next').click(function() {
      $slider.slick('slickNext');
    });

    $slider.closest('.custom-nav__slider-wrapper').find('.slider-prev').click(function() {
      $slider.slick('slickPrev');
    });
  });

  // login menu

  $('.header-login').click(function() {
    $('body').toggleClass('login-menu__show');
  });

  $(document).click(function() {
    $('body').removeClass('login-menu__show');
  });

  $(document).on('click', '.header-login__menu', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', '.header-login', function(e) {
    e.stopPropagation();
  });
});

// video

// $('.video__inner').click(function () {
//     $('.video__inner svg').css('display', 'none');
//     $('.video__inner img').css('display', 'none');
// })


// faq

if ($('.faq__list')) {
    // открываем вкладку по умолчанию 
    $('.faq__list .faq-item.active .faq-item__content').slideUp();
    // общий функционал
    $('.faq__list .faq-item__title').on('click', function () {
        $('.faq__list .faq-item__content').not($(this).next()).slideUp(300);
        $('.faq-item').removeClass('active');
        $(this).next().slideDown(300).parent().addClass('active');
    });
}




