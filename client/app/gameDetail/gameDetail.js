'use strict';

angular.module('assignment2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gameDetail/:game_id', {
        templateUrl: 'app/gameDetail/gameDetail.html',
        controller: 'gameDetailsCtrl'
      });
  });
