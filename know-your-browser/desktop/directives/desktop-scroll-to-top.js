/**
 * Created by Jackey Li on 15/12/8.
 */
(function (angular) {
    'use strict';

    angular.module('desktop').directive('desktopScrollToTop',
        [function () {
            return {
                restrict: 'EA',
                scope: {
                    content: '@'
                },
                template: '<div class="scrollToTop">{{::content}}</div>',
                link: function (scope, element) {

                    element.bind('click', function () {
                        //chrome works fine
                        document.body.scrollTop = 0;
                    });

                    scope.$on('$destroy', function () {
                        element.unbind('click');
                    });
                }
            };
        }]);
})(angular);