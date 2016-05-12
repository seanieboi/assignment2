'use strict';

angular.module('assignment2App')
	.controller('gameReviewCtrl', 
         ['$scope', '$location', '$routeParams', 'GamesService', 
         function($scope, $location, $routeParams, GamesService) {
             GamesService.getGame($routeParams.game_id)
                .success(function(data) {
                   $scope.game = data;
                   })
                .error(function(err) {
                    $location.path('./') 
                  })
                
                $scope.incrementUpvotes = function(game, comment) {
                   GamesService.upvoteGamesComment(game._id, comment._id, comment.upvotes + 1 )
                      .success(function(updated_comment) {
                          comment.upvotes = updated_comment.upvotes
                      })
                }
           /* $scope.addComment = function(){
	            $scope.game.comments.push({
                    "body": $scope.comment.body,
                    "author": $scope.comment.author,
                    "upvotes": 0
                });
	            //$scope.comment = {} ;
          	} */
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
                /*
                  // Add a comment to a game
                $scope.addComment = function(req, res) {
                   Game.findById(req.params.id, function (err, game) {
                          var comment = {
                              body: req.body.body,
                              author: req.body.author,
                              upvotes: 0
                           }
                          game.comments.push(comment)
                          game.save(function (err) {
                            if(err) { return handleError(res, err); }
                            var last = _.last(game.comments)
                            if (last != undefined) {
                               return res.json(200, last);
                            } else {
                              return res.send(500,"Database error")
                               }
                          });
                    });
                };*/

      }]);