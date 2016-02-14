var app = angular.module('clow-patient.controllers.details', []);

app.controller('DetailsCtrl', function($scope, $state) {

	console.log("Details Controller");

	var firebaseRef = new Firebase("https://clow.firebaseio.com/user");
	   	
	firebaseRef.child('lastname').once('value', function(dataSnapshot) {
   	var lastname = dataSnapshot.B.C

   	console.log(lastname);

   	//get last name in details page to say Welcome {{lastname}}

   });
});