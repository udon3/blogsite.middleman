BLOGSITE.Misc = {

	/*
	*	toggle element 
	*		add or remove 'is-hidden', toggle class on button
	*		any button/toggler element with class .toggle has this function
	*		The button/toggler must be a direct descendant of element to toggle
	*		BLOGSITE.Misc.toggleElement('toggle');
	*/
	toggleElement: function(classname){

		var $toggler = $('.'+ classname),
				$parent = $toggler.parent(),
				offScreen = true;

		$parent.addClass('is-offscreen');

		$(document).on('click', function (e){
			
			if (!$parent.is(e.target) && $parent.has(e.target).length === 0) {
				//console.log('did not click $parent');
				if (offScreen){
					return;
				} else {
					$parent.addClass('is-offscreen');
					offScreen = true;
				}
				
			} else {
				//console.log('clickd $parent');
				if (offScreen){
					$parent.removeClass('is-offscreen');
					offScreen = false;
				} else {
					$parent.addClass('is-offscreen');
					offScreen = true;
				}
			}
		});

	}


};