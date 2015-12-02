/**
 * Created by Jackey Li on 2015/12/2.
 */
(function (angular) {
    'use strict';

    angular.module('desktop').directive('bomInBody',
        ['$compile', function ($compile) {
            return {
                restrict: 'A',
                scope: {
                    collection: '='
                },
                link: function (scope, element, attr) {
                    console.log(scope);
                    var html = '<div>';
                    for (var item in scope.collection) {
                        var list = scope.collection[item];
                        html += '<div class="row">'
                        html += '<div class="eventName">';
                        html += item;
                        html += '</div>';
                        list.forEach(function (browser) {
                            html += '<div class="browserName">' + browser + '</div>'
                        });
                        html += '</div>';
                    }

                    element.append($compile(html)(scope));

                }
            };
        }]);

    angular.module('desktop').directive('bomInBodyBrowser', [function () {
        return {
            restrict: 'A',
            scope: {
                list: '='
            },
            link: function (scope, element) {
                console.log(scope);
            }
        };
    }]);
})(angular);