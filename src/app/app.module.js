import angular from 'angular'
import uiRouter from 'angular-ui-router'
import 'ngstorage'
import 'angular-animate'
import 'angular-aria'
import 'angular-material'

import routing from './routing'
import AppConfig from './app.config'
import ComponentsModule from './components/components.module'

//services
import steamSearchService from './services/steamSearch.service'
import loginService from './services/login.service'
import userService from './services/user.service'

export const AppModule = angular.module('app', [uiRouter, 'ngStorage', ComponentsModule, 'ngAnimate', 'ngAria', 'ngMaterial'])
       .component('app', AppConfig)
       .config(routing)
       .service('steamSearchService', steamSearchService)
       .service('login', loginService)
       .service('user', userService)
       .name
