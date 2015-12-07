/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop').controller('desktopBodyController',
		['$scope', 'desktopBodyDataService', '$timeout',
		 function ($scope, desktopBodyDataService, $timeout) {

			 $scope.name = 'body';

			 $scope.keyWord = '';

			 function init() {
				 desktopBodyDataService.getData().then(function (data) {
					 $scope.collection = data;
					 $scope.collectionCopy = angular.copy($scope.collection);
				 });
			 }

			 $scope.keyWordChange = function () {
				 $scope.collection = desktopBodyDataService.filterCollection($scope.keyWord, $scope.collectionCopy);
				 $timeout(function () {
					 $scope.$apply();
				 });
			 };

			 init();

		 }]);
})(angular);