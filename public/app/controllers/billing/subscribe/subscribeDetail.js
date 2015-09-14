define(['controllers/app.controller'], function(controllerModule) {
    controllerModule
        .controller('subscribe.subscribeDetail', ['$scope','$routeParams', 'Config', 'HttpService', function($scope, $routeParams, Config, HttpService){
        	var subscribeId = $routeParams.id;
        	console.log("subscribeId is : "+ subscribeId);

            var refreshBillDetailList = function(){
                HttpService.doGet(Config.url.subscribe_detail.replace('{id}',subscribeId)).success(function (data, status, headers, config) {
                    $scope.subscribeDetailList = data.data.data;
                });
            }
            refreshBillDetailList();
        }]);
});
