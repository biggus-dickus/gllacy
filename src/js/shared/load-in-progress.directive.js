(function () {
  'use strict';

  angular.module('glApp').directive('loadInProgress', directive);

  function directive() {
    return {
      scope: {
        showSpinner: '=loadInProgress'
      },
      link: function(scope, elem) {
        scope.$watch('showSpinner', function(showSpinner) {
          // var loader = '<div class="loader"></div>';
          var loader = document.createElement('div');
          loader.className = 'loader';

          showSpinner ? elem.append(loader) : elem.find(loader).remove();

        });
      }
    };
  }
})();
