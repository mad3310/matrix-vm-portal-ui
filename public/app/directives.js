/**
 * Created by jiangfei on 2015/7/22.
 */
(function () {
    var directivesModule = angular.module('Directives', []);

    directivesModule.directive('leModal', function () {
        return {
            restrict: 'AE',
            scope: {
                option: '=option'
            },
            transclude: true,
            link: function (scope, element, attrs) {
                var modalEl = element.children().first();
                modalEl.modal({
                    show: false,
                    backdrop: false
                });
                scope.$watch('option.isShow', function (newValue, oldValue) {
                    if (newValue) {
                        modalEl.modal('show');
                    }
                    else {
                        modalEl.modal('hide');
                    }
                });
            },
            templateUrl: '/app/templates/directives/le-modal.html'
        };
    });

})();