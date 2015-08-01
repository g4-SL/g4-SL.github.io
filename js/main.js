var app = angular.module('bodyapp',[
	'ngAnimate', 
	'ngDialog',
  	'ui.router',
	'ui.bootstrap'
	]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('work', {
            url: '/work',
            templateUrl: 'templates/body-ps.html'
        })   

        .state('workProj', {
            url: '/work-project',
            templateUrl: 'templates/body-project.html'
        }) 

        .state('battle', {
            url: '/battle',
            templateUrl: 'templates/project-battle.html'
        })    

        .state('olympia', {
            url: '/olympia',
            templateUrl: 'templates/project-olympia.html'
        })

        .state('child', {
            url: '/child',
            templateUrl: 'templates/project-child.html'
        })

        .state('system', {
            url: '/system',
            templateUrl: 'templates/project-system.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/body-about.html'
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/work-project');
});

var openImgModal = function(imgTitle){
	console.log("testing" + imgTitle);
	var imgSrc = "img/ps/big/" + imgTitle;

	// here asign the image to the modal when the user click the enlarge link
	$('#imagepreview').attr('src', imgSrc); 

	// imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
	$('#imagemodal').modal('show'); 
}