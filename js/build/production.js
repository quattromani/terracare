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

    (function($) {
      $.fn.callOutBox = function() {
      	$('.callout').hover(function() {
      		$(this).find('.callout-message').toggle();
      	});
      }

    }(jQuery));
    $('.callout').callOutBox();

var smallBreakPoint = 640;
var mediumBreakPoint = 768;
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
/* ==========================================================================
    Modal -- Version: 1.9.0.0 - Updated: 4/28/2014
   ========================================================================== */

$(function(){
	$('.modal-button').click(function() {
		var modal = $(this).attr('id');
		loadPopup(modal);
		return false;
	});
	$('.modal-next').click(function() {
		var modal = $(this).attr('data-next');
		var currModal = modal - 1;
		loadPopup(modal, currModal);
		return false;
	});
	$('.modal-prev').click(function() {
		var modal = $(this).attr('data-prev');
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

function loadPopup(modal, currModal) {
	$('#modal' + currModal).css({
		'display': 'none'
	});
	$('#modal' + modal).css({
		'margin-top': -$('#modal' + modal).height() / 2,
		'display': 'block'
	});
	$('.modal-next').attr('data-next', modal - 1 + 2);
	$('.modal-prev').attr('data-prev', modal - 1);
	$('#modal' + modal).fadeIn(0500);
	$('.modal-overlay').fadeIn('normal');
}

function disablePopup() {
	$('.modal-container').fadeOut('normal');
	$('.modal-overlay').fadeOut('normal');
}
// Our single global object
var alxPrc = {};

// Capitalises a string
// Accepts:
//   str: string
// Returns:
//   string
alxPrc.majusculeFirst = function(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

// Retrieves the value of a GET parameter with a given key
// Accepts:
//   param: string
// Returns:
//   string or null
alxPrc.getParam = function(param) {
  var queryString = window.location.search.substring(1),
      queries = queryString.split('&');
  for (var i in queries) {
    var pair = queries[i].split('=');
    if (pair[0] === param) {
      // Decode the parameter value, replacing %20 with a space etc.
      return decodeURI(pair[1]);
    }
  }
  return null;
};

// Filters posts with the condition `post['property'] == value`
// Accepts:
//   posts - array of post objects and a string
//   property - string of post object property to compare
//   value - filter value of property
// Returns:
//   array of post objects
alxPrc.filterPostsByPropertyValue = function(posts, property, value) {
  var filteredPosts = [];
  // The last element is a null terminator
  posts.pop();
  for (var i in posts) {
    var post = posts[i],
        prop = post[property];

    // Last element of tags is null
    post.tags.pop();

    // The property could be a string, such as a post's category,
    // or an array, such as a post's tags
    if (prop.constructor === String) {
      if (prop.toLowerCase() === value.toLowerCase()) {
        filteredPosts.push(post);
      }
    } else if (prop.constructor === Array) {
      for (var j in prop) {
        if (prop[j].toLowerCase() === value.toLowerCase()) {
          filteredPosts.push(post);
        }
      }
    }
  }

  return filteredPosts;
};

// Formats search results and appends them to the DOM
// Accepts:
//   property: string of object type we're displaying
//   value: string of name of object we're displaying
//   posts: array of post objects
// Returns:
//   undefined
alxPrc.layoutResultsPage = function(property, value, posts) {
  var $container = $('main');
  if ($container.length === 0) return;

  // Update the header
  $container.find('h1').text(alxPrc.majusculeFirst(property)
    + ' Listing for ‘'
    + alxPrc.majusculeFirst(value)
    + '’'
  );

  // Loop through each post to format it
  $results = $container.find('ul.results');
  for (var i in posts) {
    // Create an unordered list of the post's tags
    var tagsList = '<ul class="tags">',
        post     = posts[i],
        tags     = post.tags;

    for (var j in tags) {
      tagsList += ''
        + '<li>'
          + '<a href="/search.html?tags=' + tags[j] + '">' + tags[j] + '</a>'
        + '</li>';
    }
    tagsList += '</ul>';

    $results.append(
      '<li>'
        // Page anchor
        + '<header>'
          + '<h1>'
            + '<a href="' + post.href + '">' + post.title + '</a>'
          + '</h1>'
          // Post date
          + '<h2>'
            + post.date.formatted
            + ' in <a href="/search.html?category=' + post.category + '">'
            +  alxPrc.majusculeFirst(post.category) + '</a>'
          + '</h2>'
          // Tags
          + tagsList
        + '</header>'
      + '</li>'
    );
  }
};

// Formats the search results page for no results
// Accepts:
//   property: string of object type we're displaying
//   value: string of name of object we're displaying
// Returns:
//   undefined
alxPrc.noResultsPage = function(property, value) {
   $('main').find('h1').text('No Results Found.').after(
    '<p>We couldn\'t find anything associated with ‘' + value + '’ here.</p>'
  );
};

// Replaces ERB-style tags with Liquid ones as we can't escape them in posts
// Accepts:
//   elements: jQuery elements in which to replace tags
// Returns:
//   undefined
alxPrc.replaceERBTags = function(elements) {
  elements.each(function() {
    // Only for text blocks at the moment as we'll strip highlighting otherwise
    var $this = $(this),
        txt   = $this.html();

    // Replace <%=  %>with {{ }}
    txt = txt.replace(new RegExp('&lt;%=(.+?)%&gt;', 'g'), '{{$1}}');
    // Replace <% %> with {% %}
    txt = txt.replace(new RegExp('&lt;%(.+?)%&gt;', 'g'), '{%$1%}');

    $this.html(txt);
  });
};

$(function() {
  var parameters = ['category', 'tags'];
  var map = {}
  for (var idx in parameters) {
    map[parameters[idx]] = alxPrc.getParam(parameters[idx]);
  }

  $.each(map, function(type, value) {
    if (value !== null) {
      $.getJSON('/search.json', function(data) {
        posts = alxPrc.filterPostsByPropertyValue(data, type, value);
        if (posts.length === 0) {
          alxPrc.noResultsPage(type, value);
        } else {
          alxPrc.layoutResultsPage(type, value, posts);
        }
      });
    }
  });

  // Replace ERB-style Liquid tags in highlighted code blocks...
  alxPrc.replaceERBTags($('div.highlight').find('code.text'));
  // ... and in inline code
  alxPrc.replaceERBTags($('p code'));
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
