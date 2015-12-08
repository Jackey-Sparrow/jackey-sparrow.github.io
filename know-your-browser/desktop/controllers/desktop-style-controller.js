/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').controller('desktopStyleController',
		['$scope', 'desktopStyleDataService', 'platformControllerFactory',
		 function ($scope, dataService, platformControllerFactory) {

			 $scope.name = 'style';

			 platformControllerFactory.initController($scope, dataService);

		 }]);
})(angular);