/**
 * Created by jiangfei on 2015/7/22.
 */
(function () {
    'use strict';

    var app = angular.module('myApp');

    var routeConfigurator = function ($routeProvider, routes) {
            for (var i = 0, leng = routes.length; i < leng; i++) {
                $routeProvider.when(routes[i].url, routes[i].config);
            }
            $routeProvider.otherwise({redirectTo: '/'});
        },
        getRoutes = function () {
            return [
                {
                    url: '/',
                    config: {
                        title: '云主机列表',
                        templateUrl: '/mcluster/templates/vm-list.html'
                    }
                }, {
                    url: '/vm/create',
                    config: {
                        title: '创建云主机',
                        templateUrl: '/mcluster/templates/vm-create.html'
                    }
                }
            ];
        };

    app.constant('routes', getRoutes());

    app.config(['$routeProvider', 'routes', routeConfigurator]);

})();
