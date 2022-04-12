"use strict";
if ( window.matchMedia("(pointer: coarse)").matches )  {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window
			.matchMedia('(orientation: portrait)')
			.addListener(() => setTimeout(() => location.reload(), 100))
	;
} else {
	window.addEventListener('resize', () => setTimeout(() => location.reload(), 100));
}
