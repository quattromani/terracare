/* ==========================================================================
    Call Out -- Version: 0.2.1
    ========================================================================== */

    (function($) {
      $.fn.callOutBox = function() {
      	$('.callout').hover(function() {
      		$(this).find('.callout-message').toggle();
      	});
      }

    }(jQuery));
    $('.callout').callOutBox();
