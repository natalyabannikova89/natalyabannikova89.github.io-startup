window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu_list'),
  menuItem = document.querySelectorAll('.menu_list_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_list_active');
      })
  })
});

$(document).ready(function(){
    $('.about_us_carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev"><img src = "img/about_us/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "img/about_us/right.svg"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
        ],
      });

      $('.partners_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
      });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.anchor').fadeIn();
        } else {
            $('.anchor').fadeOut();
        }
    }),
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
  });

  