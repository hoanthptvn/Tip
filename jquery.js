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

  // Back to top
  let backTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > services.offset().top) {
        btnBack.css({ "right": "50px" });
      } else {
        btnBack.css({ "right": "-50px" });
      }
    })
    btnBack.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000)
    })
  }
  backTop();

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