
;(function() {
  angular
    .module('textalkArbetsProv', [
      'ngRoute'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
    .when('/reader/:displayIndex', {
        templateUrl: 'views/reader.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/', {
          templateUrl: 'views/reader.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/main-nav', {
          templateUrl: 'components/directives/main-nav.html',
          controller: 'MainController',
          controllerAs: 'main'
      })

    $httpProvider.interceptors.push('authInterceptor');

  }

  angular
    .module('textalkArbetsProv')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q',  '$location'];

  function authInterceptor($rootScope, $q, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('textalkArbetsProv')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {
      $location.url("/reader/1")
  }


})();
