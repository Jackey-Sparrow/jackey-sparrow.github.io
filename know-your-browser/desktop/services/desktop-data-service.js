/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopDataService',
		['desktopHttpService', '$q',
		 function (desktopHttpService, $q) {

			 var service = {};

			 service.getBodyBom = function () {
				 var defer = $q.defer();
				 desktopHttpService.getBodyBom().then(function (response) {
					 defer.resolve(collect(response.data));
				 }, function () {
					 defer.reject('error');
				 });
				 return defer.promise;
			 };

			 function collect(source) {

				 if (!angular.isArray(source)) {
					 return;
				 }

				 var target = {};
				 source.forEach(function (item) {
					 var browserName = item.browser,
						 events = item.events.split(',');
					 loop(browserName, events);
				 });

				 function loop(browserName, events) {
					 events.forEach(function (event) {
						 target[event] ? target[event].push(browserName) : target[event] = [browserName];
					 });
				 }

				 return target;
			 }

			 service.filterCollection = function (search, source) {
				 var result = {};
				 for (var key in source) {
					 if (~key.indexOf(search)) {
						 result[key] = source[key];
					 }
				 }
				 return result;
			 };

			 return service;
		 }]);

})(angular);