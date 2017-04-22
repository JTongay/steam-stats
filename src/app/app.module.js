import angular from 'angular'
import uiRouter from 'angular-ui-router'
import 'bootstrap/dist/css/bootstrap.css';

import routing from './routing'
import AppComponent from './app.component'
import ComponentsModule from './components/components.module'
import testService from './services/testService'
import testService2 from './services/testService2'

export const AppModule = angular.module('app', [uiRouter, ComponentsModule])
       .component('app', AppComponent)
       .config(routing)
       .service('testService',testService)
       .service('testService2',testService2)
       .name
