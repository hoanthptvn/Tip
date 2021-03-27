$(function () {
  // Get header
  let header = $("#mainNav");
  let services = $("#services");
  let btnBack = $("#back-top");

  // if header exist
  if (header.length) {
    let offsetHeader = header.offset().top;
    let offsetServices = services.offset().top;

    $(window).on('load scroll', function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > offsetHeader) {
        header.addClass("fixed-top");
      } else {
        header.removeClass("fixed-top");
      }

      if (scrollTop > offsetServices) {
        header.addClass("navbar-shrink");
      } else {
        header.removeClass('navbar-shrink');
      }
    })
  }


  // Scroll section

  let scrollSection = function () {
    $(".nav-item a").on("click", function () {
      // Anchor
      let anchor = $(this).attr('href').split('#')[1];
      if (anchor) {
        let target = $("#" + anchor).offset().top;

        $('html, body').animate({
          scrollTop: target,
        }, 1000);
      }
      return false;
    })
  }

  scrollSection();
});

/* Slick slider */

$(function () {
  $('.slider').slick({
    dots: true,
    appendDots: '.slider-dots',
    fade: true,
    autoplay: true,
    autoplaySpeed: '1500',
    prevArrow: null,
    nextArrow: null,
  });
});

/* Menu Sp */

$(".even-click li").click(function () {
  if ($('.menu').hasClass("show")) {
    $('.menu_hidden').slideUp('400', function () {
      $('.menu').removeClass('show');
    });
    $(this).removeClass("open");
  } else {
    $('.menu').addClass('show');
    $('.menu_hidden').slideDown('400');
    $(this).addClass('open');
  }
  return false;
});

/**
 * Viết hiệu ứng filter bằng code jquery thuần
 */
$("nav ul li").on("click", function () {
  let category = $(this).data("class");
  $(".content ul li").each(function (index, el) {
    if ($(this).hasClass(category)) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  })
})

/**
 * Viết hiệu ứng filter bằng isotope
 * https://isotope.metafizzy.co/
 */

$("nav ul li").on("click", function () {
  let category = $(this).data("danhmuc");
  if (category === "all") {
    $(".content ul").isotope({ filter: "*" });
  } else {
    $(".content ul").isotope({ filter: category })
  }
})

/* Sắp xếp images gird */
$(".content ul").isotope({
  itemSelector: "li"
})


/**
 * Sử dụng popup Magnific Popup images
 * https://dimsemenov.com/plugins/magnific-popup/documentation.html#including-files
 */
$("#List-image").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true
  }
})