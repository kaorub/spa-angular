'use strict';

define(['angular', 'ngRoute'], function(angular, ngRoute) {
	'use strict';
	console.log('routes');
    var app = angular.module('app', ['ngRoute']);
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