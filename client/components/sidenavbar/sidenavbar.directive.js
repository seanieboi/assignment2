'use strict';

angular.module('assignment2App')
  .directive('sidenavbar', function() {
    return {
      templateUrl: 'components/sidenavbar/sidenavbar.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('sidenavbar');
      }
    };
  });