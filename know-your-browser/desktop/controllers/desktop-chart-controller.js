/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	//todo:refactory
	angular.module('desktop').controller('desktopChartController',
		['$scope', '$platformLoading', 'desktopBodyDataService', 'desktopWindowDataService', 'desktopDocumentDataService',
		 function ($scope, $platformLoading, desktopBodyDataService, desktopWindowDataService, desktopDocumentDataService) {
			 $scope.bodyLabels = [];
			 $scope.bodyData = [];

			 $scope.windowLabels = [];
			 $scope.windowData = [];

			 $scope.documentLabels = [];
			 $scope.documentData = [];

			 var bodyY = desktopBodyDataService.getStatistics();

			 if (!bodyY.CHROME) {
				 desktopBodyDataService.getData().then(function () {
					 bodyY = desktopBodyDataService.getStatistics();
					 for (var key in bodyY) {
						 $scope.bodyLabels.push(key);
						 $scope.bodyData.push(bodyY[key]);
					 }
				 });
			 }

			 var windowW = desktopWindowDataService.getStatistics();

			 if (!windowW.CHROME) {
				 desktopWindowDataService.getData().then(function () {
					 windowW = desktopWindowDataService.getStatistics();
					 for (var key in windowW) {
						 $scope.windowLabels.push(key);
						 $scope.windowData.push(windowW[key]);
					 }
				 });
			 }

			 var documentT = desktopDocumentDataService.getStatistics();

			 if (!documentT.CHROME) {
				 desktopDocumentDataService.getData().then(function () {
					 documentT = desktopDocumentDataService.getStatistics();
					 for (var key in documentT) {
						 $scope.documentLabels.push(key);
						 $scope.documentData.push(documentT[key]);
					 }
				 });
			 }


			 $scope.openLoading = function () {
				 var closeLoading = $platformLoading.show();
			 };
		 }]);
})(angular);