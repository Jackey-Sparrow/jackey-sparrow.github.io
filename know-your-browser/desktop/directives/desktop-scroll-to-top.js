/**
 * Created by Jackey Li on 15/12/8.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').directive('desktopScrollToTop',
		['platformBrowserTeller',
		 function (platformBrowserTeller) {
			 return {
				 restrict: 'EA',
				 scope: {
					 content: '@'
				 },
				 template: '<div class="scrollToTop">{{::content}}</div>',
				 link: function (scope, element) {
					 console.log(platformBrowserTeller);

					 element.bind('click', function () {

						 if (platformBrowserTeller && (platformBrowserTeller.mozilla || platformBrowserTeller.msie)) {
							 //firefox IE
							 document.documentElement.scrollTop = 0;
						 }
						 else {
							 //chrome safari
							 document.body.scrollTop = 0;
						 }


					 });

					 scope.$on('$destroy', function () {
						 element.unbind('click');
					 });
				 }
			 };
		 }]);
})(angular);