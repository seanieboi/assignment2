'use strict';

angular.module('funTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        template: '<about></about>'
      });
  });
