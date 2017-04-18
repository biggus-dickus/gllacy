(function() {
  'use strict';

  angular.module('glApp').directive('loadInProgress', directive);

  function directive() {
    return {
      link: function (scope, elem) {
        var spinner = angular.element('<div class="loader"></div>');

        console.log(scope.$parent.ctrl.loading);
        elem.append(spinner);

        scope.$watch(scope.$parent, function() {
          if (scope.$parent.ctrl.loading === false) {
            spinner.remove();
          }
        });
      }
    };
  }

})();
