var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("controller communicating");

var refresh = function(){
  $http.get('/prospectlist').success(function(res) {
    console.log("data sent from controller");
    $scope.prospectlist = res;
    $scope.prospect = "";
  });
};

refresh();

$scope.addProspect = function() {
  console.log($scope.prospect);
  $http.post('/prospectlist', $scope.prospect).success(function(response){
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/prospectlist/' + id).success(function(response){
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/prospectlist/' + id).success(function(response){
    $scope.prospect = response;
  });
};

$scope.update = function(){
  console.log($scope.prospect._id);
  $http.put('/prospectlist/' + $scope.prospect._id, $scope.prospect).success(function(response){
    refresh();
  });
};

$scope.deselect = function() {
  $scope.prospect = "";
};

$scope.newText = false;

$scope.$watch('newToggle', function(){
  $scope.newText = $scope.newToggle ? 'Cancel' : 'New Prospect';
});

}]);
