(function() {
  'use strict';

  angular.module('glApp', []);
})();


(function() {
  'use strict';

  angular.module('glApp').service('FetchData', fetchData);

  function fetchData($http) {
    this.getData = function(url) {
      return $http.get(url, { cache: true })
          .then(
              function(response) {
                return response.data;
              },
              function(response) {
                console.log('Houston, we had problems while addressing REST: ' + url + ', ' + response.status + ', ' + response.statusText);
              });
    };
  }

  fetchData.$inject = ['$http'];
})();


(function() {
  'use strict';

  angular.module('glApp').component('products', {
    bindings: { products: '<' },
    templateUrl: '../templates/products.tpl.html',
    controller: Controller
  });

  function Controller(FetchData) {
    var self = this;
    this.products = {};

    FetchData.getData('/data/products.json')
        .then(function(data) {
          self.products = data;
        });
  }

  Controller.$inject = ['FetchData'];
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
