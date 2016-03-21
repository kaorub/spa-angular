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