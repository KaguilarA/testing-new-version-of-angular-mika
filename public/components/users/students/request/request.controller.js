(() => {
  'use strict';
  angular
    .module(`cenfotec-software-house`)
    .controller(`studentRequestController`, studentRequestController);

  studentRequestController.$inject = [`Upload`, `imageUploadService`, `userService`, `carrerService`, `userRoles`, `degreeArray`, `typesId`];

  function studentRequestController(Upload, imageUploadService, userService, carrerService, userRoles, degreeArray, typesId) {
    const vm = this;
    vm.carrers = [];
    vm.typesId = typesId;
    vm.degreeArray = degreeArray;
    vm.getCarrers = () => {
      carrerService.getCarrers().then((res) => {
        vm.carrers = res;
      });
    }
    vm.fillDegreeArray = () => {
      let array = degreeArray;
      vm.degreeArray = [];
      for (let i = 0; i < array.length; i++) {
        vm.degreeArray.push(array[i]);
        if (array[i] === vm.newStudent._carrer._degree) {
          break;
        }
      }
    }
    vm.newStudent = {
      _state: `postulate`,
      _role: `student`,
      _password: randomPassword()
    };
    vm.cloudObj = imageUploadService.getConfiguration();
    vm.getCarrers();



    vm.preSendRequest = (pnewUser) => {
      angular.element(`#sendRequestFormStudent`).addClass(`fade`);
      angular.element(`#loading`).addClass(`d-block`);

      console.log('vm.newStudent: ', vm.newStudent);

      // vm.cloudObj.data.file = pnewUser.photo[0];
      // Upload.upload(vm.cloudObj).success((data) => {
      //   vm.sendRequest(pnewUser, data.url);
      // });
    }

    vm.sendRequest = (pnewUser, urlImage) => {
      pnewUser._photo = urlImage;
      let tempStudent = Object.assign(new Student(), pnewUser);
      console.log(tempStudent);
      angular.element(`#sendRequestStudent`).removeClass(`fade`);
      angular.element(`#loading`).removeClass(`d-block`);
      // let success = userService.addUser(tempStudent);

      console.log(success);
    }

    function randomPassword() {
      let chars = `abcdefghijklmnopqrstuvwxyz!@#$%^&*-+<>ABCDEFGHIJKLMNOP1234567890`,
        password = '';
      for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * chars.length);
        password += chars.charAt(x);
      }
      return password;
    }
  }
})();
