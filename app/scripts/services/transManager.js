'use strict';

var headers = {
		'Accept' : 'application/json',
		'Content-type' : 'application/json',
};

/**
 * @desc transaction 처리
 */	
app.service('transManager', function() {
	var $http;
	this.init = function(_$http) {
		$http = _$http;
	};
	
	/**
	 * @param url, type, input, callback
	 * @desc 조회 처리 (get 방식의 parameter 처리)
	 */		
	this.retrieve = function(url, type, input, callback) {
		$http({
			method : type,
			url : url,
			params : input,
			data : input,
			headers : headers
		}).success(function(data, status, headers, config) {
			callback(data);
		}).error(function(data, status, headers, config) {
			data = status;
			callback(data);
		});
	};
	
	/**
	 * @param url, type, data, callback
	 * @desc 저장 처리 (post 방식의 parameter 처리)
	 */		
	this.save = function(url, type, data, callback) {
		$http({
			method : type,
			url : url,
			data : data,
			headers : headers
		}).success(function(data, status, headers, config) {
			callback(data);
		}).error(function(data, status, headers, config) {
			data = status;
			callback(data);
		});
	};
});