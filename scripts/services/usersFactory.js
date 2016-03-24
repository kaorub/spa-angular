console.log('usersFactory.js')
define(['./services'], function(services) {
	'use strict';
	console.log('usersFactory loaded')
    services
    .factory('Users', function($resource) {
        return $resource('/users.json', {isArray: true}, {
            get: {method: 'GET', isArray: true}
        });
    });
});