import angular from 'angular'
import uiRouter from 'angular-ui-router'
import 'ngstorage'
import 'bootstrap/dist/css/bootstrap.css';

import routing from './routing'
import AppConfig from './app.config'
import ComponentsModule from './components/components.module'

//services
import steamSearchService from './services/steamSearch.service'
import loginService from './services/login.service'
import userService from './services/user.service'

export const AppModule = angular.module('app', [uiRouter, 'ngStorage', ComponentsModule])
       .component('app', AppConfig)
       .config(routing)
       .service('steamSearchService', steamSearchService)
       .service('login', loginService)
       .service('user', userService)
       .name
