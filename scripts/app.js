var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: '/home.html',
        controller: 'HomeCtrl'
      }).
      when('/users', {
        templateUrl: '/users.html',
        controller: 'UsersCtrl'
      })
  }]);

app.factory('Users', function($resource) {
	return $resource('/users.json', {isArray: true}, {
		get: {method: 'GET', isArray: true}
	});
});

app.directive('tile', function() {
	return {
		scope: true,
		restrict: 'E',
		replace: 'true',
		template: '<div class="tile"><b>{{u.full_name}}</b><img></img><p>{{u.group}}</p><p>{{u.phone}}</p></div>'
		// templateUrl: '/tale.html'
	};
});

app.directive('minitile', function() {
	return {
		scope: true,
		restrict: 'E',
		replace: 'true',
		template: '<div class="minitile"><b>{{u.full_name}}</b><p>{{u.group}}</p></div>'
		// templateUrl: '/minitale.html'
	};
});

app.filter('group', function () {
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

app.controller('HomeCtrl', function($scope) {
    $scope.message = 'Hello.';
});

app.controller('UsersCtrl', ['$scope', 'Users', '$routeParams', function($scope, Users, $routeParams) {
    Users.query(function(data) {
    	$scope.users = data;
    });

    $scope.groupsCount = 4;
	$scope.getGroupsCount = function(num) {
	    return new Array(num+1);   
	}
}]);