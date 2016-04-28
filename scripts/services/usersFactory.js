// usersFactory.js
define(['./services'], function(services) {
	'use strict';
	
    services
    .factory('Users', function($resource) {
        return $resource('/users.json', {isArray: true}, {
            get: {method: 'GET', isArray: true}
        });
    });
});