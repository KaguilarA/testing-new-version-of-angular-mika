(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .directive('menuLateral', menuLateral);

  function menuLateral() {
    let sidebar = {
      templateUrl: '/components/directives/sidebar/sidebar.view.html',
      restrict: 'EA'
    };

    return sidebar;
  }
})();
