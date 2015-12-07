/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop', ['ui.router']);

	angular.module('desktop').config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('body', {
				url: '/body',
				templateUrl: 'desktop/templates/desktop.html',
				controller: 'desktopBodyController'
			});

		$stateProvider
			.state('window', {
				url: '/window',
				templateUrl: 'desktop/templates/desktop.html',
				controller: 'desktopWindowController'
			});

		$stateProvider
			.state('document', {
				url: '/document',
				templateUrl: 'desktop/templates/desktop.html',
				controller: 'desktopDocumentController'
			});

		$urlRouterProvider.otherwise('/body');
	});

})(angular);