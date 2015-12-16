/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop').controller('desktopController',
		['$scope', 'desktopDataService', '$timeout',
		 function ($scope, desktopDataService, $timeout) {

			 $scope.name = 'desktop';

			 $scope.keyWord = '';

			 function init() {
				 desktopDataService.getBodyBom().then(function (data) {
					 $scope.collection = data;
					 $scope.collectionCopy = angular.copy($scope.collection);
				 });
			 }

			 $scope.keyWordChange = function () {
				 $scope.collection = desktopDataService.filterCollection($scope.keyWord, $scope.collectionCopy);
				 $timeout(function () {
					 $scope.$apply();
				 });
			 };

			 init();

		 }]);
})(angular);