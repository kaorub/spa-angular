// mainCtrl.js
// Controller to navigate between pages

define(['./controllers'], function(controllers) {  
	'use strict';

	controllers.controller('MainCtrl', ['$scope', function ($scope) {
		$scope.activeButton = function() {
			$scope.isActive = !$scope.isActive;
		} 
	}]);
});