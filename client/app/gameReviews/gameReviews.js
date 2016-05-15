'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gameDetail/:game_id/reviews', {
        templateUrl: 'app/gameReviews/gameReviews.html',
        controller: 'gameReviewCtrl'
      });
  });

