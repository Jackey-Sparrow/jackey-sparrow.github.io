/**
 * Created by Jackey Li on 2015/12/9.
 */
(function (angular) {
	'use strict';

	angular.module('platform').directive('platformLoading',
		['$timeout',
		 function ($timeout) {
			 return {
				 restrict: 'EA',
				 scope: {
					 loading: '='
				 },
				 replace: true,
				 template: '<div class="loading-container">' +
				 '<div class="loading-overlay"></div>' +
				 '<div class="loading-body"></div>' +
				 '</div>',
				 link: function (scope, element) {

//					 $timeout(function () {
//						 //chrome
//						 var bodyHeight = document.body.offsetHeight;
//						 console.log(bodyHeight);
//						 element.find('.loading-overlay').css('height', parseInt(bodyHeight) + 'px');
//					 });
				 }
			 };
		 }]);

	angular.module('platform').factory('$platformLoading',
		['$rootScope', '$compile', '$document',
		 function ($rootScope, $compile, $document) {
			 return {
				 show: function () {
					 var scope = $rootScope.$new(true);
					 var element = scope.element = $compile('<platform-loading></platform-loading>')(scope);
					 $document[0].body.appendChild(element[0]);

					 scope.cancel = function () {
						 //angular.element(element[0]).removeClass('loading-show');
						 $document[0].body.removeChild(element[0]);
					 };

					 return scope.cancel;
				 }
			 };
		 }]);
})(angular);