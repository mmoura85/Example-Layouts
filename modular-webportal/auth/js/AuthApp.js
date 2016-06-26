'use strict';

var AuthApp = angular.module('MainApp.AuthApp', ['ngRoute']);


AuthApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'auth/templates/login.html',
	});
}]);