'use strict';

define(['angular', 'angular-route'], function(angular) {  
	return ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
	     $scope.$route = $route;
	     $scope.$location = $location;
	     $scope.$routeParams = $routeParams;
	}]
});