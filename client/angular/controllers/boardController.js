myApp.controller('boardController', function($scope, $location, $routeParams, storageFactory, questionFactory){
  $scope.user = $routeParams.id;
  $scope.questionId = $routeParams.question_id;

  storageFactory.getUser($scope.user, function(data){
    $scope.onlineUser = data;
  })

  questionFactory.getFullQuestion($scope.questionId, function(data){
    $scope.fullQuestion = data;
  })

  $scope.like = function(answer_id){
    questionFactory.like(answer_id, function(data){
      if(data.status == "success"){
        questionFactory.getFullQuestion($scope.questionId, function(data){
          $scope.fullQuestion = data;
        })
      }
    })
  }
});
