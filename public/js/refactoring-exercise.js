function addMarkerAndInfoWindow(place){
            var mar = new google.maps.Marker({
                position: place.geometry.location,
                map: map
            });
            var infoWindow = new google.maps.InfoWindow({
                content: place.formatted_address
            });
            infoWindow.open(map, mar);
        }

var mapOptions = {
    zoom: 14,

    // position of codeup
    center: {
        lat:  29.426791,
        lng: -98.489602
    }
}
var map = new google.maps.Map(document.getElementById('my-map'), mapOptions);

var searchTerm = 'austin';

var geoCoder = new google.maps.Geocoder();
geoCoder.geocode({ address: searchTerm }, function(results, stts) {

    if(stts == !google.maps.GeocoderStatus.OK){
        alert("Geocoding was not successful - STATUS: " + stts);
        return;
    }
    // Check for a successful result
    if (stts == google.maps.GeocoderStatus.OK) {
        map.setZoom(4);
        results.forEach(addMarkerAndInfoWindow)
    } else {
        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + stts);
    }
});

document.getElementById('zoom-btn').addEventListener('click', function(e){
    var zoomlevel = document.getElementById('change-zoom').value;
    map.setZoom(parseInt(zoomlevel));
});

// var zoomSelector = document.getElementById('change-zoom').innerHTML
// var zoomSelector1 = document.getElementById('change-zoom')

// for(i = 1; i < 21; i+= 1){
//     zoomSelector += '<option value=' + '"' + [i] + '"' + '>' + [i] + '</option>'
//     zoomSelector1.appendChild(zoomSelector);
// }