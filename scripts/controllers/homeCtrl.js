console.log('homeCtrl.js');
define(['./controllers'], function(controllers) {  
	'use strict';
	console.log('homeCtrl loaded');

	controllers.controller('HomeCtrl', ['$scope', function ($scope) {
		console.log('homectrl')
		$scope.message = 'Hello.'
	}]);
});