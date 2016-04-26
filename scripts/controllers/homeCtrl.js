// homeCtrl.js
define(['./controllers'], function(controllers) {  
	'use strict';

	controllers.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.message = 'Hello.'
	}]);
});