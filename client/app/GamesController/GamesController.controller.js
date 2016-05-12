'use strict';

angular.module('assignment2App')
	.controller('GamesControllerCtrl', ['$scope', 'GamesService',
	  function($scope,GamesService) {
	     GamesService.getGames().success(function(games) {
	           $scope.games = games;
	           //$scope.buttonText = "Newest";
	           //$scope.orderProp = 'releaseDate';
	     });
/*	         $scope.predicate = 'age';
	         $scope.reverse = true;
	         $scope.order = function(predicate) {
	            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
	            $scope.predicate = predicate;
	         };*/
	  }]);



