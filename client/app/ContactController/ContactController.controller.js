'use strict';

angular.module('assignment2App')
	.controller('ContactControllerCtrl', function($scope, $http, $log, promiseTracker, $timeout) {
		
		$scope.subjectListOptions = {
          'bug': 'Report a Bug',
          'account': 'Account Problems',
          'other': 'Other'
        };

        // Inititate the promise tracker to track form submissions.
        $scope.progress = promiseTracker();

        // Form submit handler.
        $scope.submit = function(form) {
          // Trigger validation flag.
	    	$scope.submitted = true;
	    // If form is invalid, return and let AngularJS show validation errors.
	    if (form.$invalid) {
	        return;
	    }else{
				var from,to,subject,text;     
			        	to="funtimesireland@mailinator.com";
		        		subject="Feedback received from " + $scope.name;
		        		text="Name: " + $scope.name + " Email: " + $scope.email + " Nature of Request :" + $scope.subjectList + " URL: " + $scope.url + " Comments: " + $scope.comments;
				        $("#message").text("Sending E-mail...Please wait");
				        $.get("/send",{to:to,subject:subject,text:text},function(data){
				        if(data=="sent")
				        {	
				        	to=$scope.email;
				            subject="Thanks for your email " + $scope.name;
				            text="Thanks for your email " + $scope.name + "! We really appreciate your feedback and will do our very best to improve your experience!";
				        	$.get("./send",{to:to,subject:subject,text:text});
				        	//$scope.myVar = !$scope.myVar;
				        	//document.getElementById("helpForm").reset();
				        	$scope.subjectList = null;
				        	document.getElementById("seanForm").reset();
				        	$scope.messages =("Your form has been submitted! Please check your email " + $scope.email +" for confirmation!");
				            $("#message").empty().html("Your form has been submitted! Please check your email " + $scope.email +" for confirmation!");
				            $scope.submitted = false;
				            //location.reload();
				        }

					});
			    }
        }	
      
});
