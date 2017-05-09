(function() {
  'use strict';

  angular.module('glApp').component('productsList', {
    bindings: {
      products: '<'
    },
    templateUrl: '../templates/products.tpl.html'
  });
})();
