import angular from 'angular'

import SignupComponent from './Signup.component'

const Signup = {
  template: require('./Signup.html'),
  controller: SignupComponent
}

const SignupModule = angular.module('signup', [])
                           .component('signup', Signup)
                           .name

module.exports = Signup
