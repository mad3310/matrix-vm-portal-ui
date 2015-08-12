/**
 * Created by jiangfei on 2015/7/21.
 */
(function () {
    var controllersModule = angular.module('controllers', []);

    controllersModule.controller('SideMenuController', ['$scope', 'routes',
        function ($scope, routes) {
            $scope.routes = routes;
        }]);

    controllersModule.controller('VmListController', ['$scope', '$http',
        function ($scope, $http) {
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

    controllersModule.controller('VmCreateController', ['$scope', '$http','$location',
        function ($scope, $http,$location) {
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