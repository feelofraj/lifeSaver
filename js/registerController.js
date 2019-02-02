app.controller('registerController', function ($scope,$http,$state,$rootScope) {
   url="file/state.json";
    $http.get(url).then( function (response) {
        $scope.stateList = response.data;
    })


});