console.log('usersFactory.js')
define(['./services'], function(services) {
	'use strict';
	console.log('usersFactory loaded')
    services
    .factory('Users', function($resource) {
        return $resource('/users.json', {isArray: true}, {
            get: {method: 'GET', isArray: true}
        });
   //      return $http({
			//   method: 'GET',
			//   url: 'https://api.linkedin.com/v1/companies/google?format=json:(id,name,'
			// }).then(function successCallback(response) {
			//     console.log(response)
			//   }, function errorCallback(response) {
			//     console.log('error');
			//   });
    });
});