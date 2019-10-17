  $(document).ready(function() {
  $("body").noisy ({
    intensity: 0.2,
    size: 200,
    opacity: 0.28,
    randomColors: false, // true by default
    color: "#000000"
  });

  function init() {
    var startPoint = new google.maps.LatLng(51.515825, -0.088057);
    var imagePath =
      "http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png";
    var maoOptions = {
      zoom: 13,
      center: startPoint,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var venueMap = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    //CalloutContent
    var contentString =
      "https://www.google.com/maps/d/u/0/embed?mid=1Vp0W1_0veGtRR4-Eqga3ez98C2AgWYDA";
    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
    });

    //marker
    var marker = new google.maps.Marker({
      position: startPoint,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map, marker);
    });

    // Resize function

    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
