// homeCtrl.js
// Set message for initial home page
define(['./controllers'], function(controllers) {  
	'use strict';

	controllers.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.message = 'Hello.'
	}]);
});