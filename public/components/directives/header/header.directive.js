
(() => {
  'use strict';
  angular
  .module('cenfotec-software-house')
  .directive('navegacionPrincipal', navegacionPrincipal);
  
  function navegacionPrincipal(){

    const navegacion = {
      templateUrl: '/components/directives/header/header.view.html',
      restrict: 'E'
    };

    return navegacion;
  }
})();