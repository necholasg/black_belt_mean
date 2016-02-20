myApp.factory('questionFactory', function($http){
  factory = {};
  questions = [];

  factory.newQuestion = function(newQuestion, callback){
    $http.post('/question/new', newQuestion).success(function(res){
      if(res.status == "error"){
        console.log("error with adding question");
      }else{
        questions.push(res)
        callback({status:"success", question: res});
      }
    });
  }
  factory.allQuestions = function(callback){
    $http.get('/questions').success(function(res){
      if(res.status == "error"){
        console.log("error with getting topics");
      }else{
        callback(res);
      }
    });
  }
  factory.getQuestion = function(question_id, callback){
    $http.get('/question/'+question_id).success(function(res){
      if(res.status == "error"){
        console.log("error with getting question");
      }else{
        callback(res);
      }
    });
  }
  factory.newAnswer = function(answerData, callback){
    $http.post('/newAnswer', answerData).success(function(res){
      if(res.status == "error"){
        console.log("error with adding answer");
      }else{
        callback(res);
      }
    });
  }
  factory.getFullQuestion = function(question_id, callback){
    $http.get('/questionFull/'+question_id).success(function(res){
      if(res.status == "error"){
        console.log("error with getting question");
      }else{
        callback(res);
      }
    });
  }
  factory.like = function(answer_id, callback){
    $http.put('/like/'+answer_id).success(function(res){
      if(res.status == "error"){
        console.log("error with adding Like");
      }else{
        callback(res);
      }
    });
  }

  return factory;
})
