import angular from 'angular'

//import them modules
import HomeModule from './Home/Home.module'
import HomeSearchModule from './HomeSearch/HomeSearch.module'
import SearchResultsModule from './SearchResults/SearchResults.module'
import LoginModule from './Login/Login.module'
import LoginFormModule from './LoginForm/LoginForm.module'
import SignupModule from './Signup/Signup.module'
import SignupFormModule from './SignupForm/SignupForm.module'

const ComponentsModule = angular.module('app.components', [])
                                    .component('home', HomeModule)
                                    .component('homeSearch', HomeSearchModule)
                                    .component('searchResults', SearchResultsModule)
                                    .component('login', LoginModule)
                                    .component('loginForm', LoginFormModule)
                                    .component('signup', SignupModule)
                                    .component('signupForm', SignupFormModule)
                                    .name

module.exports = ComponentsModule
