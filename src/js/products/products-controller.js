(function() {
  'use strict';

  angular.module('glApp').controller('ProductsController', ProductsController);

  ProductsController.$inject = ['FetchData'];

  function ProductsController(FetchData) {
    var self = this;

    this.products = {};
    this.featuredProducts = {};
    this.loading = true;

    FetchData.getData('/data/products.json')
      .then(function(data) {
        self.products = data;

        self.featuredProducts = data.filter(function(product) {
          if(product.isFeatured === true) {
            return product;
          }
        });

        self.loading = false;
      });
  }

})();
