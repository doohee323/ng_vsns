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

    var items = $http.get('http://localhost:3000/items.json').success(function(data) {
      debugger;
      return data;
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
