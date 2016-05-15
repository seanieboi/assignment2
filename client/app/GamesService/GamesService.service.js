'use strict';

  angular.module('funTimesApp').factory('GamesService', ['$http', function($http){
   var api = {
     getGames : function() {
           return $http.get('/api/games');
     },
      addGame : function(game) {
           return $http.post('/api/games',game);
      },
     addComment : function(game_id, comment) {
          return $http.post('/api/games/' + game_id + '/comments' ,
                            comment);
     },
     // upvotePost : function(post_id, new_upvote_count ) {
     //      return $http.post('/api/posts/' + post_id + '/upvotes', 
     //                 {upvotes: new_upvote_count })
     // },
    upvoteGamesComment : function(game_id, comment_id, new_upvote_count ) {
           return $http.post( '/api/games/' +
                       game_id + '/comments/' +  comment_id + '/upvotes', 
                        {upvotes: new_upvote_count });
    },
    getGame : function(game_ID) {
        return $http.get('/api/games/' + game_ID );
    },
    getGameReviews : function(game_ID) {
        return $http.get('/api/gameDetail/' + game_ID + '/reviews' );
    }
  };
  return api;
}]);