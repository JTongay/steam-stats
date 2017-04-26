import angular from 'angular'

//import them modules
import HomeModule from './Home/Home.module'
import HomeSearchModule from './HomeSearch/HomeSearch.module'
import SearchResultsModule from './SearchResults/SearchResults.module'

const ComponentsModule = angular.module('app.components', [])
                                    .component('home', HomeModule)
                                    .component('homeSearch', HomeSearchModule)
                                    .component('searchResults', SearchResultsModule)
                                    .name

module.exports = ComponentsModule
