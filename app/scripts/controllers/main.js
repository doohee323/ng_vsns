'use strict';

angular.module('ngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('LoginCtrl', function($scope){
    $scope.login = function() {
      if (this.email) {
        alert(this.email);
      }
    };
  })
  .controller('PostsCtrl', function($scope, $http) {
    $http.get('http://localhost:3000/posts.json')
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.posts = data;
        $scope.formState = "Create";
      })
      .error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with status
        // code outside of the <200, 400) range
      });
    $scope.submit = function() {
      if ($scope.formState == "Create"){
        $http.post("http://localhost:3000/posts", { post: $scope.post })
          .success(function (data, status, headers, config) {
            // TODO
            $scope.posts.unshift( data );
          }).error(function (data, status, headers, config) {
            // TODO
          });

      } else if ($scope.formState == "Update") {
        $http.put("http://localhost:3000/posts/" + $scope.post.id + '.json', { post: $scope.post })
          .success(function (data, status, headers, config) {
            for (var i in $scope.posts) {
              if ($scope.posts[i].id == data.id) {
                $scope.posts[i] = data;
              }
            }
          }).error(function (data, status, headers, config) {
            alert("failure");
            // TODO
          });
      };
      $scope.post = {};
      $scope.formState = "Create";
    };
    $scope.deletePost = function(post){
      if (confirm('Are you sure?') == true) {
        $http.delete('http://localhost:3000/posts/'+post.id  );
        var index = $scope.posts.indexOf(post);
        $scope.posts.splice(index,1);
      }
    };
    $scope.editPost = function(post, index){
      $http.get('http://localhost:3000/posts/' + post.id + '.json')
        .success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.post = data;
          $scope.formState = "Update";
        })
        .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with status
          // code outside of the <200, 400) range
        });
    };
  })
  .directive('showonhoverparent',
    function() {
      return {
        link : function(scope, element, attrs) {
          element.parent().bind('mouseenter', function() {
            element.show();
          });
          element.parent().bind('mouseleave', function() {
            element.hide();
          });
        }
      };
  });
