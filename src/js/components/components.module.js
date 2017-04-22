import angular from 'angular'
import HomeComponent from './Home/Home.component'

const ComponentsModule = angular.module('app.components', [])
                                .component('home', {
                                  template: require('./Home/Home.html'),
                                  controller: HomeComponent
                                })
                                .name

module.exports = ComponentsModule
