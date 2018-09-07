function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      preloaderFadeOutTime = 500;
      function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
      }
      setTimeout(function(){
      hidePreloader();
    },);
    callback.call(this);
    }
  },1500);
  }
  function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }

  onReady(function() {
  // setVisible('.page', true);
  // setVisible('#loading', false);
  });


/*Sign Form*/
$(window, document, undefined).ready(function() {

  $('.input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  });


$('#tab1').on('click' , function(){
    $('#tab1').addClass('login-shadow');
   $('#tab2').removeClass('signup-shadow');
});

$('#tab2').on('click' , function(){
    $('#tab2').addClass('signup-shadow');
   $('#tab1').removeClass('login-shadow');


});

  // Off Canvas Menu Open & Close

    $('#offCanvas').on('click', function () {
        $('.nav-offcanvas').addClass('open');
        $('.offcanvas-overlay').addClass('on');
    });
    $('#offCanvasClose, .offcanvas-overlay').on('click', function () {
        $('.nav-offcanvas').removeClass('open');
        $('.offcanvas-overlay').removeClass('on');
    });




var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
