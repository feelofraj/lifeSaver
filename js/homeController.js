app.controller('homeController', function ($scope,$http,$state,$rootScope,$window) {
   bloodGroupDetailsUrl="file/bloodGroupDetails.json";
 donorApi='http://localhost:8083/donorListApi';
 $http.get(bloodGroupDetailsUrl).then( function (response) {
   $scope.bloodGroupDetails = response.data;
});
 $http.get(donorApi).then( function(response) {
    $scope.lyfSaverDetails = response.data;
   
 });
 
$scope.gotoTop = function (){
   window.scrollTo(0,0);
}
 $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
    
 });