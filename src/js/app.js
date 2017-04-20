import angular from 'angular'
import uiRouter from 'angular-ui-router'

import routing from './routing'

const app = angular.module('app', [uiRouter])

app.controller('test', ['$scope', function($scope){

  console.log('whassup');

  $scope.view = {}
  $scope.view.booyah = "booyah"

}]).config(routing)

export default app
