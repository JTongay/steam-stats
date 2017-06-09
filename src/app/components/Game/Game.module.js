import angular from 'angular'

import GameController from './Game.component.js'

const Game = {
  template: require('./Game.html'),
  controller: GameController
}

const GameModule = angular.module('game', [])
                          .component('game', Game)
                          .name

module.exports = Game
