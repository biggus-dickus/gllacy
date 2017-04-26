(function() {
  'use strict';

  angular.module('glApp').controller('modalsController', ModalsController);

  function ModalsController() {
    this.showModal = function(elemId) {
      var modalId = document.getElementById(elemId);

      if (modalId) {
        modalId.classList.add('open');
        document.body.classList.add('no-scroll');
      }
    };

    this.hideModal = function(elemId) {
      var modalId = document.getElementById(elemId);

      if (modalId && modalId.classList.contains('open')) {
        modalId.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    };
  }
})();
