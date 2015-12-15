/**
 * Created by Jackey Li on 2015/12/7.
 */
(function (angular) {
	'use strict';

	angular.module('platform').factory('platformDataServiceFactory',
		['$q', function ($q) {

			var service = {};

			service.Create = function (httpService) {
				var statistics = {};
				var dataList;

				function getData() {
					var defer = $q.defer();
					if (!dataList) {
						httpService.getData().then(function (response) {
							dataList = collect(response.data);
							defer.resolve(dataList);
						}, function () {
							defer.reject('error');
						});
					}
					else {
						defer.resolve(dataList);
					}
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
						statistics[browserName] = events.length;
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

				function getStatistics() {
					return statistics;
				}

				return {
					getData: getData,
					filterCollection: filterCollection,
					getStatistics: getStatistics
				};

			};

			return service;
		}]);
})(angular);