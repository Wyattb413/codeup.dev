"use-strict";

var navbarLinkElements = document.getElementsByTagName('a');
console.log(navbarLinkElements);

var delay = 2000;
var navBarColor = setTimeout(function()
{
	for (var i = 0; i < navbarLinkElements.length; i++) 
	{
		console.log(navbarLinkElements[i]);
		navbarLinkElements[i].style.color ='red';
		navbarLinkElements[i].style.fontFamily ='fantasy';

	}

}, delay);
