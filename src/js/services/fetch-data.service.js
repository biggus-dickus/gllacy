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
