var app = angular.module('clow-patient.controllers.intro', []);

app.controller('IntroCtrl', function($scope, $state, $location, $timeout, $ionicPopup, $firebase) {

	console.log("Intro Controller");
 
    $scope.init = function() {
    	$scope.passcode = "";
    }
     $scope.add = function(value) {
       if($scope.passcode.length < 4) {
          $scope.passcode = $scope.passcode + value;
          if($scope.passcode.length == 4) {
              $timeout(function() {
                  console.log("The four digit code was entered");
              }, 500);
          }
      }
    }
 
    $scope.delete = function() {
 		 if($scope.passcode.length > 0) {
        $scope.passcode = $scope.passcode.substring(0, $scope.passcode.length - 1);
        }
    }

       // Info ( ? ) dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Whats This?',
       template: 'Enter you appointment details code from the front desk.'
     })
   }

   $scope.submit = function(lastName) {
   	var firebaseRef = new Firebase("https://clow.firebaseio.com/user");

   	firebaseRef.child('code').once('value', function(dataSnapshot) {
   		var code = dataSnapshot.B.C;
   		console.log(code);
   		firebaseRef.child('lastname').once('value', function(dataSnapshot) {
   			var lastname = dataSnapshot.B.C;

   			if (parseInt($scope.passcode) === code && lastName === dataSnapshot.B.C)
   				$state.go('details');
   		})
   	});
   }	
});
