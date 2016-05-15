'use strict';

angular.module('funTimesApp.auth', [
  'funTimesApp.constants',
  'funTimesApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
