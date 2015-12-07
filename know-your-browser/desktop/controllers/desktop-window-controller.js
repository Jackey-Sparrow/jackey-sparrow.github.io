/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop').controller('desktopWindowController',
		['$scope', 'desktopWindowDataService', '$timeout',
		 function ($scope, desktopWindowDataService, $timeout) {

			 $scope.name = 'desktop';

			 $scope.keyWord = '';

			 function init() {
				 desktopWindowDataService.getData().then(function (data) {
					 $scope.collection = data;
					 $scope.collectionCopy = angular.copy($scope.collection);
				 });
			 }

			 $scope.keyWordChange = function () {
				 $scope.collection = desktopWindowDataService.filterCollection($scope.keyWord, $scope.collectionCopy);
				 $timeout(function () {
					 $scope.$apply();
				 });
			 };

			 init();

		 }]);
})(angular);