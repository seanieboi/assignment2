'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/games', {
        templateUrl: 'app/games/games.html',
        controller: 'GamesControllerCtrl'
      });
  });

