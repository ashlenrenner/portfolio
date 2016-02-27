//custom JS file
//scrollTo
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

//mosaic
jQuery(function($){

  $('.circle').mosaic({
    opacity		:	0.8			//Opacity for overlay (0-1)
  });

  $('.fade').mosaic();

  $('.bar').mosaic({
    animation	:	'slide'		//fade or slide
  });

  $('.bar2').mosaic({
    animation	:	'slide'		//fade or slide
  });

  $('.bar3').mosaic({
    animation	:	'slide',	//fade or slide
    anchor_y	:	'top'		//Vertical anchor position
  });

  $('.cover').mosaic({
    animation	:	'slide',	//fade or slide
    hover_x		:	'400px'		//Horizontal position on hover
  });

  $('.cover2').mosaic({
    animation	:	'slide',	//fade or slide
    anchor_y	:	'top',		//Vertical anchor position
    hover_y		:	'80px'		//Vertical position on hover
  });

  $('.cover3').mosaic({
    animation	:	'slide',	//fade or slide
    hover_x		:	'400px',	//Horizontal position on hover
    hover_y		:	'300px'		//Vertical position on hover
  });

  });
