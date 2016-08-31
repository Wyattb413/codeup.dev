"use strict";

//(function(){
<!-- ///////////////////////////////////////////////////Varible Declarations/////////////////////////////////////////////////// -->
const myApiKey = "c540e652329e6c7bef2f094bfe22e252";        //my Api Key generated August 16, 2016
var divs = $('.weatherDay');                                //Gives location for .append to append info to
var latitude = 29.42412;                                    //defualt latitude
var longitude = -98.493629;                                 //default longitude
var numberOfDaysForTheForcast = 5

<!-- ////////////////////////////////////////////////Function For Api Request////////////////////////////////////////////////// -->

function apiRequest(latitude, longitude){
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily",  {     //Gets Api for 5 day forcast
        "appid": myApiKey,                                                //gets Api key and adds it to get request
        "lon":longitude,                                                  //gets longitude and adds it to get request
        "lat":latitude,                                                   //gets latitude and adds it to get request
        "cnt":5,                                                          //sets number of forcast days and adds it to get request
        units: "imperial"                                                 //sets units to customary and adds it to get request
    }).done(function(data) {                                              //function for when the request finishes
        console.log(data);                                                //console logs data returned from api request
        getWeather(data);                                                 //passes data returned to getWeather function
    }).fail(function(xhr, err, msg){                                      //function for when the request fails
        console.log(xhr);                                                 //console logs xhr message
        console.log(err);                                                 //console logs err message
        console.log(msg);                                                 //console logs msg message
        alert('something went wrong, check console!');                    //alerts DOM that something went wrong
    });
}

<!-- /////////////////////////////////////////////////Sends Api Request/////////////////////////////////////////////////////// -->

apiRequest(latitude, longitude);                               //runs apiRequest function

<!-- ///////////////////////////////////////////////Getting Weather Logic///////////////////////////////////////////////////// -->

function getWeather(weatherInfo){             //function for getting weather from ajax request
    var tempMaxMin = "";                      //varible for max and min temperature
    var weatherDescription = "";              //varible for weather description
    var humidity = "";                        //varible for humidity
    var weatherImg = "";                      //varible for weather icon displayed
    var dateForWeather = "";                  //varible for setting date
    var videoHTML = "";
    for(var i = 0; i < numberOfDaysForTheForcast; i ++){              //for loop to cycle through 5 day forcast
        var whichDiv = "video" + i
        console.log(whichDiv);
        for(var j = 0; j < 1 ; j ++){         //for loop for cycling through description list
            tempMaxMin =                                                     //gets max and min temperature from ajax request (data)
                 "<p>" + "The high/low for today is: "+                      //gets max and min temperature from ajax request (data)
                 "</p>" + "<p>" + weatherInfo.list[i].temp.max + "°F" +      //gets max and min temperature from ajax request (data)
                 " / " + weatherInfo.list[i].temp.min + "°F" + "</p>"        //gets max and min temperature from ajax request (data)

            weatherDescription = 
                "<p>" + "The weather for today is:" +                                //gets weather description from ajax request (data)
                "</p>" + "<p>" + weatherInfo.list[i].weather[0].description + "</p>" //gets weather description from ajax request (data)

            humidity =                                                    //gets weather humidity from ajax request (data)
                "<p>" + "The humidity for today is: " +                   //gets weather humidity from ajax request (data)
                weatherInfo.list[i].humidity + "%" + "</p>"               //gets weather humidity from ajax request (data)

            weatherImg = weatherInfo.list[i].weather[0].icon          //gets weather icon from ajax request (data)
            weatherImg = "q" + weatherImg
            dateForWeather = (weatherInfo.list[i].dt * 1000);         //gets date of forcast from ajaz request (data)

            var date = new Date(dateForWeather)                      //takes dateForWeather in unix time, converts it to javascript time, and sets it as a date using javascript built-in function
            

            videoHTML =
                "<div>"
                   + "<video preload='preload' id='video' autoplay='autoplay' loop='loop' muted>"
                   +    "<source id='video" + i + "' src='' type='video/mp4'></source>"
                   +"</video>"
                + "</div>"


            $(divs[i]).append(videoHTML);

            var iconToVideo = {
                "q01d": "/vid/wheat_field.mp4", //clear sky - Day
                "q01n": "/vid/wheat_field.mp4", //clear sky - Night
                "q02d": "/vid/wheat_field.mp4", //few clouds - Day
                "q02n": "/vid/wheat_field.mp4", //few clouds - Night
                "q03d": "/vid/wheat_field.mp4", //cloudy - Day
                "q03n": "/vid/wheat_field.mp4", //cloudy - Night
                "q04d": "/vid/storm_clouds.mp4", //cloudy - Day
                "q04n": "/vid/storm_clouds.mp4", //cloudy - Night
                "q09d": "/vid/storm_raindrops_on_window.mp4", //rainy - Day
                "q09n": "/vid/storm_raindrops_on_window.mp4", //rainy - Night
                "q10d": "/vid/storm_raindrops_on_window.mp4", //rainy - Day
                "q10n": "/vid/storm_raindrops_on_window.mp4", //rainy - Night
                "q11d": "/vid/thunderstorm.mp4", //thunderstorm - Day
                "q11n": "/vid/thunderstorm.mp4", //thunderstorm - Night
                "q13d": "/vid/snow.mp4", //snow - Day
                "q13n": "/vid/snow.mp4", //snow - Night
                "q50d": "/vid/mist.mp4", //misty - Day
                "q50n": "/vid/mist.mp4" //misty - Night
            }

                $("#video" + i).attr("src", iconToVideo[weatherImg]);



            weatherImg = weatherInfo.list[i].weather[0].icon
            $(divs[i]).append(date);                                 //appends the date to each div
            $(divs[i]).append("<div><img src='http://openweathermap.org/img/w/" + weatherImg + ".png'></div>")  //appends corresponding weather image to each div
            $(tempMaxMin).appendTo(divs[i]);                         //appends tempature max/min to each div
            $(weatherDescription).appendTo(divs[i]);                 //apends weather description to each div
            $(humidity).appendTo(divs[i]);                           //appends humidity percent to each div
        };
    };
            $('#currentLocation').append(' ' + weatherInfo.city.name); //gives location of weather view
};

