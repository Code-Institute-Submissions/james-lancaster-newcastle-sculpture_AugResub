// Initialize and add the map
function initMap() {
    // The location of Newcastle cit centre (Grey's Monument)
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 54.973848, lng: -1.613146 }
    });

    var labels = [
        "Articulated opposites",
        "Basil Hume",
        "Martin Luther King",
        "Man with potential selves",
        "The response",
        "Black rhinoceros",
        "Alan Shearer",
        "Wor Jackie",
        "River god",
        "Man with pigeons",
        "Siren",
        "River Tyne"
    ];

    var locations = [
        { lat: 54.971281, lng: -1.608609 }, // Arnott Articulated opposites
        { lat: 54.978992, lng: -1.612048 }, // Boonham Hume
        { lat: 54.979351, lng: -1.616164 }, // Boonham King
        { lat: 54.969531, lng: -1.616541 }, // Henry Man
        { lat: 54.978567, lng: -1.612749 }, // Goscombe John Response
        { lat: 54.980153, lng: -1.612609 }, // Hill Rhinoceros
        { lat: 54.974594, lng: -1.620827 }, // Maley Shearer
        { lat: 54.974866, lng: -1.619762 }, // Robinson Wor Jackie
        { lat: 54.970338, lng: -1.600581 }, // Wallace River god
        { lat: 54.975083, lng: -1.613727 }, // Wallace Pigeons
        { lat: 54.970509, lng: -1.601313 }, // Wallace Siren
        { lat: 54.978992, lng: -1.612048 } // Wynne River Tyne
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


    /*
    var marker = new google.maps.Marker({
        position: newcastle,
        map: map,
    });
    */


/*
var map; // we declare a variable to hold our map here because we want it to be global so we can access it anywhere in the app
*/

/*function initMap() { // initialises the map; called by the Google Maps API, ie, via initMap in html script
    map = new google.maps.Map(document.getElementById('map'), { // initialise the map object - pass it the logical div where the map lives - ie, the div id
        center: {lat: xxx, lng: xxx}, // map options - how we configure the map; there are about 12 options we could have use
        zoom: 9,
        streetViewControl: false
    });
    let markers = stations.features; // this is to access the stations data which was his JSON file (const stations); we'll have to go through this with a loop
// console.log(markers);
    for(var x = 0; x < markers.length; x++){ // a for loop; set counter at 0; keep looping while the counter is > the no of markers; increaser the vlaue by 1 each time through the loop
    let stationName = markers[x].properties.stopname; // 1st item
    let latitude = markers[x].geometry.coordinates[1]; // 2nd item
    let longitude = markers[x].geometry.coordinates[0]; // 3rd item
    //console.log(stationaName + ": " + latitude + " " + longitude); // assign them respectively to these variables - all from JSON data */ /*
    dropMarker(latitude, longitude, stationName);
    }
}

function dropMarker(lat,lng, stationName){ // drops the markers on each station; the above data is passed to this function; the map has been displayed; we have the map, loop through the data, and drop the markers at the lat/lng
    var location = {lat: lat, lng: lng}; // create a location object
    var contentString = "h4" + stationName + "</h4>"; // create a content string with the station name
    var infowindow = new google.maps.InforWindow({ // create information window, taken from Google Maps API; 
            content: contentString // we pass it the content object
        });
    var marker = new google.maps.Marker({position: location, map: map, title: stationName}); // now create a marker object; to do that we need the position, the map we're talking about, and the title of the marker, ie, the station name
    marker.addListener('click', function() { // so we have to set up a click event
            infowindow.open(map, marker); // when it occurs, we run this function which on the infowindow object opens it on our map and on our marker; so each marker has ane event listern listening for a click
        });
}

// Mark Lassof. Javascript Google Maps Api tutorial. Framework Tech Media 19 Sep 2019 https://www.youtube.com/watch?v=8NUqDc1bQ84 */