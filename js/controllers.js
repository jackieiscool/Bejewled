var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('TableCtrl', function ($scope) {
  $scope.rows = [0, 1, 2, 3, 4, 5];
  $scope.columns = [0, 1, 2, 3, 4, 5];
});