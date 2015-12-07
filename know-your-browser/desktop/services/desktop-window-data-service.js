/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopWindowDataService',
		['desktopWindowHttpService', 'platformDataServiceFactory',
		 function (desktopHttpService, platformDataServiceFactory) {

			 return platformDataServiceFactory.Create(desktopHttpService);

		 }]);

})(angular);