"use strict";

//(function(){

const myApiKey = "c540e652329e6c7bef2f094bfe22e252"; //My Api Key generated August 16, 2016
var divs = $('.weatherDay'); //Gives location for .append to append info to


var latitude = 29.42412;
var longitude = -98.493629;

function apiRequest(latitude, longitude){
	$.get("http://api.openweathermap.org/data/2.5/forecast/daily", { //Gets Api for 5 day forcast
	    "appid": myApiKey,
	    "lon":longitude,
	    "lat":latitude,
	    "cnt":5,
	    units: "imperial"
	}).done(function(data) {
	    console.log(data);
	    getWeather(data);
	}).fail(function(xhr, err, msg){
		console.log(xhr);
		console.log(err);
		console.log(msg);
		alert('something went wrong, check console!');
	});
}

apiRequest(latitude, longitude);

function getWeather(weatherInfo){
	var tempMaxMin = "";
	var weatherDescription = "";
	var humidity = "";
	var weatherImg = "";
	var dateForWeather = "";
	for(var i = 0; i < 5; i ++){
		for(var j = 0; j < 1 ; j ++){
			tempMaxMin = "<p>" + "The high/low for today is: " +"</p>" + "<p>" + weatherInfo.list[i].temp.max + "°F" + " / " + weatherInfo.list[i].temp.min + "°F" + "</p>"
			weatherDescription = "<p>" + "The weather for today is:" + "</p>" + "<p>" + weatherInfo.list[i].weather[0].description + "</p>"
			humidity = "<p>" + "The humidity for today is: " + weatherInfo.list[i].humidity + "%" + "</p>"
			weatherImg = weatherInfo.list[i].weather[0].icon
			dateForWeather = (weatherInfo.list[i].dt * 1000);

			var date = new Date(dateForWeather)
			$(divs[i]).append(date)
			$(divs[i]).append("<div><img src='http://openweathermap.org/img/w/" + weatherImg + ".png'></div>")
			$(tempMaxMin).appendTo(divs[i]);
			$(weatherDescription).appendTo(divs[i]);
			$(humidity).appendTo(divs[i]);
		}
	}
}

$('#locationButton').click(function(){
	latitude = $("#latitudeValue").val();
	longitude = $("#longitudeValue").val();
	for(var i = 0; i < 5; i ++){
		$(divs[i]).empty();
	}
	apiRequest(latitude, longitude);
})



//})();