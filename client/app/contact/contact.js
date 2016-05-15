'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactControllerCtrl'
      });
  });

