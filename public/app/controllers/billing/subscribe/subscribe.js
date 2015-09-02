define(['controllers/app.controller'], function(controllerModule) {
    controllerModule
        .controller('billing.subscribe', ['$scope', 'Config', 'HttpService', function($scope, Config, HttpService){
            $scope.productNameList = [];
            $scope.selectedProductName = {};

            $scope.orgionList = [];
            $scope.selectedOrgion = {};

            $scope.userNameList = [];
            $scope.selectedUsername = {};

            $scope.currentPage = 1;
            $scope.totalItems = 0;
            $scope.pageSize = 15;

            $scope.doFilter = function(){
                refreshSubscribeList();
            };
            $scope.onPageChange = function(){
                refreshSubscribeList();
            };
            $scope.doClear = function(){
                $scope.selectedProductName.selected = '';
                $scope.selectedOrgion.selected = '';
                $scope.selectedUsername.selected = '';
            };

            var refreshSubscribeList = function(){
                var queryParams = {};
                queryParams.currentPage = $scope.currentPage;
                queryParams.recordsPerPage = $scope.pageSize;
                queryParams.product = $scope.selectedProductName.selected ===undefined? '' : $scope.selectedProductName.selected.value;
                queryParams.createUser = $scope.selectedUsername.selected ===undefined? '' : $scope.selectedUsername.selected.value;
                queryParams.region = $scope.selectedOrgion.selected  ===undefined? '' : $scope.selectedOrgion.selected.value;
                HttpService.doGet(Config.url.subscribe_list, {params: queryParams}).success(function (data, status, headers, config) {
                    $scope.subscribeList = data.data.data;
                    $scope.totalItems = data.data.totalRecords;
                });
            };
            var initPageComponents = function(){
                HttpService.doGet(Config.url.hcluster_list).success(function (data, status, headers, config) {
                    $scope.orgionList = data.data.map(function (hcluster) {
                        return {text: hcluster.hclusterNameAlias, value: hcluster.hclusterName};
                    });
                });

                HttpService.doGet(Config.url.user_list).success(function (data, status, headers, config) {
                    $scope.userNameList = data.data.map(function (user) {
                        return {text: user.userName, value: user.userName};
                    });
                });
            };
            initPageComponents();
            refreshSubscribeList();
        }]);
});
