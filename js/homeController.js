app.controller('homeController', function ($scope,$http,$state,$rootScope) {
   bloodGroupDetailsUrl="file/bloodGroupDetails.json";
 donorApi='http://localhost:8083/donorListApi';
 $http.get(bloodGroupDetailsUrl).then( function (response) {
   $scope.bloodGroupDetails = response.data;
});
 $http.get(donorApi).then( function(response) {
    $scope.lyfSaverDetails = response.data;
   
 });

 $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
    
 });