(function () {
  'use strict';

  angular.module('glApp').directive('loadInProgress', directive);

  function directive() {
    return {
      scope: {
        showSpinner: '=loadInProgress'
      },
      link: function(scope, elem) {

        console.log(elem);

        scope.$watch('showSpinner', function(showSpinner) {
          var loader = document.createElement('div');
          loader.className = 'loader';

          // showSpinner ? elem.append(loader) : elem.find(loader).remove();

          showSpinner ? elem[0].appendChild(loader) : elem[0].removeChild(elem[0].children[elem[0].children.length - 1]);

        });
      }
    };
  }
})();
