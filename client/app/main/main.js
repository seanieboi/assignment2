'use strict';

angular.module('funTimesApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainControllerCtrl'
      });
  });

