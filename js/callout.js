/* ==========================================================================
    Call Out -- Version: 0.2.1
    ========================================================================== */

    (function($) {
      $.fn.callOutBox = function() {
        if($(window).width() >= mediumBreakPoint){
        	$('.callout').hover(function(){
            $('.callout-message').slideDown('fast');
          },
          function(){
            $('.callout-message').slideUp('slow');
          });
        }
      }

    }(jQuery));
    $('.callout').callOutBox();
