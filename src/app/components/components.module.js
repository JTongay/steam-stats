import angular from 'angular'

import HomeModule from './Home/Home.module'
import HomeSearchModule from './HomeSearch/HomeSearch.module'

const ComponentsModule = angular.module('app.components', [])
                                    .component('home', HomeModule)
                                    .component('homeSearch', HomeSearchModule)
                                    .name

console.log(HomeSearchModule);
console.log(HomeModule);
module.exports = ComponentsModule
