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
          var loader = document.createElement('div'),
              element = elem[0];

          loader.className = 'loader';

          showSpinner ? element.appendChild(loader) : element.children[element.children.length - 1].remove();
        });
      }
    };
  }
})();
