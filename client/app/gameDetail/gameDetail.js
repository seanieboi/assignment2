'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gameDetail/:game_id', {
        templateUrl: 'app/gameDetail/gameDetail.html',
        controller: 'gameDetailsCtrl'
      });
  });
