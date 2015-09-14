var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("controller communicating");

$http.get('/prospectlist').success(function(res) {
  console.log("data sent from controller");
  $scope.prospectlist = res;
});

}]);
