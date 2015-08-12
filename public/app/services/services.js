/**
 * Created by jiangfei on 2015/7/21.
 */
(function(){
    var servicesModule = angular.module('Services', []);
    servicesModule.factory('RouterService', [
        function () {
            return [
                {url:'/',templateUrl:'/app/templates/vm-list.html'},
                {url:'/vm/create',templateUrl:'/app/templates/vm-create.html'}
            ];
        }]);
})();

