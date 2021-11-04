// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/templates/layouts/index.html');
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
$(function() {
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
});
