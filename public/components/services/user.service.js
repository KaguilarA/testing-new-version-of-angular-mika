(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('userService', userService);

  userService.$inject = ['$http', '$q', '$log', 'dataStorageFactory'];

  function userService($http, $q, $log, dataStorageFactory) {
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
      let callback = (res) => {
          if (res.data != []) {
            res.data.forEach((obj) => {
              switch (obj._role) {
                case "admin":
                  let tempAdmin = Object.assign(new Admin(), obj);
                  data.push(tempAdmin);
                  break;

                case "assistant":
                  let tempAssistan = Object.assign(new Assistant(), obj);
                  data.push(tempAssistan);
                  break;

                case "professor":
                  let tempProfessor = Object.assign(new Professor(), obj);
                  data.push(tempProfessor);
                  break;

                case "student":
                  let tempStudent = Object.assign(new Student(), obj);
                  data.push(tempStudent);
                  break;

                default:
                  let tempUser = Object.assign(new User(), obj);
                  data.push(tempUser);
                  break;
              }
            });
          };
        },
        finished = dataStorageFactory.get('/api/get_all_users', callback);

      return finished;
    }


    function _updateUser(pedituser) {}

    function _changeStudentsState(pedituser) {}

  }
})();
