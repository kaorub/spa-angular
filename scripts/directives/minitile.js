// minitils.js
// <minitile> element to show groupping view
define([
	'./directives'
], function (directives) {
	'use strict';
	
	directives
		.directive('minitile', function () {
			return {
				scope: true,
				restrict: 'E',
				replace: 'true',
				templateUrl: '/minitile.html'
			};
		});
});