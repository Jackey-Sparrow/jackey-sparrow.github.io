/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
    'use strict'

    angular.module('desktop').controller('desktopController',
        ['$scope', 'desktopDataService',
            function ($scope, desktopDataService) {
                $scope.name = 'desktop';

                $scope.collection = desktopDataService.getCollection();


            }]);
})(angular);