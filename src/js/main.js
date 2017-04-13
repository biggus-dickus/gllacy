(function() {
  'use strict';

  angular.module('glApp', []);
})();


(function() {
  'use strict';

  angular.module('glApp').service('FetchData', fetchData);

  fetchData.$inject = ['$http'];

  function fetchData($http) {
    this.getData = function(url) {
      return $http.get(url, { cache: true })

        .then(function(response) {
            return response.data;
          },

          function(response) {
            console.log('Houston, we had problems while addressing REST: ' + url + ', ' + response.status + ', ' + response.statusText);
          });
    };
  }

})();


(function() {
  'use strict';

  angular.module('glApp').controller('ProductsController', ProductsController);

  ProductsController.$inject = ['FetchData'];

  function ProductsController(FetchData) {
    var self = this;
    this.products = {};
    this.featuredProducts = {};

    FetchData.getData('/data/products.json')
      .then(function(data) {
        self.products = data;

        self.featuredProducts = data.filter(function(product) {
          if(product.isFeatured === true) {
            return product;
          }
        });
      });
  }

})();


(function() {
  'use strict';

  angular.module('glApp').component('productsList', {
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
