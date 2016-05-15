'use strict';

angular.module('funTimesApp')
  .controller('AddGameControllerCtrl', ['$scope','GamesService', 
       function($scope,GamesService) {
    		GamesService.getGames()
        .success(function(games) {
             $scope.games = games;
        });
    $scope.addGame = function(){
        var game = {
            name: $scope.newGame.name,
		    releaseDate: $scope.newGame.releaseDate,
		    imageUrl: $scope.newGame.imageUrl,
		    images: $scope.newGame.images,
		    snippet: $scope.newGame.snippet,
		    description: $scope.newGame.description,
		    certified: $scope.newGame.certified,
		    platform: $scope.newGame.platform,
		    price: $scope.newGame.price,
		    brand: $scope.newGame.brand,
		    ratings: $scope.newGame.ratings, 
		    series: $scope.newGame.series,
		    trailer: $scope.newGame.trailer,
		    players: $scope.newGame.players,
            }
       GamesService.addGame(game)
          .success(function(added_game) {
             $scope.games.push(added_game);
             $scope.newGame = { }
          });
    }
}]) 