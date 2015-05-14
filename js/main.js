var app = angular.module('bodyapp',[
	'ngAnimate', 
	'ngDialog',
  	'ui.router',
	'ui.bootstrap'
	]);

app.controller('MapsCtrl', ['$scope', function($scope) {
  	$scope.greeting="testing ctrl";

  	var initialize = function(){

		var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(49.2569684, -123.1239135)
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);

  	};

	var sketchProc = function(processing){
		// Override draw function, by default it will be called 60 times per second
		processing.draw = function() {
		// determine center and max clock arm length
		var centerX = processing.width / 2, centerY = processing.height / 2;
		var maxArmLength = Math.min(centerX, centerY);

		function drawArm(position, lengthScale, weight) {      
		  processing.strokeWeight(weight);
		  processing.line(centerX, centerY, 
		    centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
		    centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
		}

		// erase background
		processing.background(224);

		var now = new Date();

		// Moving hours arm by small increments
		var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
		drawArm(hoursPosition, 0.5, 5);

		// Moving minutes arm by small increments
		var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
		drawArm(minutesPosition, 0.80, 3);

		// Moving hour arm by second increments
		var secondsPosition = now.getSeconds() / 60;
		drawArm(secondsPosition, 0.90, 1);
		};
	};

/*	var canvas = document.getElementById("canvas1");
	// attaching the sketchProc function to the canvas
	var p = new Processing(canvas, sketchProc);
	// p.exit(); to detach it*/

  	initialize();
}]);

app.controller('dialogCtrl', function($scope, ngDialog){
	$scope.openPicDialog = function(){
		ngDialog.open({
			template: 'test.html',
			controller: ['$scope', function($scope) {
				$scope.myInterval = 3000;
				$scope.slides = [
				{
				  image:'img/olympia/1.png'
				},
				{
				  image: 'http://lorempixel.com/400/200/food'
				},
				{
				  image: 'http://lorempixel.com/400/200/sports'
				},
				{
				  image: 'http://lorempixel.com/400/200/people'
				}
				];
			}]
		});
	}
});