"use strict";
// (function(){

	var infowindowHasBeenOpened = false;

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 7,
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	// var location1 = "927 TX-80, San Marcos, TX 78666";
	// var location2 = "Dr.-Sauerbruch-Straße 1, 93133 Burglengenfeld, Germany";
	// var location3 = "1914 Laivita Mist, San Antonio, TX 78251";

	var locations = [
		// "Dr.-Sauerbruch-Straße 1, 93133 Burglengenfeld, Germany",
		"410 Bagby St, Houston, TX 77002",
		"1914 Laivita Mist, San Antonio, TX 78251",
		"927 TX-80, San Marcos, TX 78666"
	]

	var dropPinImg = [
		"/img/fish.png",
		"/img/house.png",
		"/img/fazolis-logo.png"
	]

	// Init geocoder object
	var geocoder = new google.maps.Geocoder();

	// Geocode our address
	for(var i = 0; i <= 2; i+= 1){
	geocoder.geocode({ "address": locations[i] }, function(results, status){

	   // Check for a successful result
	   if (status == google.maps.GeocoderStatus.OK) {

	       // Recenter the map over the address
	       map.setCenter(results[0].geometry.location);
	   } else {

	       // Show an error message with the status if our request fails
	       alert("Geocoding was not successful - STATUS: " + status);
	   }
		var favRestaurant = results[0].geometry.location;

			var dropPins = dropPinImg[2];
			var marker = new google.maps.Marker({
			    position: favRestaurant,
			    map: map,
			    icon: dropPins,
			    animation: google.maps.Animation.DROP
			});


		var contentString = document.getElementById("contentString").innerHTML;

		// Create a new infoWindow object with content
		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		});


		marker.addListener('click', function () {
			if (!infowindowHasBeenOpened) {
				infowindow.open(map, marker);
				infowindowHasBeenOpened = true
			} else if (infowindowHasBeenOpened) {
				infowindow.close();
				infowindowHasBeenOpened = false
			}
		})

		var contentString = document.getElementById("contentString").innerHTML;

		// Create a new infoWindow object with content
		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		});


		marker.addListener('click', function () {
			if (!infowindowHasBeenOpened) {
				infowindow.open(map, marker);
				infowindowHasBeenOpened = true
			} else if (infowindowHasBeenOpened) {
				infowindow.close();
				infowindowHasBeenOpened = false
			}
		})

	})
	}


// })();

//To Do's

//Add multiple locations (x3)