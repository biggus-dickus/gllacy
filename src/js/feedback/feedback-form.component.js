(function() {
  'use strict';

  angular.module('glApp').component('feedbackForm', {
    templateUrl: '../templates/feedback-form.tpl.html',
    controller: Controller
  });

  Controller.$inject = ['$http'];


  function Controller($http) {
    var self = this;

    this.data = {};

    this.postData = function(form) {
      $http({
        method: 'POST',
        url: '//httpbin.org/post',
        data: new FormData(form)
      }).then(function(response) {
        console.log(response.data);
      },
        function(response) {
          console.log('Error: ' + response.status + ', ' + response.statusText);
        });
    }
  }
})();
