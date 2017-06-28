import angular from 'angular'

import GameInfoController from './GameInfo.component.js'
import './GameInfo.scss'

const GameInfo = {
  template: require('./GameInfo.html'),
  controller: GameInfoController
}

const GameInfoModule = angular.module('gameInfo', [])
                          .component('gameInfo', GameInfo)
                          .name

module.exports = GameInfo
