'use strict';

angular.module('funTimesApp', [
  'funTimesApp.auth',
  'funTimesApp.admin',
  'funTimesApp.constants',
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
