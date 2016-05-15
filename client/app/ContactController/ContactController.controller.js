'use strict';

angular.module('funTimesApp')
	.controller('ContactControllerCtrl', function($scope, $http, $log, promiseTracker) {
		
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
				var to,subject,text;     
			        	to='funtimesireland@gmail.com';
		        		subject='Feedback received from ' + $scope.name;
		        		text='Name: ' + $scope.name + ' Email: ' + $scope.email + ' Nature of Request : ' + $scope.subjectList + ' URL: ' + $scope.url + ' Comments: ' + $scope.comments;
				        $("#message").text('Sending E-mail...Please wait');
				        $.get("/send",{to:to,subject:subject,text:text},function(data){
				        if(data==='sent')
				        {	
				        	to=$scope.email;
				            subject='Thanks for your email ' + $scope.name;
				            text='Thanks for your email ' + $scope.name + '! We really appreciate your feedback and will do our very best to improve your experience!';
				        	$.get("./send",{to:to,subject:subject,text:text});
				        	//$scope.myVar = !$scope.myVar;
				        	//document.getElementById("helpForm").reset();
				        	$scope.subjectList = null;
				        	document.getElementById('seanForm').reset();
				        	$scope.messages =('Your form has been submitted! Please check your email ' + $scope.email +' for confirmation!');
				            $("#message").empty().html('Your form has been submitted! Please check your email ' + $scope.email +' for confirmation!');
				            $scope.submitted = false;
				            //location.reload();
				        }

					});
			    }
        };
      
      });




/*
angular.module('assignment2.app')
    .controller('ContactControllerCtrl', function ($scope, $http, $log, promiseTracker, $timeout) {
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
          }

          // Default values for the request.
          var config = {
            params : {
              'callback' : 'JSON_CALLBACK',
              'name' : $scope.name,
              'email' : $scope.email,
              'subjectList' : $scope.subjectList,
              'url' : $scope.url,
              'comments' : $scope.comments
            },
          };

          // Perform JSONP request.
          var $promise = $http.jsonp('../contact/response.json', config)
            .success(function(data, status, headers, config) {
              if (data.status == 'OK') {
                $scope.name = null;
                $scope.email = null;
                $scope.subjectList = null;
                $scope.url = null;
                $scope.comments = null;
                $scope.messages = 'Your form has been sent!';
                $scope.submitted = false;
              } else {
                $scope.messages = 'Oops, we received your request, but there was an error processing it.';
                $log.error(data);
              }
            })
            .error(function(data, status, headers, config) {
              $scope.progress = data;
              $scope.messages = 'There was a network error. Try again later.';
              $log.error(data);
            })
            .finally(function() {
              // Hide status messages after three seconds.
              $timeout(function() {
                $scope.messages = null;
              }, 3000);
            });

          // Track the request and show its progress to the user.
          $scope.progress.addPromise($promise);
        };
    }); 

    */