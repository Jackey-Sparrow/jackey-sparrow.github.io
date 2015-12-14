/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopChartController',
		['$scope', '$platformLoading', 'desktopBodyDataService',
		 function ($scope, $platformLoading, desktopBodyDataService) {
			 $scope.labels = [];
			 $scope.data = [];

			 var result = desktopBodyDataService.getStatistics();

			 if (!result.CHROME) {
				 desktopBodyDataService.getData().then(function () {
					 result = desktopBodyDataService.getStatistics();
					 for (var key in result) {
						 $scope.labels.push(key);
						 $scope.data.push(result[key]);
					 }
				 });
			 }


			 $scope.openLoading = function () {
				 var closeLoading = $platformLoading.show();
			 };
		 }]);
})(angular);