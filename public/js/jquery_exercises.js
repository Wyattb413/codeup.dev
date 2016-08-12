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
	$('li').hover(
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
var correctSequence = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65", "13"];
var readKeyUp = $(document).keyup(function(event){});
var keyEntered = '';
var lengthOfKeyCode = keyEntered.length;
var userInputArray = [];

	$(document).keyup(function(event){
		if(lengthOfKeyCode <= 9){
			keyEntered += (event.keyCode + ',');
		} else {
			keyEntered += (event.keyCode);
		}
		lengthOfKeyCode ++;
		if(lengthOfKeyCode == 11){
			userInputArray = keyEntered.split(',');
			if(JSON.stringify(correctSequence) == JSON.stringify(userInputArray)){
			    alert('Collections are equal');
			}else{
			    alert('Collections are not equal');
			}
			userInputArray = [];
			keyEntered = '';
			lengthOfKeyCode = 0;
		};
		console.log(lengthOfKeyCode);
		// console.log(keyEntered);
		console.log(userInputArray);
	})

	// $(document).keyup(function(event){
	// 	if(readKeyUp === correctSequence){
	// 		alert("You Got It Correct!");
	// 	}
	// 	console.log(readKeyUp);
	// });




	// {
 //            console.log(event.keyCode);
 //        });


// });