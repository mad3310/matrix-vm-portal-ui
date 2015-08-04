/**
 * Created by jiangfei on 2015/7/21.
 */
(function(){
    var servicesModule = angular.module('Services', []);
    servicesModule.factory('RouterService', [
        function () {
            return [
                {url:'/',templateUrl:'/mcluster/templates/vm-list.html'},
                {url:'/vm/create',templateUrl:'/mcluster/templates/vm-create.html'}
            ];
        }]);
})();

