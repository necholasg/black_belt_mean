myApp.controller('helloController', function($scope, $location, storageFactory){
  $scope.login = function (){
    // console.log($scope.form_data.name);
		storageFactory.log_on($scope.form_data, function(data){
			$location.path('/dashboard/'+data._id);
		})
    $scope.form_data = {};
	};
});
