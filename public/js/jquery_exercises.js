// $(document).ready(function(){
"use strict";

//Alert that page has been loaded
	// $(window).load(function () {
	//     alert('page is loaded');
	// });

//Changes color of main-header
	$("#main-header").css("color", "#288C85");

//Changes font color of entire page
	$('body').css('color', 'white');

//Changes background color of entire page
	$('body').css('background-color', 'black');

//Alerts main-header
	// $(function() {
	// 	alert($("#main-header").text());
	// });

//Creates border around class "codeup"
	$('.codeup').css({
		"border" : "2px solid red",
		"outline-style" : "double",
		"outline-color" : "black"
	});

//Sets font size of li elements to 20px
	$("li").css("font-size", "20px");

//Highlights all h1, p, li in yellow
	$("#span-background-color").css({
		"background-color" : "#7E8C62",
		"color" : "white"
	});
	// $("#span-background-color").css("background-color", "#7E8C62");
	// $("#span-background-color").css("color", "white");

//Alerts h1 elements
	// $(function(){
	// 	alert($("h1").text());
	// });

//Sets background image
	$("body").css('background-image', 'url("/img/dark-embro.png")');

//Changes color of h1 on click
	$('#main-header').click(function(){
		$('#header-span').toggleClass('toggleOrange');
	})

//Changes font size of paragraphs to 18px on click
	$('#first-paragraph').dblclick(function(){
		$('p').toggleClass('fontSize18px');
	})

//Changes color of list items on hover
	$('.firstList').hover(
		function() {
			$(this).css("color", "red");
		},
		function() {
			$(this).css("color", "#FF7F00");
		}
	);

	document.ondblclick = function(evt) {
    if (window.getSelection)
        window.getSelection().removeAllRanges();
    else if (document.selection)
        document.selection.empty();
}

//Konami Code

	var codeIndex = 0;

	var konamiKeysValues = {
		up: 38,
		down: 40,
		left: 37,
		right: 39,
		b: 66,
		a: 65,
		enter: 13
	};

	var konamiCode = [
		konamiKeysValues.up,
		konamiKeysValues.up,
		konamiKeysValues.down,
		konamiKeysValues.down,
		konamiKeysValues.left,
		konamiKeysValues.right,
		konamiKeysValues.left,
		konamiKeysValues.right,
		konamiKeysValues.b,
		konamiKeysValues.a,
		konamiKeysValues.enter
	];

	$(document).keyup(function(event){
		if(event.keyCode == konamiCode[codeIndex]) {
			codeIndex += 1;
		} else {
			codeIndex = 0;
		}
	
		if (codeIndex == konamiCode.length) {
			$("#game-div").removeClass("hidden");
		}

	});

//Display Definition Definiton When Definition Title is DblClicked
	$('#showAllAnswers').click(function(event){
		$('.invisible').toggle();
	});

//Adds Rainbow text class
	$('.invisible').addClass('rainbow')

//Selects first <li> in <ul> and sets font weight to bold
	$('.font-weight-bold').each(function(){
		$(this).children().first().css('font-weight', 'bold');
	})

//Adds invisible class to any parent <ul> of any <li> clicked
	$('#parks-national').click(function(event){
		$('#national-parks').children().toggle('.invisible-list')
	})
	$('#parks-texas').click(function(event){
		$('#state-parks-texas').children().toggle('.invisible-list')
	})
	$('#parks-hawaii').click(function(event){
		$('#state-parks-hawaii').children().toggle('.invisible-list')
	})
// });