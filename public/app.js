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
            files: ['/components/landingPage/landingPage.controller.js']
          },
          {
            name: 'LoginController',
            files: ['/components/login/login.controller.js']
          },
          {
            name: 'StudentRequestController',
            files: ['/components/users/students/request/request.controller.js']
          },
          {
            name: 'MainController',
            files: ['/components/main/main.controller.js']
          },
          {
            name: 'ViewProfileController',
            files: ['/components/users/profile/profile.controller.js']
          },
          {
            name: 'RegisterCarrerController',
            files: ['/components/carrers/register/register.controller.js']
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
    .constant(`degreeArray`, [`Técnico superior`, `Diplomado`, `Bachillerato`, `Maestría`])
    .constant(`typesId`, [{
        id: 1,
        name: `Cédula de identidad`,
        pattern: `^((?!(0))[0-9]{9})$`
      },
      {
        id: 2,
        name: `Cédula de residencia`,
        pattern: `^((?!(0))[0-9]{13})$`
      }
    ])
    .constant('userRoles', {
      all: '*',
      admin: 'administrador',
      assistant: 'asistente',
      professor: 'profesor',
      student: 'estudiante'
    });
})();
