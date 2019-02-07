app.controller('registerController', function ($scope,$http,$state,$rootScope) {
   url="file/state.json";
   regApi='http://localhost:8083/regisApi';
   $scope.regBtnValue="Save a Life";
    $http.get(url).then( function (response) {
        $scope.stateList = response.data;
    });
  $scope.saveLife = function (){
    var data = {
        Name:$scope.Name,
        BloodGroup:$scope.BloodGroup,
        ContactNo:$scope.ContactNumber,
        City:$scope.City,
        State:$scope.stateSelect,
        Age:$scope.Age,
        Agree:$scope.Agree
      }
      $scope.regBtnValue="Processing";
      $scope.registerProcessing=true;
      console.log(data);
    $http.post(regApi,data).then(function (response) 
    {
       
        
        if (response.data=="Registration Successfull")
        {
            $scope.registerProcessing=false;
            $scope.regBtnValue="Success"; 
        }
        else
        {
            $scope.registerProcessing=false;
            $scope.regBtnValue="Thank You";
        }
        $scope.result=response.data;
        $scope.resultShow=true;

    })
  }

});