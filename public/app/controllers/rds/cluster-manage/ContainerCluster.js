/**
 * Created by jiangfei on 2015/8/12.
 */
(function () {
  angular.module('controllers').controller('rds.cluster-manage.ContainerClusterCrtl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.text = 'world';
      $scope.hclusterList = [];
      $http.get('/api/hcluster/list').success(function (data, status, headers, config) {
        $scope.hclusterList = data.data;
      }).error(function (data, status, headers, config) {

      });

    }]);
}())