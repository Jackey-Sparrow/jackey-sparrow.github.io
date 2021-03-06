/**
 * Created by Jackey Li on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').directive('bomInBody',
		['$compile', 'desktopDataService',
		 function ($compile, desktopDataService) {
			 return {
				 restrict: 'A',
				 scope: {
					 collection: '='
				 },
				 link: function (scope, element, attr) {
					 var browsers = ['CHROME', 'SAFARI', 'FIREFOX', 'IE10', 'IE9', 'IE8', 'IE7', 'IE5'];

					 function build() {
						 element.empty();
						 var html = '<table>';
						 html += '<tr>';
						 html += '<td></td>';
						 browsers.forEach(function (browser) {
							 html += '<td class="browserTitle">' + browser + '</td>';
						 });
						 html += '</tr>';

						 for (var item in scope.collection) {
							 html += '<tr>'
							 html += '<td>' + item + '</td>';
							 browsers.forEach(function (browser) {
								 var index = scope.collection[item].indexOf(browser),
									 markUp = '';
								 if (~index) {
									 markUp = browser;
								 }
								 html += '<td class="browser">' + markUp + '</td>';
							 });
							 html += '</tr>';
						 }
						 html += '</table>';

						 element.append(html);
					 }

					 var unWatch = scope.$watch('collection', function () {
						 build();
					 });

					 scope.$on('destroy', function () {
						 unWatch();
					 });

					 build();
				 }
			 };
		 }]);

})(angular);