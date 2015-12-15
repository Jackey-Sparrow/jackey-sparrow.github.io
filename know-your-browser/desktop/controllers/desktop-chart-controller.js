/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	//todo:refactory
	angular.module('desktop').controller('desktopChartController',
		['$scope', '$platformLoading', 'desktopBodyDataService',
		 'desktopWindowDataService', 'desktopDocumentDataService', 'desktopStyleDataService',
		 function ($scope, $platformLoading, desktopBodyDataService,
		           desktopWindowDataService, desktopDocumentDataService, desktopStyleDataService) {

			 $scope.bodyLabels = [];
			 $scope.bodyData = [];

			 $scope.windowLabels = [];
			 $scope.windowData = [];

			 $scope.documentLabels = [];
			 $scope.documentData = [];

			 $scope.styleLabels = [];
			 $scope.styleData = [];

			 $scope.bodyLoading = true;
			 $scope.documentLoading = true;
			 $scope.windowLoading = true;
			 $scope.styleLoading = true;
			 getChartData(desktopStyleDataService, $scope.styleLabels, $scope.styleData);
			 getChartData(desktopDocumentDataService, $scope.documentLabels, $scope.documentData);
			 getChartData(desktopWindowDataService, $scope.windowLabels, $scope.windowData);
			 getChartData(desktopBodyDataService, $scope.bodyLabels, $scope.bodyData);

			 function getChartData(dataService, labels, data) {
				 var statistics = desktopStyleDataService.getStatistics();

				 if (!statistics.CHROME) {
					 dataService.getData().then(function () {
						 statistics = dataService.getStatistics();
						 console.log(dataService.getName);
						 for (var key in statistics) {//jshint ignore:line
							 labels.push(key);
							 data.push(statistics[key]);
						 }
						 $scope[dataService.getName + 'Loading'] = false;

					 });
				 }
				 else {
					 for (var key in statistics) {//jshint ignore:line
						 labels.push(key);
						 data.push(statistics[key]);
					 }
				 }
			 }


			 $scope.openLoading = function () {
				 var closeLoading = $platformLoading.show();
			 };
		 }]);
})(angular);