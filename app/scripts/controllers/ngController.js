'use strict';

/**
 * @desc MainCtrl : main.html 를 위한 controller
 * @param $scope
 */
app.controller('MainCtrl', function($scope) {
	$scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];
});

/**
 * @desc LoginCtrl 처리: login.html 를 위한 controller
 * @param $scope
 */
app.controller('LoginCtrl', function($scope) {
	$scope.login = function() {
		if (this.email) {
			alert(this.email);
		}
	};
});

/**
 * @param $scope,
 *            $http, $location, transManager, postsService
 * @desc PostsCtrl 처리 : posts.html 를 위한 controller
 */
app.controller('PostsCtrl', function($scope, $http, $location, transManager, postsService) {
	postsService.init(transManager, $scope, $http, $location);
	postsService.main();
});
