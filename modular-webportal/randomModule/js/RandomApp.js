'use strict';

var RandomApp = angular.module('MainApp.randomModule', ['ngRoute']);

RandomApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/randomModule', {
    templateUrl: 'randomModule/templates/randomModule.html',
    // controller: 'HomeCtrl'
    });

}]);