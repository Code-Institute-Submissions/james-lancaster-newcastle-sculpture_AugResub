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
        { lat: 54.969014, lng: -1.618857 }, // Boonham Hume
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