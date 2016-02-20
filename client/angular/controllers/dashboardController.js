myApp.controller('dashboardController', function($scope, $location, $routeParams, storageFactory, questionFactory){
  $scope.user = $routeParams;

  storageFactory.getUser($scope.user.id, function(data){
    $scope.onlineUser = data;
    console.log($scope.onlineUser);
  })

  questionFactory.allQuestions(function(data){
    $scope.questions = data;
  })

  $scope.answerMe = function(question_id){
    $location.path('/answer/'+$scope.user.id).search({question_id: question_id})
  }

  $scope.viewBoard = function(question_id){
    $location.path('/board/'+$scope.user.id).search({question_id: question_id})
  }

});
