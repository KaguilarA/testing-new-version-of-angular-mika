(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .controller('mainController', mainController);

  mainController.$inject = ['$state', 'logInService'];

  function mainController($state, loginService) {
    const vm = this;

    const userAuth = loginService.getAuthUser();


    if (!userAuth) {
      $state.go('iniciarSesion');
    }

    vm.user = userAuth;

    console.log(userAuth);

    vm.userName = userAuth.getFirstName();
  }
})();
