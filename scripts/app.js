/*global require*/

define('app', [
  'angular',
  'services/index',
  'filters/index',
  'directives/index',
  'controllers/index',
  'ngRoute',
  'ngResource'
  ], function (angular, services, filters, directives, ctrls, ngRoute, ngResource) {
    'use strict';

    var app = angular
    .module('app', ['services', 'filters', 'directives', 'controllers', 'ngRoute', 'ngResource'])
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
      angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
      })
    };
    return app;
});