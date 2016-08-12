// $(document).ready(function(){
"use strict";

//Alert that page has been loaded
	// $(window).load(function () {
	//     alert('page is loaded');
	// });

//Changes color of main-header
	$("#main-header").css("color", "#288C85");

//Alerts main-header
	// $(function() {
	// 	alert($("#main-header").text());
	// });

//Creates border around class "codeup"
	$(".codeup").css("border", "1px solid red");
	$(".codeup").css("outline-style", "double");

//Sets font size of li elements to 20px
	$("li").css("font-size", "20px");

//Highlights all h1, p, li in yellow
	$("#span-background-color").css("background-color", "black");
	$("#span-background-color").css("color", "white");

//Alerts h1 elements
	// $(function(){
	// 	alert($("h1").text());
	// });

//Sets background image
	$("body").css('background-image', 'url("/img/upfeathers.png")');

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


// });