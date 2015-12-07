/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict'

	angular.module('desktop', ['ui.router']);

	angular.module('desktop').config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('body', {
				url: '/body',
				templateUrl: 'desktop/templates/desktop-body.html',
				controller: 'desktopBodyController'
			});

		$stateProvider
			.state('window', {
				url: '/window',
				templateUrl: 'desktop/templates/desktop-body.html',
				controller: 'desktopWindowController'
			});

		$urlRouterProvider.otherwise('/body');
	});

})(angular);