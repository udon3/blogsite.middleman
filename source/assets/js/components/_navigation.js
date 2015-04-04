
BLOGSITE.Navigation = {
	/*
	*	show/hide navigation 
	*		dependency: Utils.detectWindowWidth()
	*		add or remove 'is-hidden' and 'mobile' classes to button and nav 
	*/
	navShowHide: function(){
		var $header = $('header'),
				$headwrap = $('#headwrap'),
				$button = $('.icon-menu', $header);

		if (!isMobile) {
			$button.addClass('is-hidden');
			$headwrap.removeClass('is-collapsed mobile');
		} else {
			$('button.is-hidden', $header).removeClass('.is-hidden');
			$headwrap.addClass('is-collapsed mobile');
			$button.removeClass('is-hidden');
			//Run the mobile nav function
			window.BLOGSITE.Navigation.mobileNav($button, $headwrap);
		}
		

		//console.debug('is mobile? ' + isMobile);

		$button.on(function(){
			//$headwrap.removeClass('is-hidden');
		})
	},
	/*
	*	mobile nav show hide
	*		dependency: Navigation.navSHowHide()
	*		on click add or remove 'is-hidden' class to button and nav 
	*/
	mobileNav: function($b, $hw){
		
		$b.on('click', function(){
			var hiddenClass = 'is-collapsed';
			if ($hw.hasClass(hiddenClass)){
				$hw.removeClass(hiddenClass);
			} else {
				$hw.addClass(hiddenClass);
			}
			
		});



	},
	/*
	*		Sticky nav - make the main nav sticky 
	*		dependency: Utils.detectWindowWidth() 
	*		on scroll 
	*/
	stickyNav: function(){
		var $header = $('header'),
				$headwrap = $('#headwrap', $header),
				$burger = $('button', $header),
				$el;

		//target different element for stickiness depending on screen size
		if (isMobile){
			$el = $header;
		} else {
			$el = $headwrap;
		}

		$(window).scroll(function(){
			
			if ($(this).scrollTop() > 100){
				//add a class to the header (for control over logo size for non-mobile)
				$header.addClass('hasSticky');
				//add class to element for fixed position
				$el.addClass('is-sticky');				
			} else {
				$header.removeClass('hasSticky');
				$el.removeClass('is-sticky');				
				
			}
			
		});

		// fix iOS fixed positioning for form focus (not working?)
		if (isMobile){
			 var $body = $('body'); 
	    $(document).on('focus', 'input', function(e) {
	        $body.addClass('fixfixed');
	    }).on('blur', 'input', function(e) {
	        $body.removeClass('fixfixed');
	    });
		}
	}

}


//window width detection:

