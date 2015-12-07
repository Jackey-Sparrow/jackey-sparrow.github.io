/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopDocumentDataService',
		['desktopDocumentHttpService', '$q', 'platformDataServiceFactory',
		 function (httpService, $q, platformDataServiceFactory) {

			 return platformDataServiceFactory.Create(httpService);

		 }]);

})(angular);