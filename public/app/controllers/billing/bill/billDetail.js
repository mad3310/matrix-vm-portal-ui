define(['controllers/app.controller'], function(controllerModule) {
    controllerModule
        .controller('billing.billDetail', ['$scope', 'Config', 'HttpService', function($scope, Config, HttpService){
            $scope.productNameList = [];
            $scope.selectedProductName = {};

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
                HttpService.doGet(Config.url.bill_list, {params: queryParams}).success(function (data, status, headers, config) {
                    $scope.billList = data.data.data;
                    $scope.totalItems = data.data.totalRecords;
                });
            };
            var initPageComponents = function(){

            };
      //      initPageComponents();
            refreshSubscribeList();
        }]);
});
