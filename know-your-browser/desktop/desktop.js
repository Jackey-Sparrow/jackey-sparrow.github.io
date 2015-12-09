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

		$stateProvider
			.state('style', {
				url: '/style',
				templateUrl: 'desktop/templates/desktop.html',
				controller: 'desktopStyleController'
			});

		$stateProvider
			.state('chart', {
				url: '/chart',
				templateUrl: 'desktop/templates/chart.html',
				controller: 'desktopChartController'
			});

		$urlRouterProvider.otherwise('/body');
	});

})(angular);