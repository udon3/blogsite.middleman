//INIT

$(document).ready(function(){
	window.BLOGSITE.Utils.detectWindowWidth();
	window.BLOGSITE.Navigation.navShowHide();
	
	// sticky nav for non-mobile/sml-tablet only - issue with focus on contact form page needs fixing (something to do with keyboards appearing?)
	if(screenIs =='large'){
		window.BLOGSITE.Navigation.stickyNav();
	}
	//window.BLOGSITE.Navigation.stickyNav();

	window.BLOGSITE.Utils.setUpValidation();


	//only call once on resize:
	var fnId; //global variable for timeOut
	$(window).resize(function() {
	    clearTimeout(fnId);
	    fnId = setTimeout(resizeComplete, 500);	    //delay calling resizeComplete 
	});
	function resizeComplete(){
	  //now run the function:
	  window.BLOGSITE.Utils.detectWindowWidth();
	  window.BLOGSITE.Navigation.navShowHide();

	  //console.debug(isMobile);
	}

});


BLOGSITE.Misc.toggleElement('toggle'); 




//consider using FastClick if supporting mobile (to remove click delays on browsers with touch UIs):
//http://ftlabs.github.io/fastclick/
/*
$(window).load(function() {
	//Polyfill 
	 new FastClick(document.body);
	
});*/