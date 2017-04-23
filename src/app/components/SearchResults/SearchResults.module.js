import angular from 'angular'

import SearchResults from './SearchResults.component'

const Search = {
  template: require('./SearchResults.html'),
  controller: SearchResults,
  bindings: {
    results: '='
  }
}

const Results = angular.module('results', [])
                       .component('results', Search)
                       .name


module.exports = Search
