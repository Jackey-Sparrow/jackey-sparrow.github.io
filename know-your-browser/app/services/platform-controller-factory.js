/**
 * Created by Jackey Li on 2015/12/7.
 */
(function (angular) {
	'use strict';

	angular.module('platform').factory('platformControllerFactory',
		['$timeout',
		 function ($timeout) {

			 var service = {};

			 service.initController = function ($scope, dataService) {

				 $scope.collection = [];
				 $scope.keyWord = '';

				 function init() {
					 dataService.getData().then(function (data) {
						 $scope.collection = data;
						 $scope.collectionCopy = angular.copy($scope.collection);
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