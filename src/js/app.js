import angular from 'angular'

const app = angular.module('app', [])

app.controller('test', ['$scope', function($scope){

  console.log('whassup');

  $scope.view = {}
  $scope.view.booyah = "booyah"

}]).component('home', {
  template: `<h1>Hello There from the home component. {{$ctrl.user.name}}</h1>`,
  controller: function(){
    this.user = {name: "World"}
  }
})
