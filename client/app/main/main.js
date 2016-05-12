'use strict';

angular.module('assignment2App')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainControllerCtrl'
      });
  });

