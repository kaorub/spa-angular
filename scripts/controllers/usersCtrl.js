console.log('usersCtrl.js');
define(['./controllers'], function(controllers) {
	'use strict';
	console.log('usersCtrl loaded');

	controllers.controller('UsersCtrl', ['$scope', 'Users', function($scope, Users) {
	    Users.query(function(data) {
		    	$scope.users = data;
		    });
	    $scope.groupsCount = 4;
	  	console.log($scope.groupsCount)
		$scope.getGroupsCount = function(num) {
		    return new Array(num+1);   
		};
	}]);
});