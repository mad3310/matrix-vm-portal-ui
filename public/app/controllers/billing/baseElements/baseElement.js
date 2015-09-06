define(['controllers/app.controller','Mock'],function (controllerModule) {
	controllerModule.controller('billing_baseElement', ['$scope','HttpService', function($scope,HttpService){
		$scope.itemPerPage=15;
		$scope.totalItems=0;
		$scope.currentPage=1;
		$scope.formData={};
		$scope.leModalOption = {
	        id: 'addElementModal',
	        content: 'add',
	        isShow: false
	        // func:function(){
	        // 	var inputData={
	        // 		name:$scope.formData.elementName,
	        // 		descn:$scope.formData.elementDesc
	        // 	};
	        // 	HttpService.doPost('/billing/element',inputData).success(function(data){
	        // 		$scope.elementS=data.data;
	        // 	})
	        // 	.error(function(data) {
	        // 		console.log(data)
	        // 	});
	        // }
	    };
	    $scope.leModalOption = {
	        id: 'editElementModal',
	        content: 'edit',
	        isShow: false,
	        func:function(){
	        	var inputData={
	        		name:$scope.formData.elementName,
	        		descn:$scope.formData.elementDesc
	        	};
	        	HttpService.doPost('/billing/element',inputData).success(function(data){
	        		$scope.elementS=data.data;
	        	})
	        	.error(function(data) {
	        		console.log(data)
	        	});
	        }
	    };
	    
    	// HttpService.doGet('/billing/element').success(function(data){
	    // 	console.log(data)
	    // })
		Mock.mock(/\.json/, {
		    'list|1-10': [{
		        'id|+1': 1,
		        'email': '@EMAIL'
		    }]
		})
		$.ajax({
		    url: 'hello.json',
		    dataType: 'json'
		}).done(function(data, status, jqXHR){
			console.log(JSON.stringify(data, null, 4))
		    // $('<pre>').text(JSON.stringify(data, null, 4))
		    //     .appendTo('body')
		})
		// HttpService.doGet('hello.json').success(function(data){
	 //    	console.log(data)
	 //    })
		
		$scope.addElementM=function(){
			$scope.leModalOption.isShow=true;
		}
		$scope.editElementM=function(element){
			$scope.leModalOption.isShow=true;
			$scope.id=element.id;
			$scope.formData.elementName=element.name;
			$scope.formData.elementDesc=element.descn;
		}

	}]);
});