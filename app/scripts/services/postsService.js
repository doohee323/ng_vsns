'use strict';

/**
 * @desc posts 처리를 위한 service
 */	
app.service('postsService', function() {

	var transManager;
	var $scope;
	var $http;
	var $location;
	
	/**
	 * @param _transManager,
	 *            _$scope, _$http, _$location
	 * @desc 변수 초기화
	 */	
	this.init = function(_transManager, _$scope, _$http, _$location) {
		$scope = _$scope;
		$http = _$http;
		$location = _$location;
		_transManager.init(_$http);
		transManager = _transManager;
	};

	this.main = function() {
		/**
		 * @desc 기본 조회 처리
		 */	
		transManager.retrieve(config.url + 'posts.json', 'get', '', function(data) {
			$scope.posts = data;
			$scope.formState = "Create";
		});
		
		/**
		 * @desc $scope가 submit 상태일 때 저장 처리
		 */	
		 $scope.submit = function() {
			 if ($scope.formState == "Create"){
					transManager.save(config.url + 'posts', 'post', '', function(data) {
						 $scope.posts.unshift( data );
					});
			 } else if ($scope.formState == "Update"){
					transManager.save(config.url + 'posts/' + $scope.post.id + '.json', 'put', { post:
						 $scope.post }, function(data) {
							 for (var i in $scope.posts) {
								 if ($scope.posts[i].id == data.id) {
									 $scope.posts[i] = data;
								 }
							 }
							 $scope.post = {};
							 $scope.formState = "Create";
					});
			 }
		};

		/**
		 * @desc $scope가 deletePost 상태일 때 삭제 처리
		 */	
		$scope.deletePost = function() {
			if (confirm('Are you sure?') == true) {
				transManager.save(config.url + 'posts/'+post.id, 'delete', '', function(data) {
					 var index = $scope.posts.indexOf(post);
					 $scope.posts.splice(index,1);
				});
			 }
		};
		
		/**
		 * @desc $scope가 editPost 상태일 때 수정 처리
		 */	
		$scope.editPost = function() {
			transManager.retrieve(config.url + 'posts/' + post.id + '.json', 'get', '', function(data) {
				$scope.posts = data;
				$scope.formState = "Update";
			});
		};
	};
});
