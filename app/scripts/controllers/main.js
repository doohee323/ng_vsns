'use strict';

angular.module('ngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('ngApp')
  .factory('itemFactory', function($http) {
    // var items = [
    //   { "description": "1"},
    //   { "description": "1"},
    //   { "description": "1"},
    //   { "description": "1"},
    //   { "description": "1"},
    // ];

//    delete $http.defaults.headers.common['X-Requested-With'];
//    $http.defaults.useXDomain = true;

    var items = $http.get('http://vsns.ror.la/items.json').success(function(response) {
      return response;
    });

    var factory = {};

    factory.getItems = function() { 
      return items;
    };

    return factory; 
  })
  .controller('ItemsCtrl', function($scope, itemFactory) {
    $scope.items = itemFactory.getItems();
  });
