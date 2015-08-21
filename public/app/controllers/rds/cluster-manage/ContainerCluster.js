/**
 * Created by jiangfei on 2015/8/12.
 */
(function () {
  angular.module('controllers').controller('rds.cluster-manage.ContainerClusterCrtl', ['$scope', 'Config', 'HttpService',
    function ($scope, Config, HttpService) {
      $scope.searchMclusterName = '';

      $scope.statusList = Config.mclusterStatuses;
      $scope.selectedStatus = {};

      $scope.physicalClusterList = [];
      $scope.selectedPhysicalCluster = {};

      $scope.userList = [];
      $scope.selectedUser = {};

      $scope.mclusterList = [];

      $scope.currentPage = 1;
      $scope.totalItems = 0;
      $scope.pageSize = 15;
      $scope.onPageChange = function(){
        refreshMclusterList();
      };

      $scope.doFilter = function () {
        refreshMclusterList();
      };
      $scope.doClear = function () {
        $scope.searchMclusterName = '';
        $scope.selectedStatus.selected = undefined;
        $scope.selectedPhysicalCluster.selected = undefined;
        $scope.selectedUser.selected = undefined;
        refreshMclusterList();
      };

      $scope.startMcluster = function (mcluster) {
        HttpService.doPost(Config.url.mcluster_start, {mclusterId: mcluster.id}).success(function (data, status, headers, config) {
          return data;
          toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
        });
      };
      $scope.stopMcluster = function (mcluster) {
        HttpService.doPost(Config.url.mcluster_stop, {mclusterId: mcluster.id}).success(function (data, status, headers, config) {
          return data;
          toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
        });
      };

      $scope.deleteMcluster = function (mcluster) {
        return mcluster;
      };

      var refreshMclusterList = function () {
          var queryParams = {};
          queryParams.mclusterName = $scope.searchMclusterName;
          queryParams.currentPage = $scope.currentPage;
          queryParams.recordsPerPage = $scope.pageSize;
          queryParams.hclusterName = $scope.selectedPhysicalCluster.selected === undefined ? '' : $scope.selectedPhysicalCluster.selected.value;
          queryParams.userName = $scope.selectedUser.selected === undefined ? '' : $scope.selectedUser.selected.value;
          queryParams.status = $scope.selectedStatus.selected === undefined ? '' : $scope.selectedStatus.selected.value;
          HttpService.doGet(Config.url.mcluster_list, {params: queryParams}).success(function (data, status, headers, config) {
            $scope.mclusterList = data.data.data;
            $scope.totalItems = data.data.totalRecords;
          });
        },
        initPageComponents = function () {
          HttpService.doGet(Config.url.hcluster_list).success(function (data, status, headers, config) {
            $scope.physicalClusterList = data.data.map(function (hcluster) {
              return {text: hcluster.hclusterNameAlias, value: hcluster.hclusterName};
            });
          });

          HttpService.doGet(Config.url.user_list).success(function (data, status, headers, config) {
            $scope.userList = data.data.map(function (user) {
              return {text: user.userName, value: user.userName};
            });
          });
        };

      initPageComponents();
      refreshMclusterList();

    }]);
}())
