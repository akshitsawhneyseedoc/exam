'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope', '$http',function($scope, $http) {
	$scope.userNameVariable;
	$scope.passwordVariable;
	$scope.registrationFlag=false;
	$scope.login = function() {
		var data = $http.get('js/login.properties');
		var prmiseSecond = data.then(function(res) {
		for(var i=0; i<res.data.loginData.length; i++)
		{
			if(res.data.loginData[i].userName == $scope.userNameVariable)
			{
				if(res.data.loginData[i].password == $scope.passwordVariable)
				{
					
				}
			}
		}
	});
	}
	$scope.register = function() {
		$scope.registrationFlag = false;
		
	}
	
	$scope.registerButton = function() {
		$scope.registrationFlag = true;
		
	}
}]);