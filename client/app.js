var myApp = angular.module('myApp', ['ngRoute', 'angularMoment', 'ui.bootstrap']);

myApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'static/partials/hello.html'
    })
    .when('/dashboard/:id',{
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/board/:id',{
        templateUrl: 'static/partials/board.html'
    })
    .when('/answer/:id',{
        templateUrl: 'static/partials/answer.html'
    })
    .when('/newQuestion/:id',{
        templateUrl: 'static/partials/question.html'
    })

    .otherwise({
      redirectTo: '/'
    });
});
