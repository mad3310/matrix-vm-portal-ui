/**
 * Created by jiangfei on 2015/8/12.
 */
(function () {
  angular.module('controllers').controller('rds.cluster-manage.ContainerClusterCrtl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.allStatus = [
        {"text": "请选择状态", "value": ""},
        {"text": "运行中", "value": "1"},
        {"text": "创建中", "value": "2"},
        {"text": "创建失败", "value": "3"},
        {"text": "异常", "value": "5"},
        {"text": "启动中", "value": "7"},
        {"text": "停止中", "value": "8"},
        {"text": "已停止", "value": "9"},
        {"text": "删除中", "value": "10"},
        {"text": "危险", "value": "13"},
        {"text": "严重危险", "value": "14"}
      ];
      $scope.selectedStatus = {};

      $scope.text = 'world';
      $scope.hclusterList = [];
      $http.get('/mcluster/list?key=&&currentPage=1&&recordsPerPage=15&&mclusterName=&&hclusterName=&&userName=&&status=&_=1439539626972').success(function (data, status, headers, config) {
        $scope.hclusterList = data.data.data;
      }).error(function (data, status, headers, config) {});

    }]);
}())
