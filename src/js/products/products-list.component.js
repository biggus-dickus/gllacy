(function() {
  'use strict';

  angular.module('glApp').component('productsList', {
    bindings: {
      products: '<',
      loading: '<'
    },
    templateUrl: '../templates/products.tpl.html'
  });
})();
