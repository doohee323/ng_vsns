'use strict';

app.controller('MainCtrl', function ($scope) {
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
    $http.get(config.url + 'posts.json')
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
        $http.post(config.url + 'posts', { post: $scope.post })
          .success(function (data, status, headers, config) {
            // TODO
            $scope.posts.unshift( data );
          }).error(function (data, status, headers, config) {
            // TODO
          });

      } else if ($scope.formState == "Update") {
        $http.put(config.url + 'posts/' + $scope.post.id + '.json', { post: $scope.post })
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
        $http.delete(config.url + 'posts/'+post.id  );
        var index = $scope.posts.indexOf(post);
        $scope.posts.splice(index,1);
      }
    };
    $scope.editPost = function(post, index){
      $http.get(config.url + 'posts/' + post.id + '.json')
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
  });
