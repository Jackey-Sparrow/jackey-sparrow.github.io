/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop').controller('desktopController',
		['$scope',
			function ($scope) {
				$scope.name = 'desktop';
			}]);
})(angular);