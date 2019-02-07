app.controller('homeController', function ($scope,$http,$state,$rootScope) {
 url="file/data.json";
 donorApi='http://localhost:8083/donorListApi';
 
 $http.get(donorApi).then( function(response) {
    $scope.lyfSaverDetails = response.data;
   
 });
 $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
    
 });