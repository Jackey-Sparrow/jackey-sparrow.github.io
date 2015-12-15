/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopDocumentDataService',
		['desktopDocumentHttpService', '$q', 'platformDataServiceFactory',
		 function (httpService, $q, platformDataServiceFactory) {

			 var service = platformDataServiceFactory.Create(httpService);
			 service.getName = 'document';
			 return service;

		 }]);

})(angular);