(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('userService', userService);

  userService.$inject = ['$http', '$q', '$log'];

  function userService($http, $q, $log) {
    const userAPI = {
      addUser: _addUser,
      getUsers: _getUsers,
      updateUser: _updateUser,
      changeRequestState: _changeStudentsState
    };
    return userAPI;

    function _addUser(pnewuser) {
      let response,
        tempData;

      switch (pnewuser.getRole()) {
        case "admin":
        case "assistant":
          tempData = {
            'role': pnewuser.getRole(),
            'firstName': pnewuser.getFirstName(),
            'secondName': pnewuser.getSecondName(),
            'firstSurname': pnewuser.getFirstSurname(),
            'secondSurname': pnewuser.getSecondSurname(),
            'id': pnewuser.getId(),
            'email': pnewuser.getEmail(),
            'password': pnewuser.getPassword(),
            'photo': pnewuser.getPhono(),
            'phone': pnewuser.getPhone(),
            'state': pnewuser.getState(),
            'jobPosition': pnewuser.getJobPosition(),
          }
          break;

        case "professor":
          tempData = {
            'role': pnewuser.getRole(),
            'firstName': pnewuser.getFirstName(),
            'secondName': pnewuser.getSecondName(),
            'firstSurname': pnewuser.getFirstSurname(),
            'secondSurname': pnewuser.getSecondSurname(),
            'id': pnewuser.getId(),
            'email': pnewuser.getEmail(),
            'password': pnewuser.getPassword(),
            'photo': pnewuser.getPhono(),
            'phone': pnewuser.getPhone(),
            'state': pnewuser.getState(),
            'specialty': pnewuser.getSpecialty(),
            'councilMember': pnewuser.getCouncilMember(),
          }
          break;

        case "student":
          tempData = {
            'role': pnewuser.getRole(),
            'firstName': pnewuser.getFirstName(),
            'secondName': pnewuser.getSecondName(),
            'firstSurname': pnewuser.getFirstSurname(),
            'secondSurname': pnewuser.getSecondSurname(),
            'id': pnewuser.getId(),
            'email': pnewuser.getEmail(),
            'password': pnewuser.getPassword(),
            'photo': pnewuser.getPhono(),
            'phone': pnewuser.getPhone(),
            'state': pnewuser.getState(),
            'birthDate': pnewuser.getBirthDate(),
            'curriculum': pnewuser.getCurriculum(),
            'carrer': pnewuser.getCarrer(),
            'githubUser': pnewuser.getGithubUser(),
            'website': pnewuser.getWebSite(),
            'rejectReason': pnewuser.getRejecReason()
          }
          break;

        default:
          tempData = {
            'role': pnewuser.getRole(),
            'firstName': pnewuser.getFirstName(),
            'secondName': pnewuser.getSecondName(),
            'firstSurname': pnewuser.getFirstSurname(),
            'secondSurname': pnewuser.getSecondSurname(),
            'id': pnewuser.getId(),
            'email': pnewuser.getEmail(),
            'password': pnewuser.getPassword(),
            'photo': pnewuser.getPhono(),
            'phone': pnewuser.getPhone(),
            'state': pnewuser.getState()
          }
          break;
      }
      console.log(tempData);

      let request = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: tempData
      });

      request.done((res) => {
        response = res.success;
        console.log(res.error);
      });

      request.fail((error) => {
        response = error;
        console.log(response.error);
      });

      return response;
    }

    function _getUsers() {
      let userListTem = [],
        userList = [];

      let request = $.ajax({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'aplication/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      request.done((userListBD) => {
        userListTem = userListBD;
      })
      request.fail(() => {
        userListTem = [];
        console.log('Ocurrió un error');
      });

      if (userListTem != []) {
        userListTem.forEach(obj => {
          switch (obj.role) {
            case "admin":
              let tempAdmin = Object.assign(new Admin(), obj);
              userList.push(tempAdmin);
              break;

            case "assistant":
              let tempAssistan = Object.assign(new Assistant(), obj);
              userList.push(tempAssistan);
              break;

            case "professor":
              let tempProfessor = Object.assign(new Professor(), obj);
              userList.push(tempProfessor);
              break;

            case "student":
              let tempStudent = Object.assign(new Student(), obj);
              userList.push(tempStudent);
              break;

            default:
              let tempUser = Object.assign(new User(), obj);
              userList.push(tempUser);
              break;
          }
        });
      }

      return userList;
    }

    function _updateUser(pedituser) {}

    function _changeStudentsState(pedituser) {}

  }
})();
