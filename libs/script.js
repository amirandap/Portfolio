(function(){
	'use strict';

	var settings = {
		global: {
			lineSize: getComputedStyle(document.querySelectorAll('.header-line')[0]).width, // if changed, please also change $line-size in scss
			lineMaxWidth: '127px', // % or px
			lineLeftMargin: '34px', // % or px
			headerFinalStyles: {
				left: 0,
				fontSize: 28,
				// height: 142,
				lineHeight: 34,
				paddingBottom: 8,
				// paddingTop: 37,
				// paddingLeft: 0,
				letterSpacing: 1.7
			}
		}
	};

	// The entire animation is broken down into phases.
	// Each phase is described in the comments
	//
	// Param startAt is time from beginning of animation.
	// You can use numbers in ms, or use params from other phases
	// to set it relative to that phase.
	//
	// For example:
	// 		settings.phaseTwo.startAt
	// will start at the START of phaseTwo
	// 		settings.phaseTwo.startAt + settings.phaseTwo.duration
	// will start at the END of phaseTwo
	// 		settings.phaseTwo.startAt + settings.phaseTwo.duration - 250
	// will start 250ms before the END of phaseTwo
	// etc.
	//
	// Param duration is simply the duration of the animation in ms.
	//
	// Param easing sets easing for that phase.
	// See http://velocityjs.org/#easing

	settings.phaseHeader = { // headers show up (runs parallel with phaseLineGrowUp)
		startAt: 0,
		duration: 2000,
		easing: 'easeInOutQuart'
	};

	settings.phaseLineGrowUp = { // vertical line grows (runs parallel with phaseHeader)
		startAt: 0,
		duration: 2000,
		easing: 'easeInOutQuart'
	};

	// In order to achieve the circular movement for the header move:
	// - set easeOut* easing for horizontal (X) axis
	// - set easeIn* easing for vertical (Y) axis

	settings.phaseHeaderMoveX = { // header moves - horizontal axis
		startAt: settings.phaseHeader.startAt+settings.phaseHeader.duration,
		duration: 750,
		easing: 'easeOutSine'
	};

	settings.phaseHeaderMoveY = { // header moves - vertical axis
		startAt: settings.phaseHeaderMoveX.startAt,
		duration: 750,
		easing: 'easeInSine'
	};

	settings.phaseLogoGrows = { // logo grows
		startAt: settings.phaseHeaderMoveX.startAt + settings.phaseHeaderMoveX.duration - 150,
		duration: 350,
		easing: [ 250, 15 ] // spring easing - see http://velocityjs.org/#easing
	};

	settings.phaseContentSlidesIn = { // content slides in
		startAt: settings.phaseLogoGrows.startAt + 150,
		duration: 350,
		easing: 'easeIn'
	};

	settings.phaseLineShrinksDown = { // vertical line shrinks
		startAt: settings.phaseHeaderMoveX.startAt+settings.phaseHeaderMoveX.duration,
		duration: 750,
		easing: 'easeInSine'
	};

	settings.phaseLineGrowsRight = { // horizontal line grows
		startAt: settings.phaseLineShrinksDown.startAt+settings.phaseLineShrinksDown.duration,
		duration: 750,
		easing: 'easeOutSine'
	};


	var el = {};
	el.intro = 			document.querySelectorAll('.intro')[0];
	el.header = 		el.intro.querySelectorAll('header')[0];
	el.line = 			el.header.querySelectorAll('.header-line')[0];
	el.headerTop = 		el.header.querySelectorAll('.header-top .wrap')[0];
	el.headerBottom = 	el.header.querySelectorAll('.header-bottom .wrap')[0];
	el.logo = 			el.intro.querySelectorAll('.logo')[0];
	el.content = 		el.intro.querySelectorAll('.content')[0];



	animate(el.headerTop, {top: '0%'}, 'phaseHeader');
	animate(el.headerBottom, {bottom: '0%'}, 'phaseHeader');
	animate(el.line, {height: '100%', bottom: 0}, 'phaseLineGrowUp', {
		complete: function() {
			setStyles(el.header, {
				paddingTop: 'inherit',
				paddingBottom: 'inherit',
				height: 'auto',
			})
		}
	});

	animate(el.header, settings.global.headerFinalStyles, 'phaseHeaderMoveX', {
		begin: function(){
			var headerPosition = position(el.header, -0.5, -0.5);
			setStyles(el.header, {left: headerPosition.left+'px', top: headerPosition.top+'px',  transform: 'translateX(0) translateY(0)'});
		},
		complete: function(){
			setStyles(el.header, {transform: 'translateX(0) translateY(0)'});
		}
	});
	animate(el.header, {top: 0}, 'phaseHeaderMoveY', {
		complete: function(){
			setStyles(el.header, {transform: 'translateX(0) translateY(0)'});
		}
	});

	animate(el.logo, {scale: 1}, 'phaseLogoGrows', {
		begin: function(){
			Velocity(el.logo, {scale: 0}, {duration: 0});
		}
	});
	animate(el.content, {top: 0, opacity: 1}, 'phaseContentSlidesIn');

	animate(el.line, {height: settings.global.lineSize}, 'phaseLineShrinksDown');

	animate(el.line, {left: settings.global.lineLeftMargin, width: settings.global.lineMaxWidth}, 'phaseLineGrowsRight');




	function position(elt, modX, modY) {
		modX = modX || 0;
		modY = modY || 0;
		var bodyElt = document.body,
			eltStyle = getComputedStyle(elt),
			rect = elt.getBoundingClientRect();

		// console.log(elt.ofsetLeft, bodyElt .scrollLeft, rect.width * modX);

		return {
			top: elt.offsetTop + rect.height * modY - parseInt(eltStyle.marginTop),
			left: elt.offsetLeft + rect.width * modX - parseInt(eltStyle.marginLeft)
		}
	}

	function animate(elt, properties, phase, additionalOptions){
		if(typeof(settings[phase])=='undefined') return;

		var options = {
			duration: settings[phase].duration,
			delay: settings[phase].startAt,
			easing: settings[phase].easing,
			queue: false
		};

		if(typeof(options.delay)=='undefined') return;
		if(typeof(options.duration)=='undefined') options.duration = 1000;
		if(typeof(options.easing)=='undefined') options.easing = 'linear';

		for(var o in additionalOptions){
			options[o] = additionalOptions[o];
		}

		Velocity(elt, properties, options);
	}

	function setStyles(elt, properties){
		for(var prop in properties){
			elt.style[prop] = properties[prop];
		}
	}
})();
