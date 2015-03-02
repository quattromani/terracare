/* ==========================================================================
    Prototype Tools -- Version: 1.9.0.2 - Updated: 1/20/2014
   ========================================================================== */

// For DEMO site only - DO NOT EVER INGEST THESE !!
window.onload = getPageLoadTime;

// Calculate the viewport size on prototype site
$(window).resize(function() {
    $('.viewport').empty().append($(window).width(), "x", $(window).height());
}).resize();

//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime() {
    //calculate the current time in afterload
    var afterload = (new Date()).getTime();
    // now use the beforeload and afterload to calculate the seconds
    var seconds = (afterload - beforeload) / 1000;
    // Place the seconds in the innerHTML to show the results
    $('.loadtime').text( + seconds + ' sec');
}
/* ==========================================================================
    Styleguide -- Version: 0.4.1 - Updated: 2/22/2014
    ========================================================================== */

// Create Hex color code from color return
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
}

// Get color value of swatch and print to div
var color = '';
$('.swatch').each(function() {
    var classList = $(this).children('.swatch-color').attr('class').split(' ');
    for(i=0; i <= classList.length-1; i++){
     if(classList[i].match(/color-/g)){
         $(this).children('.swatch-info').prepend('<p>$' + classList[i] + '</p>');
         break;
     }
 }
 var x = $(this).children('.swatch-color').css('backgroundColor');
 hexc(x);
 $(this).children('.swatch-info').append('<p>' + color + '</p>');
 $(this).children('.swatch-info').append('<p>' + x + '</p>');
});

(function($) {

    $.fn.vs = function() {
        // View source buttons
        $('.vs').click(function(){
            $(this).parent().next().find('.prettyprint').toggle();
            $(this).not('.disabled').toggleClass('js-active');
            return false;
        });
    }

}(jQuery));

$('.vs').vs();

// Get font-family property and return
$('.fonts').each(function(){
    var fonts = $(this).css('font-family');
    $(this).prepend(fonts);
});
/* ==========================================================================
    Progress Buttons -- Version: 0.2.1 - Updated: 5/14/2014
   ========================================================================== */

// $('.progress').click(function() {
//   $(this).attr("disabled", true);
//   $(this).addClass('js-active');
//   $('.progress.js-active i').progressButton();
// });

(function($) {

  $.fn.progressButton = function() {
    $('.progress').click(function() {
      $(this).attr("disabled", true);
      $(this).addClass('js-active');
    });
  }

}(jQuery));

$('.progress').progressButton();

/* ==========================================================================
    Call Out -- Version: 0.2.1
    ========================================================================== */

    // (function($) {
    //   $.fn.callOutBox = function() {
    //     if($(window).width() >= mediumBreakPoint){
    //     	$('.callouts').hover(function(){
    //         $('.callout-message').slideDown('fast');
    //       },
    //       function(){
    //         $('.callout-message').slideUp('slow');
    //       });
    //     }
    //   }

    // }(jQuery));
    // $('.callout').callOutBox();

$.getJSON('https://spreadsheets.google.com/feeds/list/1IT57mBl8Eu8r-yCRt8srnxYb9nAtp57U1ZpHq5nosY0/od6/public/values?alt=json&callback=?', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var state = data.feed.entry[i]['gsx$state']['$t'];
    var title = data.feed.entry[i]['gsx$title']['$t'];

      careers = $('<ul class="bulleted"/>');
      careers.append('<li>' + title + '</li>');

      if (state == 'California') {
        $('.california-list').append(careers);
      }

      if (state == 'Colorado') {
        $('.colorado-list').append(careers);
      }

      if (state == 'Texas') {
        $('.texas-list').append(careers);
      }

      if (state == 'Utah') {
        $('.utah-list').append(careers);
      }
  }

});

$.getJSON('https://spreadsheets.google.com/feeds/list/1CnZNSuuKnXgiDRU3I-FkcM8xXvo_Nxpj-zuo4iwyqxE/od6/public/values?alt=json&callback=?', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var state = data.feed.entry[i]['gsx$state']['$t'];
    var title = data.feed.entry[i]['gsx$title']['$t'];

      careers = $('<ul class="bulleted"/>');
      careers.append('<li>' + title + '</li>');

      if (state == 'California') {
        $('.esp-california-list').append(careers);
      }

      if (state == 'Colorado') {
        $('.esp-colorado-list').append(careers);
      }

      if (state == 'Texas') {
        $('.esp-texas-list').append(careers);
      }

      if (state == 'Utah') {
        $('.esp-utah-list').append(careers);
      }
  }

});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write

    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));

$.getJSON('https://spreadsheets.google.com/feeds/list/1OUfkaY35qyxLa15Fw1mv9KZSYYAh01EBoAH8lC197sc/od6/public/values?alt=json&callback=?', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var title = data.feed.entry[i]['gsx$title']['$t'];
    var link = data.feed.entry[i]['gsx$link']['$t'];

      events = $('<ul class="vertical"/>');
      events.append('<li><a class="b" href="' + link + '">' + title + '</a><br></li>');

      $('.events-list').append(events);

  }

});

