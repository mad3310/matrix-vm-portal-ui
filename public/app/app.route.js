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
            if (value.subSubRoutes) {
              angular.forEach(value.subSubRoutes, function (value, key) {
                $routeProvider.when(value.url, value.config);
              });
            }
          });
        }
      });
      $routeProvider.otherwise({redirectTo: '/dashboard'});
    },
    getRoutes = function () {
      return [
        {//begin Dashboard routes
          url: '/dashboard',
          title: 'Dashboard',
          icon: 'fa fa-tachometer',
          config: {
            template: 'Dashboard'
          }
        },//end Dashboard routes
        {//begin rds routes
          url: '/rds',
          title: 'RDS管理',
          icon: 'fa fa-database',
          config: {
            redirectTo: '/rds/cluster'
          },
          subRoutes: [
            {
              url: '/rds/cluster',
              title: '集群管理',
              config: {
                redirectTo: '/rds/cluster/container-cluster'
              },
              subSubRoutes: [
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
                template: '备份与恢复'
              }
            }, {
              url: '/rds/monitor',
              title: '监控管理',
              config: {
                redirectTo: '/rds/monitor/container-cluster'
              },
              subSubRoutes: [
                {
                  url: '/rds/monitor/container-cluster',
                  title: 'Container集群监控图',
                  config: {
                    template: 'Container集群监控图'
                  }
                }, {
                  url: '/rds/monitor/resource',
                  title: 'rds资源监控',
                  config: {
                    template: 'rds资源监控'
                  }
                }
              ]
            }
          ]
        },//end rds routes
        {//begin gce routes
          url: '/gce',
          title: 'GCE管理',
          icon: 'fa fa-inbox',
          config: {
            redirectTo: '/gce/cluster'
          },
          subRoutes: [
            {
              url: '/gce/cluster',
              title: '集群管理',
              config: {
                redirectTo: '/gce/cluster/container-cluster'
              },
              subSubRoutes: [
                {
                  url: '/gce/cluster/container-cluster',
                  title: 'Container集群列表',
                  config: {
                    template: 'gce Container集群列表'
                  }
                }, {
                  url: '/gce/cluster/container-list',
                  title: 'Container列表',
                  config: {
                    template: 'gce Container列表'
                  }
                }
              ]
            }, {
              url: '/gce/lit',
              title: 'GCE列表',
              config: {
                template: 'GCE列表'
              }
            }
          ]
        },//end rds routes
      ];
    };

  app.constant('routes', getRoutes());

  app.config(['$routeProvider', 'routes', routeConfigurator]);

})();
