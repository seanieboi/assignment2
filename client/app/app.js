'use strict';

angular.module('assignment2App', [
  'assignment2App.auth',
  'assignment2App.admin',
  'assignment2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match',
  'ajoslin.promise-tracker'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

  
