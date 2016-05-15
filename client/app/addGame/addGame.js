'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addGame', {
        templateUrl: 'app/addGame/addGame.html',
        controller: 'AddGameControllerCtrl',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
