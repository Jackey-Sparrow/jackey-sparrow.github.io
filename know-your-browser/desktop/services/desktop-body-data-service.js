/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopBodyDataService',
		['desktopBodyHttpService', '$q', 'platformDataServiceFactory',
		 function (desktopHttpService, $q, platformDataServiceFactory) {



			 return platformDataServiceFactory.Create(desktopHttpService);
			
		 }]);

})(angular);