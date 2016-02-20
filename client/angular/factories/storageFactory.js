myApp.factory('storageFactory', function($http){
  factory = {};
  factory.log_on = function(user, callback){
    $http.post('/users/new', user).success(function(res){
      if(res.status == "error"){
        console.log("error with adding user");
      }else{
        callback(res.data);
      }
    });
  }
  factory.getUser = function(id, callback){
    $http.get('/user/'+id).success(function(res){
      if(res.status == "error"){
        console.log("error grabbing user");
      }else{
        callback(res);
      }
    });
  }
  return factory;
})
