/**
 * Created by jiangfei on 2015/7/22.
 */
(function () {
  'use strict';

  var app = angular.module('myApp');

  var routeConfigurator = function ($routeProvider, routes) {
      angular.forEach(routes, function (value, key) {
        $routeProvider.when(value.url, value.config);
        if (value.subRoutes) {
          angular.forEach(value.subRoutes, function (value, key) {
            $routeProvider.when(value.url, value.config);
            if (value.subRoutes) {
              angular.forEach(value.subRoutes, function (value, key) {
                $routeProvider.when(value.url, value.config);
              });
            }
          });
        }
      });
      $routeProvider.otherwise({redirectTo: '/'});
    },
    getRoutes = function () {
      return [
        {
          url: '/dashboard',
          title: 'Dashboard',
          icon:'fa fa-cogs',
          config: {
            templateUrl: '/app/views/vm-create.html'
          }
        },
        {
          url: '/rds',
          title: 'RDS管理',
          icon:'rds-icon',
          config: {
            templateUrl: '/app/views/vm-list.html'
          },
          subRoutes: [
            {
              url: '/rds/cluster',
              title: '集群管理',
              config: {
                templateUrl: '/app/views/vm-list.html'
              },
              subRoutes: [
                {
                  url: '/rds/cluster/container-cluster',
                  title: 'Container集群列表',
                  config: {
                    templateUrl: '/app/views/rds/cluster-manage/container-cluster.html'
                  }
                }, {
                  url: '/rds/cluster/container-list',
                  title: 'Container列表',
                  config: {
                    templateUrl: '/app/views/vm-list.html'
                  }
                }
              ]
            }, {
              url: '/rds/backup',
              title: '备份与恢复',
              config: {
                templateUrl: '/app/views/vm-create.html'
              }
            }
          ]
        }
      ];
    };

  app.constant('routes', getRoutes());

  app.config(['$routeProvider', 'routes', routeConfigurator]);

})();
