// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTfSXIMQhASVUoBDVRF3o7p8Jeq3r9D9g",
  authDomain: "augmented-rpg.firebaseapp.com",
  databaseURL: "https://augmented-rpg.firebaseio.com",
  projectId: "augmented-rpg",
  storageBucket: "augmented-rpg.appspot.com",
  messagingSenderId: "1076506960196",
  appId: "1:1076506960196:web:3636ba353c7103f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.


var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('mapContainer'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}