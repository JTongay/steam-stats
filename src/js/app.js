import angular from 'angular'

const app = angular.module('app', [])

app.controller('test', ['$scope', function($scope){

  console.log('whassup');

  $scope.view = {}
  $scope.view.booyah = "booyah"

}])
