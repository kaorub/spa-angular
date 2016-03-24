/*global require*/
'use strict';

define('app', [
  'angular',
  'services/index',
  'filters/index',
  'directives/index',
  'controllers/index',
  'ngRoute',
  // 'routes',
  'ngResource',
  ], function (angular, services, filters, directives, ctrls, ngRoute, ngResource) {
    var app = angular
    .module('app', ['app.services', 'app.filters', 'app.directives', 'app.controllers', 'ngRoute', 'ngResource'])
    .config(function($routeProvider) {
      $routeProvider.
        when('/home', {
        templateUrl: '/home.html',
        controller: 'HomeCtrl'
        }).
        when('/users', {
        templateUrl: '/users.html',
        controller: 'UsersCtrl'
        })
    });
    app.init = function() {
      console.log('app inited');
      angular.bootstrap(document, ['app']);
    };
    return app;
});