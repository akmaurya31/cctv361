$('#services').owlCarousel({
	loop: false,
	margin: 0,
	nav: true,
	navText: [
	  "<span>&#10508;</span>",
	  "<span>&#10509;</span>"
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
  });



$('#testimonial').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
	"<span>&#10508;</span>",
	"<span>&#10509;</span>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


//sticky & main header
$("#scroll_header").hide();
$(window).scroll(function() {
  if ($(this).scrollTop() > 10) {
    $('#scroll_header').slideDown(500);
    $('#main_header').slideUp(500);
  } else {
    $('#scroll_header').slideUp(500);
    $('#main_header').slideDown(500);
  }
});



//counter
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});



//animated slider
$('#myCarousel').carousel({
    interval: 5000,
 })



 //fancybox image
 $(document).ready(function(){
 
	 $(".filter-button").click(function(){
		 var value = $(this).attr('data-filter');
		 
		 if(value == "all")
		 {
			 //$('.filter').removeClass('hidden');
			 $('.filter').show('1000');
		 }
		 else
		 {
 //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
 //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			 $(".filter").not('.'+value).hide('3000');
			 $('.filter').filter('.'+value).show('3000');
			 
		 }
	 });
	 
	 if ($(".filter-button").removeClass("active")) {
 $(this).removeClass("active");
 }
 $(this).addClass("active");
 
 });
 $(document).ready(function(){
	 //FANCYBOX
	 //https://github.com/fancyapps/fancyBox
	 $(".fancybox").fancybox({
		 openEffect: "none",
		 closeEffect: "none"
	 });
 });
 
 $('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(200);
});