<!-- ////////////////////////////////////////////////Location Submit Button///////////////////////////////////////////////// -->

// $('#locationButton').click(function(){
//     latitude = $("#latitudeValue").val();
//     longitude = $("#longitudeValue").val();
//     for(var i = 0; i < 5; i ++){
//         $(divs[i]).empty();
//     }
//     apiRequest(latitude, longitude);
// })

<!-- //////////////////////////////////////////////////Google Maps///////////////////////////////////////////////////////// -->

<!-- //////////////////////////////////////////////////Map Options///////////////////////////////////////////////////////// -->

        var mapOptions = {                  //sets map options
            zoom: 10,                       //sets default zoom level
            center: {                       //sets default center
                lat:  latitude,             //gets values from varibles declared @ top
                lng: longitude              //gets values from varibles declared @ top
            }
        };

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);   //renders google map
        var locationOfWeather = { lat: latitude, lng: longitude };          //set latitude and longitude to varibles declared @ top
        var marker = new google.maps.Marker({                               //adds marker to map
            position: locationOfWeather,                                    //sets marker location to lat and lng varibles
            draggable: true,                                                //allows marker to be dragged
            map: map                                                        //sets marker on specified map
        });

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

        google.maps.event.addListener(marker, 'dragstart', function(evt){        //adds event listener to marker, listening for drag
            $('#currentLocation').html('<p>Currently dragging marker...</p>');   //changes current location text while dragging marker
        });
        google.maps.event.addListener(marker, 'dragend', function(evt){          //add event listener to marker, listens for "release" after drag
            var markerLat = marker.getPosition().lat();
            var markerLng = marker.getPosition().lng();
            $('#currentLocation').html('<p>Marker dropped: Current Lat: ' + markerLat + ' Current Lng: ' + markerLng + '</p>' + 'Viewing weather in: ');
            map.setCenter(marker.getPosition());
            for(var i = 0; i < numberOfDaysForTheForcast; i ++){
                $(divs[i]).empty();
            }
            apiRequest(markerLat, markerLng)
        });
      

//})();