(function() {
  'use strict';

  var gllacyApp = angular.module('gllacyApp', []);

  gllacyApp.component('products', {
    bindings: { products: '<' },
    templateUrl: '../templates/products.tpl.html'
  });

})();


function initMap() {
  var academy = {lat: 59.938614, lng: 30.323032},
      mapNode = document.getElementById('google-map');

  if (mapNode) {
    var map = new google.maps.Map(mapNode, {
      zoom: 16,
      center: {lat: 59.9392, lng: 30.323032},
      scrollwheel: false
    });

    var marker = new google.maps.Marker({
      position: academy,
      map: map,
      icon: '../img/sprite-src/icecream-pin.png'
    });
  }
}
