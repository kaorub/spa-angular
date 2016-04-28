// tile.js
// <tile> element to show tiles view
define([
	'./directives'
], function (directives) {
	'use strict';

	directives
		.directive('tile', function () {
			return {
				scope: true,
				restrict: 'E',
				replace: 'true',
				templateUrl: '/tile.html'
			};
		});
});