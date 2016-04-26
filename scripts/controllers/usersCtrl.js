// usersCtrl.js
define(['./controllers'], function(controllers) {
	'use strict';
	// 
	controllers.controller('UsersCtrl', ['$scope', 'Users', function($scope, Users) {
	    Users.query(function(data) {
		    	$scope.users = data;
		    });
	    $scope.groupsCount = 4;

		$scope.getGroupsCount = function(num) {
		    return new Array(num+1);   
		};
	}]);
});