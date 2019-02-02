app.controller('homeController', function ($scope,$http,$state,$rootScope) {
 url="file/data.json";
 $http.get(url).then( function(response) {
    $scope.lyfSaverDetails = response.data;
 });
 $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
    
 });