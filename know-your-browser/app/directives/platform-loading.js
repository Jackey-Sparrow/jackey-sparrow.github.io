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
				'<div class="loading-body"></div>' +
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

	angular.module('platform').factory('$platformLoading',
		['$rootScope', '$compile', '$document',
		 function ($rootScope, $compile, $document) {
			 return {
				 show: function () {

					 var scope = $rootScope.$new(true),
						 element;

					 scope.showLoading = function () {
						 element = scope.element = $compile('<platform-loading></platform-loading>')(scope);
						 $document[0].body.appendChild(element[0]);
					 };

					 scope.cancel = function () {
						 $document[0].body.removeChild(element[0]);
						 element = null;
						 scope.$destroy();
					 };

					 scope.showLoading();

					 return scope.cancel;
				 }
			 };
		 }]);
})(angular);