(function() {
  'use strict';

  angular.module('glApp').component('productsList', {
    bindings: {
      loading: '<',
      products: '<'
    },
    templateUrl: '../templates/products.tpl.html'
  });

})();
