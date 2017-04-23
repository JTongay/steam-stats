import angular from 'angular'

import HomeController from './Home.component'

const Home = {
  template: require('./Home.html'),
  controller: HomeController
}

const HomeModule = angular.module('home', [])
                    .component('home', Home)
                    .name

module.exports = Home