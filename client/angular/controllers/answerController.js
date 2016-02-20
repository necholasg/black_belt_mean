myApp.controller('answerController', function($scope, storageFactory, questionFactory, $location, $routeParams){
  $scope.user = $routeParams.id;
  $scope.questionId = $routeParams.question_id;

  storageFactory.getUser($scope.user, function(data){
    $scope.onlineUser = data;
  })

  questionFactory.getQuestion($scope.questionId, function(data){
    $scope.questionInfo = data;
  })

  $scope.newAnswer = function(question_id){
    if($scope.newAnswerData.answer == null || $scope.newAnswerData.answer == undefined){
      $scope.error = true;
    }else{
      $scope.newAnswerData.answerer = $scope.onlineUser.name
      $scope.newAnswerData.question_id = question_id;
      // console.log($scope.newAnswerData);
      questionFactory.newAnswer($scope.newAnswerData, function(data){
        if(data.status == "success"){
          $scope.newAnswerData = {}
          $location.path('/board/'+ $scope.user).search({question_id: question_id})
        }
      })
    }
  }

});
