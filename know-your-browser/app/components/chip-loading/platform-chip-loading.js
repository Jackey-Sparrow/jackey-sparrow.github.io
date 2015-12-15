/**
 * Created by Jackey Li on 2015/12/15.
 */
(function (angular) {
	'use strict';

	angular.module('platform').directive('platformChipLoading',
		[function () {
			return {
				restrict: 'EA',
				scope: {
					dialogLoading: '='
				},
				templateUrl: 'app/components/chip-loading/templates/chip-loading.html',
				link: function (scope, element) {
					element.parent().css('position', ' relative');
				}
			};
		}]);
})(angular);