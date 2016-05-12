'use strict';

angular.module('assignment2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gameDetail/:game_id/reviews', {
        templateUrl: 'app/gameReviews/gameReviews.html',
        controller: 'gameReviewCtrl'
      });
  });

