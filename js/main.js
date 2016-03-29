console.clear();

var app = angular.module('bodyapp',[
	'ngAnimate', 
	'ngDialog',
  	'ui.router',
	'ui.bootstrap'
	]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('photoshop', {
            url: '/photoshop',
            templateUrl: 'templates/body-ps.html',
            data: {
                pageTitle: 'Photoshop — Sarah Louise'
            }
        })   

        .state('work', {
            url: '/work',
            templateUrl: 'templates/body-project.html',
            data: {
                pageTitle: 'Work — Sarah Louise'
            }
        }) 

        .state('battle', {
            url: '/battle',
            templateUrl: 'templates/project-battle.html',
            data: {
                pageTitle: 'Battle of the Ages — Sarah Louise'
            }
        })    

        .state('olympia', {
            url: '/olympia',
            templateUrl: 'templates/project-olympia.html',
            data: {
                pageTitle: 'Olympia — Sarah Louise'
            }
        })

        .state('child', {
            url: '/child',
            templateUrl: 'templates/project-child.html',
            data: {
                pageTitle: 'Child First — Sarah Louise'
            }
        })

        .state('system', {
            url: '/system',
            templateUrl: 'templates/project-system.html',
            data: {
                pageTitle: 'System Penetration — Sarah Louise'
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/body-about.html',
            data: {
                pageTitle: 'About — Sarah Louise'
            }
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/work');

    //$locationProvider.html5Mode(true);
});

/*directive to dynamically change the page title when the ui-router state has changed*/
app.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Default title';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

var openImgModal = function(imgTitle){
	console.log("testing" + imgTitle);
	var imgSrc = "img/ps/big/" + imgTitle;

	// here asign the image to the modal when the user click the enlarge link
	$('#imagepreview').attr('src', imgSrc); 

	// imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
	$('#imagemodal').modal('show'); 
}