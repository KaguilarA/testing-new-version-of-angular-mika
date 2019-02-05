(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .controller('carrerRegisterController', carrerRegisterController);

  carrerRegisterController.$inject = ['carrerService'];

  function carrerRegisterController(carrerService) {
    const vm = this;

    vm.newCarrer = {};

    vm.registerCarrer = (pnewCarrer) => {
      let tempCarrer = Object.assign(new Carrer(), pnewCarrer);
      console.log(tempCarrer);

      let success = carrerService.addCarrer(tempCarrer);

      console.log(success);
    }

  }
})();
