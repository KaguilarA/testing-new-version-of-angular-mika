(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .controller('mainController', mainController);

  mainController.$inject = ['$state', 'logInService'];

  function mainController($state, loginService) {
    const vm = this;

    vm.userAuth = {}

    vm.loadUserData = () => {
      loginService.getAuthUser().then((res) => {
        vm.userAuth = res;
        console.log('vm.userAuth: ', vm.userAuth);
      });;
    }


    vm.loadUserData();


    if (!vm.userAuth) {
      $state.go('iniciarSesion');
    }

    vm.user = vm.userAuth;

    vm.userName = vm.user.firstName;
  }
})();
