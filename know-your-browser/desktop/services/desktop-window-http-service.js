/**
 * Created by Jackey Li on 2015/12/3.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopWindowHttpService',
		['$http',
		 function ($http) {
			 var service = {};

			 service.getData = function () {
				 return $http.get('desktop/content/data/window.json');
			 };

			 return service;
		 }]);
})(angular);