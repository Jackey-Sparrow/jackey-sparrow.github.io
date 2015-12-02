/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop').controller('desktopController',
		['$scope', 'desktopDataService', '$timeout',
		 function ($scope, desktopDataService, $timeout) {
			 $scope.name = 'desktop';

			 $scope.collection = desktopDataService.getCollection();

			 $scope.keyWord = '';

			 $scope.keyWordChange = function () {
				 var result = {};
				 for (var key in $scope.collection) {
					 if (key.indexOf($scope.keyWord) !== -1) {
						 result[key] = $scope.collection[key];
					 }
				 }

				 $scope.collection = result;
				 $timeout(function () {
					 $scope.$apply();
				 });

			 };

		 }]);
})(angular);