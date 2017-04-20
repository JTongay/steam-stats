import angular from 'angular'
import uiRouter from 'angular-ui-router'

import routing from './routing'

const app = angular.module('app', [uiRouter])

app.config(routing)

export default app
