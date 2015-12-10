/**
 * Created by Jackey Li on 2015/12/9.
 */
(function (angular) {
	'use strict';

	angular.module('platform').directive('platformLoading',
		[function () {
			return {
				restrict: 'EA',
				replace: true,
				template: '<div class="loading-container">' +
				'<div class="loading-overlay"></div>' +
				'<div class="loading-body">' +
				'<div data-platform-spinner></div>' +
				'</div>' +
				'<div class="loading-close">' +
				'<div class="loading-close-text" data-ng-click="close()">x</div>' +
				'</div>' +
				'</div>',
				link: function (scope) {
					scope.close = function () {
						scope.cancel();
					};
				}
			};
		}]);

	angular.module('platform').directive('platformSpinner', [function () {
		return {
			restrict: 'AE',
			replace: true,
			template: '<div class="loading-spinner">' +
			'<div class="rect1"></div>' +
			'<div class="rect2"></div>' +
			'<div class="rect3"></div>' +
			'<div class="rect4"></div>' +
			'<div class="rect5"></div>' +
			'</div>'
		};
	}]);

	angular.module('platform').factory('$platformLoading',
		['$rootScope', '$compile', '$document',
		 function ($rootScope, $compile, $document) {
			 return {
				 show: function () {

					 var scope = $rootScope.$new(true);

					 scope.showLoading = function () {
						 scope.element = $compile('<platform-loading></platform-loading>')(scope);
						 $document[0].body.appendChild(scope.element[0]);
					 };

					 scope.cancel = function () {
						 setTimeout(function () {
							 $document[0].body.removeChild(scope.element[0]);
							 scope.$destroy();
						 }, 1000);
					 };

					 scope.showLoading();

					 return scope.cancel;
				 }
			 };
		 }]);
})(angular);