/**
 * Created by Jackey Li on 2015/12/9.
 */
(function (angular) {
	'use strict';

	//todo: height is not right when body's height is too long
	angular.module('platform').directive('platformLoading',
		[function () {
			return {
				restrict: 'EA',
				replace: true,
				templateUrl: 'app/components/loading/templates/loading.html',
				link: function (scope) {
					scope.close = scope.cancel;
				}
			};
		}]);

	angular.module('platform').directive('platformSpinner', [function () {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'app/components/loading/templates/spinner.html'
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

						 $document[0].body.removeChild(scope.element[0]);
						 scope.$destroy();
					 };

					 scope.showLoading();

					 return scope.cancel;
				 }
			 };
		 }]);
})(angular);