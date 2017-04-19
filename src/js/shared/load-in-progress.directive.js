(function () {
  'use strict';

  angular.module('glApp').directive('loadInProgress', directive);

  function directive() {
    return {
      scope: {
        showSpinner: '=loadInProgress'
      },
      link: function(scope, elem) {
        scope.$watch('showSpinner', function (showSpinner) {
          if (showSpinner) {
            elem.append('<div class="loader"></div>');
          } else {
            elem.find('.loader').remove();
          }
        });
      }
    };
  }
})();
