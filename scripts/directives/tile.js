'use strict';

define([
	'./directives'
], function (directives) {
	directives
		.directive('tile', function () {
			return {
				scope: true,
				restrict: 'E',
				replace: 'true',
				template: '<div class="tile"><b>{{u.full_name}}</b><img></img><p>{{u.group}}</p><p>{{u.phone}}</p></div>'
				// templateUrl: '/tale.html'
			};
		});
});