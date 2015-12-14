/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	//todo:refactory
	angular.module('desktop').controller('desktopChartController',
		['$scope', '$platformLoading', 'desktopBodyDataService','desktopWindowDataService',
		 function ($scope, $platformLoading, desktopBodyDataService,desktopWindowDataService) {
			 $scope.bodyLabels = [];
			 $scope.windowLabels = [];
			 $scope.bodyData = [];
			 $scope.windowData = [];

			 var body = desktopBodyDataService.getStatistics();

			 if (!body.CHROME) {
				 desktopBodyDataService.getData().then(function () {
					 body = desktopBodyDataService.getStatistics();
					 for (var key in body) {
						 $scope.bodyLabels.push(key);
						 $scope.bodyData.push(body[key]);
					 }
				 });
			 }

			 var window = desktopWindowDataService.getStatistics();

			 if (!window.CHROME) {
				 desktopWindowDataService.getData().then(function () {
					 window = desktopBodyDataService.getStatistics();
					 for (var key in body) {
						 $scope.windowLabels.push(key);
						 $scope.windowData.push(window[key]);
					 }
				 });
			 }


			 $scope.openLoading = function () {
				 var closeLoading = $platformLoading.show();
			 };
		 }]);
})(angular);