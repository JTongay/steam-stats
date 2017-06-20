import angular from 'angular'

import NavController from './Nav.component'

import './Nav.scss'

const Nav = {
  template: require('./Nav.html'),
  controller: NavController
}

const NavModule = angular.module('navbar', [])
                          .component('navbar', Nav)
                          .name

export default Nav
