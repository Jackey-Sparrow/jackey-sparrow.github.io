/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopWindowDataService',
		['desktopWindowHttpService', 'platformDataServiceFactory',
		 function (httpService, platformDataServiceFactory) {

			 var service = platformDataServiceFactory.Create(httpService);
			 service.getName = 'window';
			 return service;

		 }]);

})(angular);