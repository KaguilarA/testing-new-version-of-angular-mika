(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('logInService', logInService);

  logInService.$inject = ['AUTH_EVENTS', 'USER_ROLES', 'userService']

  function logInService(AUTH_EVENTS, USER_ROLES, userService) {
    const loginAPI = {
      logIn: _logIn,
      logOut: _logOut,
      getAuthUser: _getAuthUser
    };
    return loginAPI;

    function _logIn(pcredentials) {
      let response,
        condition;
      let request = $.ajax({
        url: 'http://localhost:4000/api/login',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'email': pcredentials.email,
          'password': pcredentials.password
        }
      });
      request.done((res) => {
        response = res;
        console.log(res);
      });

      request.fail((error) => {
        response = error;
        console.log(response.error);
      });
      if (response.condition == "0") {
        setsession(response);
      }

      return response.condition;
    }

    function _logOut() {
      let response = true;
      sessionStorage.removeItem('session');
      return response;
    }

    function _getAuthUser() {
      let credentials = JSON.parse(sessionStorage.getItem('session')),
        userList = userService.getUsers(),
        userData;
      if(!credentials){
        userData = undefined;
      }else{
        for (let i = 0; i < userList.length; i++) {
          if(userList[i].getEmail() == credentials.email){
            userData = userList[i];
          }
        }
      }
      return userData;
    };

    function setsession(response) {
      sessionStorage.setItem('session', JSON.stringify({
        email: response.email,
        role: response.role
      }));
    }
  }
})();
