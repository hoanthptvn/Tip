'use strict';
$(function () {
  $('#big_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '#small_banner'
  });
  $('#small_banner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '#big_banner',
    dots: false,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [, {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    ]
  });

});