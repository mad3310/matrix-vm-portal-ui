/**
 * Created by jiangfei on 2015/7/21.
 */
(function () {
  var controllersModule = angular.module('controllers', []);

  controllersModule.controller('SideMenuController', ['$scope', '$location', 'routes',
    function ($scope, $location, routes) {
      var isActive = function (url) {
          return $location.path().indexOf(url) > -1;
        },
        openSubMenu = function (url) {
          angular.forEach(routes, function (value, key){
            if(url==value.url){
              value.isOpen=true;
            }
            else{
              value.isOpen=false;
            }
          });
        },
        openSubSubMenu = function (url,parentRoute) {
          angular.forEach(parentRoute.subRoutes, function (value, key){
            if(url==value.url){
              value.isOpen=true;
            }
            else{
              value.isOpen=false;
            }
          });
        };
      $scope.routes = routes;
      $scope.isActive = isActive;
      $scope.openSubMenu = openSubMenu;
      $scope.openSubSubMenu = openSubSubMenu;
    }]);

  controllersModule.controller('VmListController', ['$scope', '$http','toaster',
    function ($scope, $http,toaster) {
      $scope.p1Name = 'p1';
      $scope.p2Name = 'p2';
      $scope.vmList = [];
      $scope.leModalOption = {
        id: 'le_modal1',
        content: 'leModal Test',
        isShow: false
      };
      $scope.openModalBox = function () {
        $scope.leModalOption.isShow = true;
        toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
      };
      $scope.getVmList = function () {
        $http.get('/api/vm/list').
          success(function (data, status, headers, config) {
            $scope.vmList = data;
          }).
          error(function (data, status, headers, config) {
          });
      };
    }]);

  controllersModule.controller('VmCreateController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
      $scope.name = '';
      $scope.description = '';
      $scope.cpu = '';
      $scope.ram = '';
      $scope.disk = '';
      $scope.createVm = function () {
        $http.post('/api/vm/create', {
          name: $scope.name,
          description: $scope.description,
          cpu: $scope.cpu,
          ram: $scope.ram,
          disk: $scope.disk
        }).
          success(function (data, status, headers, config) {
            $location.url('/');
          }).
          error(function (data, status, headers, config) {
          });
      };
    }]);
})();