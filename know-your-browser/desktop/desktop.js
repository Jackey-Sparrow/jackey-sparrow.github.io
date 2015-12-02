/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop', ['ui.router']);

	angular.module('desktop').config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('desktop', {
				url: '/desktop',
				templateUrl: 'desktop/templates/desktop.html',
				controller: 'desktopController'
			});

		$urlRouterProvider.otherwise('/desktop');
	});

})(angular);