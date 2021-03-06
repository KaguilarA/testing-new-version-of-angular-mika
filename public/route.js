(() => {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: '/components/landingPage/landingPage.view.html',
        data: {
          pageTitle: 'Cenfotec Software House'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('LandignController');
          }]
        },
        controller: 'landingPageController',
        controllerAs: 'vm'
      })

      .state('iniciarSesion', {
        url: '/logIn',
        templateUrl: '/components/login/login.view.html',
        data: {
          pageTitle: 'Cenfotec Software House | Iniciar Sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('LoginController');
          }]
        },
        controller: 'logInController',
        controllerAs: 'vm'
      })

      .state('solicitudEstudiante', {
        url: '/studentRequest',
        templateUrl: '/components/users/students/request/request.view.html',
        data: {
          pageTitle: 'Solicitud de registro para Cenfotec Software House'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('StudentRequestController');
          }]
        },
        controller: 'studentRequestController',
        controllerAs: 'vm'
      })

      .state('solicitudEstudiante.informacionBasica', {
        url: '/informacionBasica',
        templateUrl: '/components/users/students/request/views/nameForm.view.html',
        data: {
          pageTitle: 'Solicitud de registro para Cenfotec Software House'
        }
      })

      .state('solicitudEstudiante.informacionCarrera', {
        url: '/informacionCarrera',
        templateUrl: '/components/users/students/request/views/carrerForm.view.html',
        data: {
          pageTitle: 'Solicitud de registro para Cenfotec Software House'
        }
      })

      .state('solicitudEstudiante.informacionOpcional', {
        url: '/informacionOpcional',
        templateUrl: '/components/users/students/request/views/optional.view.html',
        data: {
          pageTitle: 'Solicitud de registro para Cenfotec Software House'
        }
      })

      .state('main', {
        url: '/main',
        templateUrl: '/components/main/main.view.html',
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('MainController');
          }]
        },
        controller: 'mainController',
        controllerAs: 'vm'
      })

      .state('main.home', {
        url: '/home',
        templateUrl: '/components/main/views/home.view.html',
        data: {
          pageTitle: 'Cenfotec Software House | Inicio'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('MainController');
          }]
        },
        controller: 'mainController',
        controllerAs: 'vm'
      })

      .state('main.verPerfil', {
        url: '/profile',
        templateUrl: '/components/users/profile/profile.view.html',
        data: {
          pageTitle: 'Cenfotec Software House | Inicio'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('ViewProfileController');
          }]
        },
        controller: 'profileController',
        controllerAs: 'vm'
      })

      .state('main.registroCarreras', {
        url: '/registerCarrer',
        templateUrl: '/components/carrers/register/register.view.html',
        data: {
          pageTitle: 'Cenfotec Software House | Inicio'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('RegisterCarrerController');
          }]
        },
        controller: 'carrerRegisterController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');
  }
})();
