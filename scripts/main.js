// main.js
// Set config
'use strict';

require.config({
	paths: {
		'angular': '/node_modules/angular/angular.min',
        'ngRoute': '/node_modules/angular-route/angular-route.min',
        'ngResource': '/node_modules/angular-resource/angular-resource.min',
        'app': 'app',
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'ngRoute':  {
			exports: 'ngRoute',
			deps: ['angular']
		},
		'ngResource': {
			exports: 'ngResource',
			deps: ['angular']
		}
	}
});

require( ["app", 'services/services', 'filters/filters', 'controllers/controllers', 'directives/directives'], function(app) {
	app.init();
});
