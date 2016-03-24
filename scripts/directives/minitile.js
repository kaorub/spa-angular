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
				template: '<div class="minitile"><b>{{u.full_name}}</b><p>{{u.group}}</p></div>'
				// templateUrl: '/tale.html'
			};
		});
});