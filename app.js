var app=angular.module('myApp', ['ui.router','angularUtils.directives.dirPagination']);
 
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouteProvider) {
$stateProvider
.state('home',{
  url :'/',
  templateUrl :'view/home.html',
  controller : 'homeController'
})
.state('register',{
    url :'/Volunteer',
    templateUrl :'view/register.html',
    controller : 'registerController'
  })
  .state('Detail',{
    url :'/BloodCampaign',
    templateUrl :'view/lifeSaver.html',
    controller : 'homeController'
  })
$urlRouteProvider.otherwise('/');
}]);