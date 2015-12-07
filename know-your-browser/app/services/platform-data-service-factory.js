/**
 * Created by Jackey Li on 2015/12/7.
 */
(function (angular) {
	'use strict';

	angular.module('platform').factory('platformDataServiceFactory',
		['$q', function ($q) {

			var service = {};

			service.Create = function (httpService) {

				function getData() {
					var defer = $q.defer();
					httpService.getData().then(function (response) {
						defer.resolve(collect(response.data));
					}, function () {
						defer.reject('error');
					});
					return defer.promise;
				}

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

				function filterCollection(search, source) {
					var result = {};
					for (var key in source) {
						if (~key.indexOf(search)) {
							result[key] = source[key];
						}
					}
					return result;
				}

				return {
					getData: getData,
					filterCollection: filterCollection
				}

			};

			return service;
		}]);
})(angular);