var app = angular.module('bodyapp',[
	'ngAnimate', 
  	'ui.router',
	'ui.bootstrap'
	]);

app.controller('MapsCtrl', ['$scope', 
  function($scope) {
  	$scope.greeting="testing ctrl";

  	var initialize = function(){

		var mapOptions = {
		zoom: 2,
		center: new google.maps.LatLng(0,30)
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);

  	}

  	initialize();
}]);