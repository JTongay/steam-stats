import angular from 'angular'
import 'angular-chart.js'

import HomeController from './Home.component'
import './Home.scss'
const Home = {
  template: require('./Home.html'),
  controller: HomeController
}

const HomeModule = angular.module('home', ['chart.js'])
                    .component('home', Home)
                    .name

module.exports = Home
