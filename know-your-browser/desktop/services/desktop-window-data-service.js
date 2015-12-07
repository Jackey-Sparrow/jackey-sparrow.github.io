/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopWindowDataService',
		['desktopWindowHttpService', 'platformDataServiceFactory',
		 function (httpService, platformDataServiceFactory) {

			 return platformDataServiceFactory.Create(httpService);

		 }]);

})(angular);