var smallBreakPoint = 640;
var mediumBreakPoint = 768;
// $('.image-swap').hover(
//   function () {
//     $('.' + $(this).attr("id")).slideToggle();
//   }
// );

(function($) {

	$.fn.jumpTo = function() {
		$('<option value="">Jump to…</option>').appendTo('#anchor');
		$('.jumpTo-anchor').each(function(index){
			$('<option value="'+$(this).attr('id')+'">'+$(this).text()+'</option>').appendTo('#anchor');
		});

		$('#anchor').change(function(){
			var divPosition = $('#'+$(this).val()).offset();
			$('html, body').animate({scrollTop: divPosition.top}, "slow");
		});
	}

}(jQuery));

$('.jumpTo').jumpTo();
/* ==========================================================================
    Main -- Version: 0.4.0 - Updated: 2/20/2014
    ========================================================================== */

// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});

// Set year
(function($) {

  $.fn.getYear = function() {
    var d = new Date();
    var x = document.getElementById("year");
    x.innerHTML=d.getFullYear();
  }

}(jQuery));

$('.getYear').getYear();

// Open all external links in a new window
$('a[href^="http://"], a[href^="https://"]').attr('target','_blank');

$('#search-query').keydown(function(event) {
  if (event.keyCode == 13) {
    this.form.submit();
    return false;
  }
});

/* ==========================================================================
    Modal -- Version: 1.9.0.0 - Updated: 4/28/2014
    ========================================================================== */

    $(function(){

    	var index = $('.modal').index();

    	$(".modal").each(function(i) {
    		var total = $(".modal").size() - 1;

    		if (i != total) {
    			next = i + 2;
    			$(this).find('.modal-footer').append("<a href='#' class='btn btn-primary right mobile-full modal-next' rel='" + next + "'>Next</a>");
    		}

    		if (i != 0) {
    			prev = i;
    			$(this).find('.modal-footer').append("<a href='#' class='btn btn-primary left mobile-full modal-prev' rel='" + prev + "'>Previous</a>");
    		}
    	});

    	$('.modal-button').click(function() {
    		var modal = $(this).attr('id');
    		loadPopup(modal);
    		return false;
    	});

    	$('.modal-next').click(function() {
    		var modal = $(this).attr('next');
    		var currModal = modal - 1;
    		loadPopup(modal, currModal);
    		return false;
    	});

    	$('.modal-prev').click(function() {
    		var modal = $(this).attr('prev');
    		var currModal = modal - 1 + 2;
    		loadPopup(modal, currModal);
    		return false;
    	});

			// event for close the popup
			$('.modal-close').click(function() {
				disablePopup();
				return false;
			});

			$(this).keyup(function(event) {
				if (event.which === 27) {
					disablePopup();
				}
			});

			$('.modal-overlay').click(function() {
				disablePopup();
				return false;
			});
		});

    // check cookie
    // var visited = $.cookie("visited")

    // function openSignUp() {
    //   if (visited == null) {
    //     setTimeout(function() {
    //       loadSignUp();
    //     },10000);
    //     $.cookie('visited', 'yes');
    //   }
    //   // set cookie, expire after 7 days
    //   $.cookie('visited', 'yes', { expires: 7 });
    // }
    // openSignUp();

    // function loadSignUp() {
    //   $('#signUp').css({
    //     'margin-top': -$('#signUp').height() / 2,
    //     'display': 'block'
    //   });
    //   $('.modal-overlay').fadeIn('normal');
    // }

    function loadPopup(modal, currModal) {
     $('#modal' + currModal).css({
      'display': 'none'
    });
     $('#modal' + modal).css({
      'margin-top': -$('#modal' + modal).height() / 2,
      'display': 'block'
    });
     $('.modal-next').attr('next', modal - 1 + 2);
     $('.modal-prev').attr('prev', modal - 1);
     $('#modal' + modal).fadeIn(0500);
     $('.modal-overlay').fadeIn('normal');
   }

   function disablePopup() {
     $('.modal-container').fadeOut('normal');
     $('.modal-overlay').fadeOut('normal');
   }

$.getJSON('https://spreadsheets.google.com/feeds/list/1QqyGdDYVPOgVDtRHw_ehIcM0iRV-vajR5RF0k5AAzWo/od6/public/values?alt=json&callback=?', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var title = data.feed.entry[i]['gsx$title']['$t'];
    var link = data.feed.entry[i]['gsx$link']['$t'];
    var lede = data.feed.entry[i]['gsx$lede']['$t'];

      news = $('<ul class="vertical lined"/>');
      news.append('<li><a class="b" href="' + link + '">' + title + '</a><br>' + lede + '</li>');

      $('.news-list').append(news);

  }

});

/* ==========================================================================
    Sticky -- Version: 0.2.1
   ========================================================================== */

if (!!$('.sticky').offset()) {
	$(function(){
		var stickyTop = $('.sticky').offset().top;

		var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyTop){
			$('.sticky').addClass('js-fixed');
			$('.spacer').css({'height':$('.sticky').height()+'px'});
		} else {
			$('.sticky').removeClass('js-fixed');
			$('.spacer').css({'height':'0px'});
		}
	};

	stickyNav();

		$(window).scroll(function(){
			stickyNav();
		});
	});
}
