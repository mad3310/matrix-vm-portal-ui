/**
 * Created by jiangfei on 2015/8/12.
 */
(function () {
  angular.module('controllers').controller('rds.cluster-manage.ContainerClusterCrtl', ['$scope', 'Config', 'HttpService',
    function ($scope, Config, HttpService) {

      $scope.mclusterName = '';

      $scope.statusList = Config.mclusterStatuses;
      $scope.selectedStatus = {};

      $scope.physicalClusterList = [];
      $scope.selectedPhysicalCluster = {};

      $scope.userList = [];
      $scope.selectedUser = {};

      $scope.hclusterList = [];
      HttpService.doGet(Config.url.mclusterList).success(function (data, status, headers, config) {
        $scope.hclusterList = data.data.data;
      });

      HttpService.doGet(Config.url.hclusterList).success(function (data, status, headers, config) {
        $scope.physicalClusterList = data.data.map(function (hcluster) {
          return {text: hcluster.hclusterNameAlias, value: hcluster.hclusterName};
        });
      });

      HttpService.doGet(Config.url.userList).success(function (data, status, headers, config) {
        $scope.userList = data.data.map(function (user) {
          return {text: user.userName, value: user.userName};
        });
      });

    }]);
}())
