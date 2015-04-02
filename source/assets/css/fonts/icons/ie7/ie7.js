/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-bubble': '&#xe601;',
		'icon-quotes-left': '&#xe602;',
		'icon-search': '&#xe603;',
		'icon-bug': '&#xe604;',
		'icon-menu': '&#xe600;',
		'icon-smiley': '&#xe605;',
		'icon-sad': '&#xe606;',
		'icon-neutral': '&#xe607;',
		'icon-arrow-right': '&#xe608;',
		'icon-arrow-left': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
