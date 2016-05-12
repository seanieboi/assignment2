'use strict';

angular.module('assignment2App.auth', [
  'assignment2App.constants',
  'assignment2App.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
