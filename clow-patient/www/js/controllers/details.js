var app = angular.module('clow-patient.controllers.details', []);

app.controller('DetailsCtrl', function($scope, $state) {
	$scope.firstname = '';

	console.log("Details Controller");

	var firebaseRef = new Firebase("https://clow.firebaseio.com/user");
	   	
	firebaseRef.child('firstname').once('value', function(dataSnapshot) {
   	$scope.firstname = 'Welcome, ' + dataSnapshot.B.C;

   	console.log($scope.firstname);

   });
});