/**
 * Created by Jackey Li on 2015/12/7.
 */
(function (angular) {
	'use strict';

	angular.module('platform').factory('platformControllerFactory',
		['$timeout', '$platformLoading',
		 function ($timeout, $platformLoading) {

			 var service = {};

			 service.initController = function ($scope, dataService) {

				 $scope.collection = [];
				 $scope.keyWord = '';

				 function init() {
					 var unLoading = $platformLoading.show();
					 dataService.getData().then(function (data) {
						 $scope.collection = data;
						 $scope.collectionCopy = angular.copy($scope.collection);
						 unLoading();
					 }, function () {
						 unLoading();
					 });
				 }

				 $scope.keyWordChange = function () {
					 $scope.collection = dataService.filterCollection($scope.keyWord, $scope.collectionCopy);
					 $timeout(function () {
						 $scope.$apply();
					 });
				 };

				 init();
			 };

			 return service;
		 }]);
})(angular);