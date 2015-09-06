define(['controllers/app.controller'],function (controllerModule) {
	controllerModule.controller('billing_specification', ['$scope','HttpService', function($scope,HttpService){
		$scope.leModalOption = {
        id: 'le_modal1',
        content: 'leModal Test',
        isShow: false
      };
      $scope.openModalBox = function () {
        $scope.leModalOption.isShow = true;
        // toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
      };	
	}]);
});