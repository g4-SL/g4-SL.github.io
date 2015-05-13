var app = angular.module('bodyapp',[
	'ngAnimate', 
  	'ui.router',
	'ui.bootstrap'
	]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        });


    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/');
});