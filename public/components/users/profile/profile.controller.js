(() => {
  'use strict';
  angular
  .module('cenfotec-software-house')
  .controller('profileController', profileController);

  profileController.$inject = ['logInService', 'userService']

  function profileController(logInService, userService){
    const vm = this;
  }
})();