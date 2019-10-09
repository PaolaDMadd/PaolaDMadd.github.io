
function init(){
  var mapOptions = {
    center: new google.maps.LatLng(51.514081, -0.103714),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript(){
  var script = document.createElement('script');
  script.src= 'https://www.google.com/maps/d/u/0/embed?mid=1Vp0W1_0veGtRR4-Eqga3ez98C2AgWYDA"';
  document.body.appendChild(script);
window.onload = loadScript;
}
