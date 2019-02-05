(() => {
  'use strict';
  angular
    .module('cenfotec-software-house', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate', 'angular-filepicker'])
    .config((filepickerProvider) => {
      filepickerProvider.setKey('A0oZduRlQRGs9LSqqlc2Nz');
    })
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30)
    .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
      all: '*',
      admin: 'administrador',
      assistant: 'asistente',
      professor: 'profesor',
      student: 'estudiante'
    });
})();