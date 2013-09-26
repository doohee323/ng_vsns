'use strict';

var config = {
//		url : 'http://localhost:3000/'
	url : 'http://192.168.219.112:3000/'
}

var app = angular.module('ngApp', []);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/partials/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/partials/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);