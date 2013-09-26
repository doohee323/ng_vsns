'use strict';

var headers = {
		'Accept' : 'application/json',
		'Content-type' : 'application/json',
};

var transManager = {};
transManager.exec = function(url, type, params, callback, $http, $httpBackend, $templateCache) {
	var input = JSON.stringify(params);

	transManager.retrieve = function() {
		$http({
			method : type,
			url : url,
			params : input,
			data : input,
			headers : headers
		}).success(function(data, status, headers, config) {
			debugger;
			callback(data);
		}).error(function(data, status, headers, config) {
			debugger;
			data = status;
			callback(data);
		});
	};

	transManager.save = function() {
		$http({
			method : type,
			url : url,
			data : input,
			headers : headers
		}).success(function(data, status, headers, config) {
			debugger;
			callback(data);
		}).error(function(data, status, headers, config) {
			debugger;
			data = status;
			callback(data);
		});
	};
	return transManager;
};