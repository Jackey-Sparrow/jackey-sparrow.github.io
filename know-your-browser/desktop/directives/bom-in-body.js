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
                    var html = '<table>';
                    for (var item in scope.collection) {
                        var list = scope.collection[item];
                        html += '<tr>'
                        html += '<td>';
                        html += item;
                        html += '</td>';
                        list.forEach(function (browser) {
                            html += '<td class="browser">' + browser + '</td>'
                        });
                        html += '</tr>';
                    }
                    html+='</table>';

                    element.append($compile(html)(scope));

                }
            };
        }]);

})(angular);