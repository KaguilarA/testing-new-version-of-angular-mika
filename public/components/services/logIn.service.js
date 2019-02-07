(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('logInService', logInService);

  logInService.$inject = ['AUTH_EVENTS', 'USER_ROLES', 'userService', 'dataStorageFactory']

  function logInService(AUTH_EVENTS, USER_ROLES, userService, dataStorageFactory) {
    const loginAPI = {
      logIn: _logIn,
      logOut: _logOut,
      getAuthUser: _getAuthUser
    };
    return loginAPI;

    function _logIn(pcredentials) {
      let callback = (res) => {
          if (res.data.condition == "0") {
            condition = res.data;
            setsession(condition);
          }
          deferred.resolve(condition);
        },
        finished = dataStorageFactory.put('/api/login', pcredentials, callback);

      return finished;
      
    }

    function _logOut() {
      let response = true;
      dataStorageFactory.removeItem('session');
      return response;
    }

    function _getAuthUser() {
      let credentials = JSON.parse(dataStorageFactory.getItem('session')),
        userList = userService.getUsers(),
        userData;
      if (!credentials) {
        userData = undefined;
      } else {
        for (let i = 0; i < userList.length; i++) {
          if (userList[i].email == credentials.email) {
            userData = userList[i];
          }
        }
      }
      return userData;
    };

    function setsession(response) {
      dataStorageFactory.setItem('session', JSON.stringify({
        email: response.email,
        role: response.role
      }));
    }
  }
})();
