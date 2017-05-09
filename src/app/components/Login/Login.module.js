import angular from 'angular'

import LoginComponent from './Login.component'

const Login = {
  template: require('./Login.html'),
  controller: LoginComponent
}

const LoginModule = angular.module('login', [])
                           .component('login', Login)
                           .name

module.exports = Login
