// routes.js
define(['angular'], function(angular, app) {
	'use strict';
    // var app = angular.module('app');
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {
			templateUrl: '/home.html',
			controller: 'HomeCtrl'
			}).
			when('/users', {
			templateUrl: '/users.html',
			controller: 'UsersCtrl'
			})
	}])
	return app;
})