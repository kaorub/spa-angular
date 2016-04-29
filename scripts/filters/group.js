// group.js
// Set group filter
define(['./filters'], function (filters) {
	'use strict';
	filters
		.filter('groupping', function () {
			return function (items, group) {
		        var filtered = [];
		        angular.forEach(items, function (item) {        
		        	if (item.group === group) {
		            	filtered.push(item);
		        	}
		        });		        	
		        return filtered;
		    };
		});
});