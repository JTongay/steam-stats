import angular from 'angular'
import uiRouter from 'angular-ui-router'

import routing from './routing'
import testService from './services/testService'

angular.module('app', [uiRouter])
       .config(routing)
       .provider([testService])
