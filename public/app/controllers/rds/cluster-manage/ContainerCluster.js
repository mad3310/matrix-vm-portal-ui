/**
 * Created by jiangfei on 2015/8/12.
 */
(function () {
  angular.module('controllers').controller('rds.cluster-manage.ContainerClusterCrtl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.text = 'world';
      $scope.hclusterList = [];
      $http.get('/mcluster/list?key=&&currentPage=1&&recordsPerPage=15&&mclusterName=&&hclusterName=&&userName=&&status=&_=1439539626972').success(function (data, status, headers, config) {
        $scope.hclusterList = data.data.data;
      }).error(function (data, status, headers, config) {

      });

    }]);
}())