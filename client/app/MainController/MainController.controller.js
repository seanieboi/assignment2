'use strict';

angular.module('funTimesApp')
  .controller('MainControllerCtrl', ['$scope', 'GamesService',
      function($scope, GamesService) {
         GamesService.getGames().success(function(data) {
               $scope.games = data
             })
         $scope.orderProp = 'age';
         $scope.greaterThan = function(prop, val){
              return function(releaseDate){
                if (releaseDate[prop] > val) return true;
          }}
 }]);