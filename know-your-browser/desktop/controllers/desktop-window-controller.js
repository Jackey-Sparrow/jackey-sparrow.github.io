/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopWindowController',
		['$scope', 'desktopWindowDataService', 'platformControllerFactory',
		 function ($scope, dataService, platformControllerFactory) {

			 $scope.name = 'window';

			 platformControllerFactory.initController($scope, dataService);

		 }]);
})(angular);