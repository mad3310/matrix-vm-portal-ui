define(['controllers/app.controller'], function(controllerModule) {
    controllerModule
        .controller('billing.billDetail', ['$scope','$routeParams', 'Config', 'HttpService', function($scope, $routeParams, Config, HttpService){
        	var billId = $routeParams.id;
        	console.log("billId is : "+ billId);

            var refreshBillDetailList = function(){
                HttpService.doGet(Config.url.bill_detail.replace('{id}',billId)).success(function (data, status, headers, config) {
                    $scope.billDetailList = data.data.data;
                });
            }
            refreshBillDetailList();
        }]);
});
