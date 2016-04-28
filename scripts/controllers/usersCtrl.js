// usersCtrl.js
// Users page controller
define(['./controllers'], function(controllers) {

	'use strict';

	controllers.controller('UsersCtrl', ['$scope', 'Users', function($scope, Users) {
	    // Get users from Users servuce
	    Users.query(function(data) {
	    	$scope.users = data;
	    });

	    // Set the storage for view layouts
	    $scope.items = [
	    	{
	    		"id": "1",
	    		"name": "По группам",
	    		"layout": "group"
	    	}, {
	    		"id": "2",
	    		"name": " Списком",
	    		"layout": "list"
	    	}, {
	    		"id": "3",
	    		"name": "Плиткой",
	    		"layout": "tile"
	    	}
		];
		$scope.selectedView = $scope.items[0];

	    // Set the storage for groups count in tile view
	    $scope.groupsCount = 4;
		$scope.getGroupsCount = function(num) {
		    return new Array(num);   
		};

	}]);
});