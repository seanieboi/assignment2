'use strict';

angular.module('assignment2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactControllerCtrl'
      });
  });

