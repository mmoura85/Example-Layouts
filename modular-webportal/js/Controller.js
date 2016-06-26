MainApp.config(['$routeProvider', function ( $routeProvider){

    $routeProvider
    .when('/', {
          templateUrl: 'templates/home.html'});
          // controller: 'HomeCtrl'});

    // .otherwise('/404', {
    //            templeteUrl: 'templates/404.html'})
}]);