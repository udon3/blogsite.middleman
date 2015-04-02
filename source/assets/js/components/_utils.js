SUKO443.Utils = {
	/*_setGlobalVars: function(global) {
	  return function(value) {
	    global.someVarName = value;
	  }
	},*/
	/*globalVars: {
		isMobile: true,
		screenIs: 'small'
	}*/
	_getWindowWidth: function(){
		return window.innerWidth;		
	},
	//window width detection:
	//used with navShowHide - navigation.js
	detectWindowWidth: function(){
		var width = SUKO443.Utils._getWindowWidth();

		if (width < 600) {
			isMobile = true;
			screenIs = 'small';
		} else {
			isMobile = false;
			if (width <= 800){
				screenIs = 'medium';				
			} else {
				if (width > 800){
					screenIs = 'large';				
				}
			}
		}
	},

	
	
	//form validation
	/*
		dependencies: jquery, jquery.validate.js
	*/
	setUpValidation: function(){
		$('#contact-form').validate({
			rules: {
				fname: 'required',
				femail: {
					required: true,
					email: true
				},
				fmessage: 'required'
			},
			messages: {
				fname: 'Please enter your name',
				femail: 'Please enter a valid email address',
				fmessage: 'Please enter a message'
			},
			errorElement: 'span',
			errorPlacement: function(error, element){
				error.insertAfter(element.prev());
			},
			errorClass: 'invalid',
			
			submitHandler: function(form){
				form.submit();
			}

		});
	}
};



		  
	
		








	