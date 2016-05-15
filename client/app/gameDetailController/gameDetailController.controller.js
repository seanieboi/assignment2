'use strict';

angular.module('funTimesApp')
  .controller('gameDetailsCtrl', 
         ['$scope', '$location', '$routeParams', 'GamesService', 
         function($scope, $location, $routeParams, GamesService) {
             GamesService.getGame($routeParams.game_id)
                .success(function(data) {
                   $scope.game = data;
                   $scope.img = $scope.game.images[0];
                   })
                .error(function(err) {
                    $location.path('./games');
                  });
             $scope.setImage = function(img) {
                  $scope.img = img;
               };
      }]);

   //youtTube Player
     angular.module('funTimesApp')
      .directive('youtube', function($window) {
      return {
        restrict: "E",

        scope: {
          height: "@",
          width: "@",
          videoid: "@"
        },

        template: '<div></div>',

        link: function(scope, element) {
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          var player;

          $window.onYouTubeIframeAPIReady = function() {

            player = new YT.Player(element.children()[0], {
              playerVars: {
                autoplay: 0,
                html5: 1,
                theme: "light",
                modesbranding: 0,
                color: "white",
                iv_load_policy: 3,
                showinfo: 1,
                controls: 1
              },

              height: scope.height,
              width: scope.width,
              videoId: scope.videoid, 
            });
          }

          scope.$watch('videoid', function(newValue, oldValue) {
            if (newValue == oldValue) {
              return;
            }

            player.cueVideoById(scope.videoid);

          }); 

          scope.$watch('height + width', function(newValue, oldValue) {
            if (newValue == oldValue) {
              return;
            }

            player.setSize(scope.width, scope.height);

          });
        }  
      };
    });

    angular.module('funTimesApp')
      .controller("YouTubeCtrl", function($scope) {
      //initial settings
      $scope.yt = {
        width: 560, 
        height: 315, 
        videoid: "mlaxs1Ur-NU",
      };

    });
