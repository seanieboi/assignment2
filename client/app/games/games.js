'use strict';

angular.module('assignment2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/games', {
        templateUrl: 'app/games/games.html',
        controller: 'GamesControllerCtrl'
      });
  });

