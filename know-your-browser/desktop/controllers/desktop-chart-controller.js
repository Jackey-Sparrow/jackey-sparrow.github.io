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

			 getChartData(desktopStyleDataService);
			 getChartData(desktopDocumentDataService);
			 getChartData(desktopWindowDataService);
			 getChartData(desktopBodyDataService);

			 function getChartData(dataService) {
				 var statistics = dataService.getStatistics();
				 var name = dataService.getName;
				 if (!statistics.CHROME) {
					 dataService.getData().then(function () {
						 statistics = dataService.getStatistics();
						 for (var key in statistics) {//jshint ignore:line
							 $scope[name + 'Labels'].push(key);
							 $scope[name + 'Data'].push(statistics[key]);
						 }
						 $scope[name + 'Loading'] = false;
					 });
				 }
				 else {
					 for (var key in statistics) {//jshint ignore:line
						 $scope[name + 'Labels'].push(key);
						 $scope[name + 'Data'].push(statistics[key]);
					 }
					 $scope[name + 'Loading'] = false;
				 }
			 }


//			 var documentD = desktopDocumentDataService.getStatistics();
//
//			 if (!documentD.CHROME) {
//				 desktopDocumentDataService.getData().then(function () {
//					 documentD = desktopDocumentDataService.getStatistics();
//					 for (var key in documentD) {//jshint ignore:line
//						 $scope.documentLabels.push(key);
//						 $scope.documentData.push(documentD[key]);
//					 }
//					 $scope.documentLoading = false;
//				 });
//			 }
//			 else {
//				 for (var key in documentD) {//jshint ignore:line
//					 $scope.documentLabels.push(key);
//					 $scope.documentData.push(documentD[key]);
//				 }
//				 $scope.documentLoading = false;
//			 }
//
//
//			 var styleT = desktopStyleDataService.getStatistics();
//
//			 if (!styleT.CHROME) {
//				 desktopStyleDataService.getData().then(function () {
//					 styleT = desktopStyleDataService.getStatistics();
//					 for (var key in styleT) {//jshint ignore:line
//						 $scope.styleLabels.push(key);
//						 $scope.styleData.push(styleT[key]);
//					 }
//					 $scope.styleLoading = false;
//				 });
//			 }
//			 else {
//				 for (var key in styleT) {//jshint ignore:line
//					 $scope.styleLabels.push(key);
//					 $scope.styleData.push(styleT[key]);
//				 }
//				 $scope.styleLoading = false;
//			 }
//
//			 var windowW = desktopWindowDataService.getStatistics();
//
//			 if (!windowW.CHROME) {
//				 desktopWindowDataService.getData().then(function () {
//					 windowW = desktopWindowDataService.getStatistics();
//					 for (var key in windowW) {//jshint ignore:line
//						 $scope.windowLabels.push(key);
//						 $scope.windowData.push(windowW[key]);
//					 }
//					 $scope.windowLoading = false;
//				 });
//			 }
//			 else {
//				 for (var key in windowW) {//jshint ignore:line
//					 $scope.windowLabels.push(key);
//					 $scope.windowData.push(windowW[key]);
//				 }
//				 $scope.windowLoading = false;
//			 }
//
//			 var bodyY = desktopBodyDataService.getStatistics();
//
//			 if (!bodyY.CHROME) {
//				 desktopBodyDataService.getData().then(function () {
//					 bodyY = desktopBodyDataService.getStatistics();
//					 for (var key in bodyY) {//jshint ignore:line
//						 $scope.bodyLabels.push(key);
//						 $scope.bodyData.push(bodyY[key]);
//					 }
//					 $scope.bodyLoading = false;
//				 });
//			 }
//			 else {
//				 for (var key in bodyY) {//jshint ignore:line
//					 $scope.bodyLabels.push(key);
//					 $scope.bodyData.push(bodyY[key]);
//				 }
//				 $scope.bodyLoading = false;
//			 }


			 $scope.openLoading = function () {
				 var closeLoading = $platformLoading.show();
			 };
		 }]);
})(angular);