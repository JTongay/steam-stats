import angular from 'angular'

import HomeModule from './Home/Home.module'
import HomeSearchModule from './HomeSearch/HomeSearch.module'

console.log(HomeModule, "home module");
console.log(HomeSearchModule, "home search module");

const ComponentsModule = angular.module('app.components', [])
                                    .component('home', HomeModule)
                                    .component('homeSearch', HomeSearchModule)
                                    .name

module.exports = ComponentsModule
