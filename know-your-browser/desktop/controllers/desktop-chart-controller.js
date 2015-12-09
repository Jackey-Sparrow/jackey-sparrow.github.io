/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopChartController',
		['$scope', '$platformLoading',
		 function ($scope, $platformLoading) {
			 $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
			 $scope.data = [300, 500, 100];
			 $scope.openLoading = function () {
				 $platformLoading.show();
			 };
		 }]);
})(angular);