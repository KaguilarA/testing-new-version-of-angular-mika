(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .controller('studentRequestController', studentRequestController);

  studentRequestController.$inject = ['Upload', 'imageUploadService', 'userService', 'carrerService'];

  function studentRequestController(Upload, imageUploadService, userService, carrerService) {
    const vm = this;

    vm.carrers = [];

    vm.getCarrers = () => {
      carrerService.getCarrers().then((res) => {
        vm.carrers = res;
        vm.createSelect();
      });
    }

    vm.createSelect = () => {
      console.log('vm.carrers: ', vm.carrers);
    }

    vm.getCarrers();

    vm.newStudent = {
      state: 'postulate',
      role: 'student',
      password: randomPassword()
    };

    vm.cloudObj = imageUploadService.getConfiguration();

    vm.preSendRequest = (pnewUser) => {
      angular.element('#sendRequestFormStudent').addClass('fade');
      angular.element('#loading').addClass('d-block');
      vm.cloudObj.data.file = pnewUser.photo[0];
      Upload.upload(vm.cloudObj).success((data) => {
        vm.sendRequest(pnewUser, data.url);
      });
    }

    vm.sendRequest = (pnewUser, urlImage) => {
      pnewUser.photo = urlImage;
      let tempStudent = Object.assign(new Student(), pnewUser);
      console.log(tempStudent);
      angular.element('#sendRequestStudent').removeClass('fade');
      angular.element('#loading').removeClass('d-block');
      // let success = userService.addUser(tempStudent);

      console.log(success);
    }

    function randomPassword() {
      let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-+<>ABCDEFGHIJKLMNOP1234567890",
        password = '';
      for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * chars.length);
        password += chars.charAt(x);
      }
      return password;
    }
  }
})();
