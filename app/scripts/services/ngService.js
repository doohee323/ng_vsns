'use strict';

app.service('ngService', function($http, $location) {

	var $scope = {};
	var ngService = {};
	var baseUrl = 'http://192.168.219.112:3000';
	if(appConf.serverSide == 'spring') {
		baseUrl = '/pattern/pt42/masterdetail';
	}

	ngService.init = function(scope) {
		$scope = scope;
	};

	ngService.retrieveCenters = function(callback) {
		var url = '/uip_ng.json';
		var type = 'get';
		if(appConf.serverSide == 'spring') {
			url = '/retrieveCenterList.ajax';
			type = 'post';
		}
		transManager.exec(baseUrl + url, type, {
			params : {
				code : ''
			}
		}, function(data) {
			$scope.dataset = {};
			if(appConf.serverSide == 'spring') data = data.output1;
			$scope.dataset.ng = angular.copy(data);
			if (callback)
				callback(data);
		}, $http).retrieve();
	};

	ngService.retrieveRegions = function($scope, callback) {
		var url = '/uip_regions.json';
		var type = 'get';
		if(appConf.serverSide == 'spring') {
			url = '/retrieveRegionList.ajax';
			type = 'post';
		}
		var code = $scope.center.code;
		transManager.exec(baseUrl + url, type, {
			params : {
				centerCode : code
			}
		}, function(data) {
			if(appConf.serverSide == 'spring') data = data.output1;
			if ($scope.dataset) {
				for (var i = 0; i < $scope.dataset.ng.length; i++) {
					if ($scope.dataset.ng[i].code == (code + '')) {
						$scope.dataset.regions = angular.copy(data);
					}
				}
			}
			if (callback)
				callback(data);
		}, $http).retrieve();
	};

	ngService.saveCenter = function(callback) {
		var params = {};
		var ng = angular.copy($scope.dataset.ng);
		var regions = angular.copy($scope.dataset.regions);

		if (ng && ng.length > 0) {
			for (var i = ng.length - 1; i >= 0; i--) {
				if (!ng[i].rowStatus || ng[i].rowStatus == 'NORMAL') {
					ng.splice(i, 1);
				}
			}
		}
		if (regions && regions.length > 0) {
			for (var i = ng.length - 1; i >= 0; i--) {
				if (!regions[i].rowStatus || regions[i].rowStatus == 'NORMAL') {
					regions.splice(i, 1);
				}
			}
		}
		params.uip_center = ng;
		params.regions = regions;

		var url = '/uip_ng/11.json';
		var type = 'PATCH';
		if(appConf.serverSide == 'spring') {
			url = '/saveCenterRegion.ajax';
			type = 'post';
		}
		
		transManager.exec(baseUrl + url, type, params, function(data) {
			if(appConf.serverSide == 'spring') data = data.output1;
			if (callback)
				callback(data);
			$scope.dataset.ng = angular.copy($scope.ng);
		}, $http).save();
	};

	ngService.getCenters = function() {
		return $scope.ng;
	};

	ngService.addCenter = function(code, name, chief, address, phone) {
		var chkExist = false;
		if (code) {
			for (var i = 0; i < $scope.ng.length; i++) {
				if ($scope.ng[i].code == (code + '')) {
					$scope.ng[i].name = name;
					$scope.ng[i].chief = chief;
					$scope.ng[i].address = address;
					$scope.ng[i].phone = phone;
					$scope.newCenter = $scope.ng[i];

					$scope.dataset.ng[i] = angular.copy($scope.ng[i]);
					$scope.dataset.ng[i].rowStatus = 'UPDATE';
					chkExist = true;
					break;
				}
			}
		}
		if (!chkExist) {
			var topID = $scope.ng.length + 1;
			$scope.ng.push({
				code : topID,
				name : name,
				chief : chief,
				address : address,
				phone : phone
			});
			var nlength = $scope.ng.length - 1;
			$scope.dataset.ng.push($scope.ng[nlength]);
			$scope.dataset.ng[nlength].rowStatus = 'INSERT';
			$scope.newCenter = $scope.ng[nlength];
		}
		$scope.$apply();
		return $scope;
	};

	ngService.deleteCenter = function(code) {
		var ng = $scope.ng;
		for (var i = ng.length - 1; i >= 0; i--) {
			if (ng[i].code == (code + '')) {
				$scope.dataset.ng[i].rowStatus = 'DELETE';
				ng.splice(i, 1);
				break;
			}
		}
		var regions = $scope.regions;
		for (var i = regions.length - 1; i >= 0; i--) {
			if (regions[i].code == (code + '')) {
				$scope.dataset.regions[i].rowStatus = 'DELETE';
				break;
			}
		}
	};

	ngService.getCenter = function(code) {
		var ng = null;
		try {
			ng = $scope.ng;
		} catch (e) {
			$location.path("/ng");
			return;
		}

		for (var i = 0; i < ng.length; i++) {
			if (ng[i].code == (code + '')) {
				ng[i].rowStatus = 'NORMAL';
				return ng[i];
			}
		}
		return null;
	};

	return ngService;
});
