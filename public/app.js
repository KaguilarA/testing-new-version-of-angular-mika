(() => {
  'use strict';
  angular
    .module('cenfotec-software-house', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate', 'angular-filepicker'])
    .config((filepickerProvider) => {
      filepickerProvider.setKey('A0oZduRlQRGs9LSqqlc2Nz');
    })
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30)
    .config(($ocLazyLoadProvider) => {
      $ocLazyLoadProvider.config({
        modules: [{
            name: 'LandignController',
            files: ['public/components/landingPage/landingPage.controller.js']
          },
          {
            name: 'LoginController',
            files: ['public/components/logIn/logIn.controller.js']
          },
          {
            name: 'StudentRequestController',
            files: ['public/components/users/students/request/request.controller.js']
          },
          {
            name: 'MainController',
            files: ['public/components/main/main.controller.js']
          },
          {
            name: 'ViewProfileController',
            files: ['public/components/users/profile/profile.controller.js']
          },
          {
            name: 'RegisterCarrerController',
            files: ['public/components/carrers/register/register.controller.js']
          }
        ],
      });
    })
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
