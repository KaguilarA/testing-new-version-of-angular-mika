(() => {
  angular
    .module('cenfotec-software-house')
    .controller('logInController', logInController);

  logInController.$inject = ['$state', 'logInService'];

  function logInController($state, logInService) {
    const vm = this;

    vm.datos = {};

    vm.type = 'password';

    vm.changeType = (checked) => {
      if (checked == true) {
        vm.type = 'text';
      } else {
        vm.type = 'password';
      }
    }

    vm.inicioSesion = (datos) => {
      console.log(datos);
      let success = logInService.logIn(datos);

      switch (success) {
        case "1":
          swal({
            title: "Solicitud de registro en revisión",
            text: "Su solicitud de registro se encuentra en revisión",
            icon: "warning",
            button: "Aceptar",
          });
          break;

        case "2":
          swal({
            title: "Usuario bloqueado, contacte al administrador",
            text: "Su usuario del Cenfotec Software House ha sido bloquedo",
            icon: "error",
            button: "Aceptar",
          });
          break;

        case "3":
          swal({
            title: "Solicitud de registro rechazada",
            text: "Su solicitud de registro lamentablemente ha sido rechazada",
            icon: "error",
            button: "Aceptar",
          });
          break;

        case "4":
          swal({
            title: "Credenciales erroneas",
            text: "Las credenciales que ha ingresado son errones, revise sus datos",
            icon: "error",
            button: "Aceptar",
          });
          break;

        default:
          $state.go('main.home');
          break;
      }

    }
  }
})();
