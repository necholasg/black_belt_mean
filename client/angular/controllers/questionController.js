myApp.controller('questionController', function($scope, $location, $routeParams, storageFactory, questionFactory){
  $scope.user = $routeParams;

  storageFactory.getUser($scope.user.id, function(data){
    $scope.onlineUser = data;
    console.log($scope.onlineUser);
  })

  $scope.newQuestion = function(){
    if($scope.newQuestionData.question == null || $scope.newQuestionData.question == undefined){
      $scope.error = true;
    }else{
      questionFactory.newQuestion($scope.newQuestionData, function(data){
        if(data.status == "success"){
          $scope.newQuestionData = {}
          $scope.addedMessage = true;
        }
      })
    }
  }


});
