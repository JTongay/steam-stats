import angular from 'angular'
import uiRouter from 'angular-ui-router'

import routing from './routing'
import testService from './services/testService'
import testService2 from './services/testService2'

angular.module('app', [uiRouter])
       .config(routing)
       .service('testService',testService)
       .service('testService2',testService2)
       .name
