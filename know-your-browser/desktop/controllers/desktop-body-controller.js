/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopBodyController',
		['$scope', 'desktopBodyDataService', 'platformControllerFactory',
		 function ($scope, dataService, platformControllerFactory) {

			 $scope.name = 'document.body';

			 platformControllerFactory.initController($scope, dataService);

		 }]);
})(angular);