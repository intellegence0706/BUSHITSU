gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);

$(window).on("load", function () {
  setTimeout(function () {
      const target = document.querySelectorAll(".js-io");
      const targetArray = Array.prototype.slice.call(target);
      const options = {
      root: null,
      rootMargin: "0% 0% -20% 0%",
      threshold: 0,
      };
      const observer = new IntersectionObserver(callback, options);
      targetArray.forEach((tgt) => {
      observer.observe(tgt);
      });

      function callback(entries) {
      entries.forEach(function (entry, i) {
          const target = entry.target;

          if (entry.isIntersecting && !target.classList.contains("_show")) {
          const delay = i * 100;
          setTimeout(function () {
              target.classList.add("_show");
          }, delay);
          }
      });
      }
  }, 400);
});

$(function() {
  $('.__sidebar-item-ttl').click(function() {
    $(this).next('.__sidebar-item-main').toggleClass('close');
    $(this).find('.__item-collapse__mark').toggleClass('open');
  });
});




var case_swiper = new Swiper(".sec-news-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed:500,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024:{
      slidesPerView: 'auto',
      spaceBetween: 0,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});

$('.slide-navi-btns__left').click(function() {
  $('.swiper-button-prev').click();
});

$('.slide-navi-btns__right').click(function() {
  $('.swiper-button-next').click();
});


$(document).ready(function() {
  // Initialize the slider
  $('.result-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 1,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });
  // Custom next button for Slick slider
  $('.after-btn').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.result-slider-container').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.before-btn').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.result-slider-container').slick('slickPrev');  // Move to the previous slide
  });

});
$(document).ready(function() {
  // Initialize the slider
  $('.voice-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.voice-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.voice-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.voice-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.voice-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.voice-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.voice-slider-container').slick('setPosition');
});


$(document).ready(function() {
  // Initialize the slider
  $('.interview-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.interview-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.voice-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.interview-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.voice-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.interview-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.interview-slider-container').slick('setPosition');
});

$(document).ready(function() {
  // Initialize the slider
  $('.case-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.case-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.case-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.case-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.case-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.case-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.case-slider-container').slick('setPosition');
});






$(document).ready(function() {
  // Initialize the slider
  $('.member-slider-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 1,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });
  // Custom next button for Slick slider
  $('.member-after-btn').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.member-slider-container').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.member-before-btn').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.member-slider-container').slick('slickPrev');  // Move to the previous slide
  });

});

$('.hambtn').click(function() {
  if($(this).hasClass('open-menu')) {
    $(this).removeClass('open-menu');
    $('.header-menu-sp, .full-bg').removeClass('open-menu');
  } else {
    $(this).addClass('open-menu');
    $('.header-menu-sp, .full-bg').addClass('open-menu');
  }
});

$(function() {
  $(".hamburger-menu-icon-wrap").click(function(){
    $('.hamburger-menu-line').toggleClass('open'); 
    if ($('.hamburger-menu-line').hasClass('open')) {
      bodyFixedOn();
      $('.header-search-wrap').toggleClass('hidden');
    }
    else {
      bodyFixedOff();
      $('.header-search-wrap').toggleClass('hidden');
    }
  });
});

$('.__question').click(function() {
  const $answer = $(this).parent('.__list-main').children('.__answer');
  const $icon = $(this).parents('.faq-item').children('.__item-collapse__mark');
  const $question = $(this);

  if ($answer.css('max-height') === '0px') {
    $answer.css({
      'max-height': '500px',
      'padding-top': '32px',
      'padding-bottom': '32px'
    });
    $icon.addClass('open');
    $question.css('border-radius', '14px 14px 0 0');

  } else {
    $answer.css({
      'max-height': '0',
      'padding-top': '0',
      'padding-bottom': '0'
    });
    $icon.removeClass('open');
    $question.css('border-radius', '14px');

  }
});


$(window).scroll(function() {
  var scrollPosition = $(this).scrollTop();
  var header = $('.js-header');

  if (scrollPosition > 85) {
    $('.js-header').addClass('fixed-header');
    header.css({
      opacity: '1',
      zIndex: '9999',
      transform: 'translate(0, 0)'  // Corrected: Removed the semicolon inside the transform value
    });
    
  } else {
    header.css({
      opacity: '0',
      zIndex: '-1',
      transform: 'translate(0, -85px)'  // Corrected: Added 'px' to -90 to make it valid CSS
    });
  }
});



// ---------- svg Animation ------------
$(document).ready(function() {
  var animated = false; // Flag to ensure animation runs only once

  $('#scroll-svg').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg path').each(function() {
              var path = $(this);
              var pathLength = path[0].getTotalLength();
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });

          $('#scroll-svg circle').css({
              'opacity': 0 // Initially hide the circle
          }).animate({
              'opacity': 1 // Animate to full visibility
          }, 300);
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});


$(document).ready(function() {
  var animated = false;  // Flag to ensure animation runs only once

  $('#scroll-svg').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg circle').each(function() {
              var path = $(this);
              var pathLength = 523; // Pre-calculated circumference of the circle
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});
// ---------- svg Animation ------------
$(document).ready(function() {
  var animated = false; // Flag to ensure animation runs only once

  $('#scroll-svg-result').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-result path').each(function() {
              var path = $(this);
              var pathLength = path[0].getTotalLength();
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });

          $('#scroll-svg-result circle').css({
              'opacity': 0 // Initially hide the circle
          }).animate({
              'opacity': 1 // Animate to full visibility
          }, 300);
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});


$(document).ready(function() {
  var animated = false;  // Flag to ensure animation runs only once

  $('#scroll-svg-result').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-result circle').each(function() {
              var path = $(this);
              var pathLength = 523; // Pre-calculated circumference of the circle
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});

// ---------- svg Animation ------------
$(document).ready(function() {
  var animated = false; // Flag to ensure animation runs only once

  $('#scroll-svg-news').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-news path').each(function() {
              var path = $(this);
              var pathLength = path[0].getTotalLength();
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });

          $('#scroll-svg-news circle').css({
              'opacity': 0 // Initially hide the circle
          }).animate({
              'opacity': 1 // Animate to full visibility
          }, 300);
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});


$(document).ready(function() {
  var animated = false;  // Flag to ensure animation runs only once

  $('#scroll-svg-news').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-news circle').each(function() {
              var path = $(this);
              var pathLength = 523; // Pre-calculated circumference of the circle
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});

// ---------- svg Animation ------------
$(document).ready(function() {
  var animated = false; // Flag to ensure animation runs only once

  $('#scroll-svg-media').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-media path').each(function() {
              var path = $(this);
              var pathLength = path[0].getTotalLength();
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });

          $('#scroll-svg-media circle').css({
              'opacity': 0 // Initially hide the circle
          }).animate({
              'opacity': 1 // Animate to full visibility
          }, 300);
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});


$(document).ready(function() {
  var animated = false;  // Flag to ensure animation runs only once

  $('#scroll-svg-media').waypoint(function(direction) {
      if (!animated) {
          animated = true; // Set the flag so animation runs only once

          $('#scroll-svg-media circle').each(function() {
              var path = $(this);
              var pathLength = 523; // Pre-calculated circumference of the circle
              path.css({
                  'stroke-dasharray': pathLength,
                  'stroke-dashoffset': pathLength
              }).animate({
                  'stroke-dashoffset': 0
              }, 300); // Animate over 300 milliseconds
          });
      }
  }, {
      offset: '75%' // Trigger when the SVG is 75% into the viewport
  });
});

