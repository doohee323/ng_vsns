'use strict';

/**
 * MainCtrl 처리
 * @param $scope
 * @desc main.html 를 위한 controller
 */
app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});

/**
 * LoginCtrl 처리
 * @param $scope
 * @desc login.html 를 위한 controller
 */
app.controller('LoginCtrl', function($scope){
    $scope.login = function() {
      if (this.email) {
        alert(this.email);
      }
    };
});

/**
 * PostsCtrl 처리
 * @param $scope, $http
 * @desc posts.html 를 위한 controller
 */
app.controller('PostsCtrl', function($scope, $http, $location, postsService) {
	postsService.main($scope, $http, $location);
});
