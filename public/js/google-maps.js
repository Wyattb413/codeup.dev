"use strict";
// (function(){

	var infowindowHasBeenOpened = false;

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 18,
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var address = "927 TX-80, San Marcos, TX 78666";
    // var address = "Burglengenfeld, Germany"

	// Init geocoder object
	var geocoder = new google.maps.Geocoder();

	// Geocode our address
	geocoder.geocode({ "address": address }, function(results, status){

	   // Check for a successful result
	   if (status == google.maps.GeocoderStatus.OK) {

	       // Recenter the map over the address
	       map.setCenter(results[0].geometry.location);
	   } else {

	       // Show an error message with the status if our request fails
	       alert("Geocoding was not successful - STATUS: " + status);
	   }
		var favRestaurant = results[0].geometry.location;

		// Add the marker to our existing map
		var marker = new google.maps.Marker({
		    position: favRestaurant,
		    map: map,
		    icon: "/img/fazolis-logo.png",
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

	})


// })();