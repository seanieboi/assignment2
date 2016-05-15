'use strict';

angular.module('funTimesApp')
	.controller('gameReviewCtrl', 
         ['$scope', '$location', '$routeParams', 'GamesService', 
         function($scope, $location, $routeParams, GamesService) {
             GamesService.getGame($routeParams.game_id)
                .success(function(data) {
                   $scope.game = data;
                   })
                .error(function(err) {
                    console.log(err);
                    $location.path('./'); 
                  })
                
                $scope.incrementUpvotes = function(game, comment) {
                   GamesService.upvoteGamesComment(game._id, comment._id, comment.upvotes + 1 )
                      .success(function(updated_comment) {
                          comment.upvotes = updated_comment.upvotes
                      })
                }
                $scope.addComment = function(game){
                    var comment = {
                          "body": $scope.comment.body,
                          "author": $scope.comment.author,
                          "upvotes": 0
                        }
                   GamesService.addComment(game._id, comment)
                      .success(function(added_comment) {
                         $scope.game.comments.push(added_comment);
                         $scope.newComment = { }
                      });
                  }

      }]);