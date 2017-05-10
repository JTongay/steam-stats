import angular from 'angular'

import LoginFormComponent from './LoginForm.component'
require('./LoginForm.scss')

const Login = {
  template: require('./LoginForm.html'),
  controller: LoginFormComponent
}

module.exports = Login
