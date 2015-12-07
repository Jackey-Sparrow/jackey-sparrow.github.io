/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopDocumentController',
		['$scope', 'desktopDocumentDataService', 'platformControllerFactory',
		 function ($scope, dataService, platformControllerFactory) {

			 $scope.name = 'document';

			 platformControllerFactory.initController($scope, dataService);

		 }]);
})(angular);