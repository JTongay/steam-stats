import angular from 'angular'

import HomeSearchComponent from './HomeSearch.component'

const HomeSearch = {
  template: require('./HomeSearch.html'),
  controller: HomeSearchComponent
}

const HomeSearchModule = angular.module('homeSearch', [])
                                .component('home-search', HomeSearch)
                                .name

module.exports = HomeSearch
